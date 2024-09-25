/**
 *  Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance
 *  with the License. A copy of the License is located at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  or in the 'license' file accompanying this file. This file is distributed on an 'AS IS' BASIS, WITHOUT WARRANTIES
 *  OR CONDITIONS OF ANY KIND, express or implied. See the License for the specific language governing permissions
 *  and limitations under the License.
 */

import * as path from 'path';
import * as cdk from 'aws-cdk-lib';
import { Duration, Size } from 'aws-cdk-lib';
import * as batch from 'aws-cdk-lib/aws-batch';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as ecs from 'aws-cdk-lib/aws-ecs';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as s3 from 'aws-cdk-lib/aws-s3';
import { NagSuppressions } from 'cdk-nag';
import { Construct } from 'constructs';
import { BatchFargateConstruct } from '../../../constructs/aws-batch-fargate';
import { VpcBatchFargateConstruct } from '../../../constructs/aws-vpc-batch-fargate';
import { JobSchemasLambdaLayersConstruct, JobSchema } from '../../../constructs/core/job-schemas-lambda-layers';
import { StepConfig, StepType } from '../../../constructs/core/job-utils';
import { BatchFargateParallelPipelineConstruct } from '../../../patterns/aws-batch-fargate-parallel-pipeline';

export class BlenderBoundingBoxMeshesStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const serverAccessLogsBucket = new s3.Bucket(this, 'ServerAccessLogsBucket', {
      autoDeleteObjects: true,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      encryption: s3.BucketEncryption.S3_MANAGED,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      enforceSSL: true,
      lifecycleRules: [
        {
          enabled: true,
          expiration: Duration.days(14),
        },
      ],
    });

    const sourceAssetBucket = new s3.Bucket(this, 'SourceAssetBucket', {
      autoDeleteObjects: true,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      encryption: s3.BucketEncryption.S3_MANAGED,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      serverAccessLogsBucket: serverAccessLogsBucket,
      serverAccessLogsPrefix: 'source-asset-bucket-access-logs',
      enforceSSL: true,
    });

    const pipelineNetwork = new VpcBatchFargateConstruct(this, 'PipelineNetwork', {
      ...props,
      gatewayVpcEndpointServices: [ec2.GatewayVpcEndpointAwsService.S3],
      interfaceVpcEndpointServices: [
        ec2.InterfaceVpcEndpointAwsService.ECR,
        ec2.InterfaceVpcEndpointAwsService.ECR_DOCKER,
        ec2.InterfaceVpcEndpointAwsService.BATCH,
        ec2.InterfaceVpcEndpointAwsService.CLOUDWATCH_LOGS,
        ec2.InterfaceVpcEndpointAwsService.STEP_FUNCTIONS,
      ],
    });

    const jobSchemaLambdaLayers = new JobSchemasLambdaLayersConstruct(this, 'JobSchemaLambdaLayers');

    /**
     * Batch Resources
     */
    const bucketPolicy = new iam.PolicyDocument({
      statements: [
        new iam.PolicyStatement({
          actions: ['s3:GetObject', 's3:PutObject', 's3:DeleteObject'],
          resources: [
            sourceAssetBucket.bucketArn,
            `${sourceAssetBucket.bucketArn}/*`,
          ],
        }),
        new iam.PolicyStatement({
          actions: ['s3:ListBucket'],
          resources: [sourceAssetBucket.bucketArn],
        }),
      ],
    });

    const stateTaskPolicy = new iam.PolicyDocument({
      statements: [
        new iam.PolicyStatement({
          actions: ['states:SendTaskSuccess', 'states:SendTaskFailure'],
          resources: [`arn:aws:states:${cdk.Stack.of(this).region}:${cdk.Stack.of(this).account}:*`],
        }),
      ],
    });

    const containerExecutionRole = new iam.Role(
      this,
      'ContainerExecutionRole',
      {
        assumedBy: new iam.ServicePrincipal('ecs-tasks.amazonaws.com'),
        managedPolicies: [
          iam.ManagedPolicy.fromAwsManagedPolicyName(
            'service-role/AmazonECSTaskExecutionRolePolicy',
          ),
        ],
      },
    );

    const containerJobRole = new iam.Role(
      this,
      'ContainerJobRole',
      {
        assumedBy: new iam.ServicePrincipal('ecs-tasks.amazonaws.com'),
        inlinePolicies: {
          InputBucketPolicy: bucketPolicy,
          OutputBucketPolicy: bucketPolicy,
          StateTaskPolicy: stateTaskPolicy,
        },
      },
    );

    NagSuppressions.addResourceSuppressions(
      [
        containerExecutionRole,
        containerJobRole,
      ],
      [
        {
          id: 'AwsSolutions-IAM4',
          reason: 'service-role/AmazonECSTaskExecutionRolePolicy is used.',
        },
        {
          id: 'AwsSolutions-IAM5',
          reason: 'Need wildcard for access to S3 bucket contents.',
        },
      ],
      true,
    );

    NagSuppressions.addStackSuppressions(
      this,
      [
        {
          id: 'AwsSolutions-IAM5',
          reason: 'AWSLambdaBasicExecutionRole is used.',
        },
      ],
      true,
    );

    // Batch ECS Job Definition
    const batchEcsJobDefinition = new batch.EcsJobDefinition(
      this,
      'BatchJobDefinition',
      {
        jobDefinitionName: 'BlenderParallelJobDefinition',
        retryAttempts: 1,
        container: new batch.EcsFargateContainerDefinition(this, 'BatchJobDefinitionContainer', {
          cpu: 2,
          image: ecs.AssetImage.fromAsset(
            path.join(__dirname, '../container'),
            {
              file: 'Dockerfile',
            },
          ),
          memory: Size.gibibytes(4),
          environment: {
            AWS_REGION: cdk.Stack.of(this).region,
            AWS_ACCOUNT: cdk.Stack.of(this).account,
          },
          jobRole: containerJobRole,
          executionRole: containerExecutionRole,
        }),
      },
    );

    /**
     * AWS Batch Job Definition & Compute Env for Job Container
     */
    const batchFargateConstruct = new BatchFargateConstruct(this, 'BatchFargate', {
      vpc: pipelineNetwork.vpc,
      subnets: pipelineNetwork.subnets,
      securityGroups: pipelineNetwork.securityGroups,
    });

    const constructJobDefinitionFunction = new lambda.Function(this, 'ConstructJobDefinitionFunction',
      {
        runtime: lambda.Runtime.PYTHON_3_12,
        code: lambda.Code.fromAsset(path.join(__dirname, '../../../constructs/core/lambda/constructJobDefinition')),
        handler: 'index.lambda_handler',
        timeout: Duration.seconds(60),
        layers: [jobSchemaLambdaLayers.inputSingleFileOutputPrefix],
      });
    sourceAssetBucket.grantRead(constructJobDefinitionFunction);

    NagSuppressions.addResourceSuppressions(
      constructJobDefinitionFunction,
      [
        {
          id: 'AwsSolutions-IAM4',
          reason: 'AWSLambdaBasicExecutionRole is used.',
        },
        {
          id: 'AwsSolutions-IAM5',
          reason: 'AWSLambdaBasicExecutionRole is used.',
        },
      ],
      true,
    );

    const batchFargatePipeline = new BatchFargateParallelPipelineConstruct(this, 'BlenderBoundingBoxMeshesPipeline', {
      ...props,
      pipelineName: 'BlenderBoundingBoxMeshes',
      batchFargateSubmitJobSfnChainConstructProps: {
        stepConfig: new StepConfig(StepType.BOUNDINGBOX, JobSchema.INPUT_SINGLE_FILE_OUTPUT_PREFIX),
        bucket: sourceAssetBucket,
        constructJobDefinitionFunction: constructJobDefinitionFunction,
        batchEcsJobDefinition: batchEcsJobDefinition,
        batchFargateConstruct: batchFargateConstruct,
      },
      createStateMachine: true,
      stateMachineTimeout: Duration.hours(6),
    });
    batchFargatePipeline.node.addDependency(sourceAssetBucket);

  }
}
