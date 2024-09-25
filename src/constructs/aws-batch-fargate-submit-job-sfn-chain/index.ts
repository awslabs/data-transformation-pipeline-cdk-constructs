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
import * as cdk from 'aws-cdk-lib';
import { Duration } from 'aws-cdk-lib';
import * as batch from 'aws-cdk-lib/aws-batch';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as sfn from 'aws-cdk-lib/aws-stepfunctions';
import * as tasks from 'aws-cdk-lib/aws-stepfunctions-tasks';
import { Construct } from 'constructs';
import { BatchFargateConstruct } from '../aws-batch-fargate';
import { StepConfig } from '../core';

/**
 * Properties for the BatchFargateSubmitJobSfnChainConstruct
 */
export interface BatchFargateSubmitJobSfnChainConstructProps extends cdk.StackProps {
  /**
   * The BatchFargateConstruct to use
   */
  readonly batchFargateConstruct: BatchFargateConstruct;
  
  /**
   * The BatchEcsJobDefinition to use
   */
  readonly batchEcsJobDefinition: batch.EcsJobDefinition;

  /**
   * The Lambda function to use for constructing the job definition
   */
  readonly constructJobDefinitionFunction: lambda.Function;

  /**
   * The StepConfig to use for the Step Function Chain step
   */
  readonly stepConfig: StepConfig;


  /**
   * The S3 bucket to use for source files
   */
  readonly bucket?: s3.Bucket;
}

const defaultProps: Partial<BatchFargateSubmitJobSfnChainConstructProps> = {
  stackName: '',
  env: {},
};

/**
 * A construct to create a Step Function Chain to submit a job to Batch
 */
export class BatchFargateSubmitJobSfnChainConstruct extends Construct {
  /**
   * The StepConfig to use for the Step Function Chain step
   */
  public readonly stepConfig: StepConfig;

  /**
   * The Step Function Chain
   */
  public readonly sfnChain: sfn.Chain;

  /**
   * The Step Function Definition Body
   */
  public readonly sfnDefinitionBody: sfn.DefinitionBody;

  /**
   * The S3 bucket to use for source files
   * @default undefined
   */
  public readonly bucket?: s3.Bucket;

  constructor(parent: Construct, name: string, props: BatchFargateSubmitJobSfnChainConstructProps) {
    super(parent, name);

    props = { ...defaultProps, ...props };

    this.stepConfig = props.stepConfig;
    this.bucket = props.bucket;

    /**
     * SFN States
     */

    // creates pipeline definition based on event jobType input
    const constructJobDefinitionTask = new tasks.LambdaInvoke(this, `ConstructJobDefinitionTask${this.node.id}`, {
      lambdaFunction: props.constructJobDefinitionFunction,
      resultSelector: { "Payload.$": "$.Payload" },
      resultPath: '$.step_data',
    }).addCatch(new sfn.Fail(
      this,
      `ConstructJobDefinitionError${this.node.id}`,
      {
        cause: 'Construct Job Definition Task Failed',
        error: 'Construct Job Definition Task failed.',
      },
    )).addRetry({
      maxAttempts: 2,
      backoffRate: 2,
      interval: Duration.seconds(5),
      jitterStrategy: sfn.JitterType.NONE,
    });

    // batch job
    const batchJob = new tasks.BatchSubmitJob(
      this,
      `BatchJob${this.node.id}`,
      {
        jobName: sfn.JsonPath.stringAt('$.step_data.Payload.job_name'),
        jobDefinitionArn: props.batchEcsJobDefinition.jobDefinitionArn,
        jobQueueArn: props.batchFargateConstruct.batchJobQueue.jobQueueArn,
        containerOverrides: {
          command: [...sfn.JsonPath.listAt('$.step_data.Payload.definition')],
          environment: {
            TASK_TOKEN: sfn.JsonPath.taskToken,
          },
        },
        resultPath: '$.step_data',
      },
    ).addCatch(new sfn.Fail(
      this,
      `BatchJobError${this.node.id}`,
      {
        cause: 'Batch Job Failed',
        error: 'Batch Job Failed.',
      },
    ));

    /**
     * SFN Definition
     */
    this.sfnChain = sfn.Chain
      .start(constructJobDefinitionTask
        .next(batchJob),
      );

    this.sfnDefinitionBody = sfn.DefinitionBody.fromChainable(this.sfnChain);
  }
}