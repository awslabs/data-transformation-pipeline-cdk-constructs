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
import * as batch from 'aws-cdk-lib/aws-batch';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import { Construct } from 'constructs';

/**
 * Properties for the BatchFargateConstruct
 */
export interface BatchFargateConstructProps extends cdk.StackProps {
  /**
   * The VPC to use
   */
  readonly vpc: ec2.Vpc;

  /**
   * The subnets to use
   */
  readonly subnets: ec2.ISubnet[];

  /**
   * The security groups to use
   */
  readonly securityGroups: ec2.SecurityGroup[];
}

const defaultProps: Partial<BatchFargateConstructProps> = {
  stackName: '',
  env: {},
};

/**
 * A construct to create a Batch compute environment with Fargate
 */
export class BatchFargateConstruct extends Construct {
  /**
   * The Batch job queue associated with this compute environment
   */
  public readonly batchJobQueue: batch.JobQueue;

  constructor(parent: Construct, name: string, props: BatchFargateConstructProps) {
    super(parent, name);

    props = { ...defaultProps, ...props };

    const batchEnvironment = new batch.FargateComputeEnvironment(
      this,
      'BatchComputeEnvironment',
      {
        enabled: true,
        vpc: props.vpc,
        vpcSubnets: props.vpc.selectSubnets({
          subnets: props.subnets,
        }),
        securityGroups: props.securityGroups,
      },
    );

    this.batchJobQueue = new batch.JobQueue(this, 'BatchJobQueue', {
      computeEnvironments: [
        {
          computeEnvironment: batchEnvironment,
          order: 1,
        },
      ],
    });
  }
}