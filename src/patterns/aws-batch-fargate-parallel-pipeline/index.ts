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
import { Duration } from 'aws-cdk-lib';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as logs from 'aws-cdk-lib/aws-logs';
import * as sfn from 'aws-cdk-lib/aws-stepfunctions';
import { NagSuppressions } from 'cdk-nag';
import { Construct } from 'constructs';
import { BatchFargateSubmitJobSfnChainConstruct, BatchFargateSubmitJobSfnChainConstructProps } from '../../constructs/aws-batch-fargate-submit-job-sfn-chain';
import { LambdaInvokeSfnChainConstruct } from '../../constructs/aws-lambda-invoke-sfn-chain';
import { StateMachineWithLogGroupFromChainConstruct } from '../../constructs/aws-state-machine-with-log-group-from-chain';

/**
 * Properties for the BatchFargateParallelPipelineConstruct
 */
export interface BatchFargateParallelPipelineConstructProps extends cdk.StackProps {
  /**
     * The name of the pipeline
     */
  readonly pipelineName: string;

  /**
     * The BatchFargateSubmitJobSfnChainConstructProps for the pipeline step
     */
  readonly batchFargateSubmitJobSfnChainConstructProps: BatchFargateSubmitJobSfnChainConstructProps;

  /**
     * Should the construct create a Step Function State Machine
     * or just the Step Function Chain
     */
  readonly createStateMachine: boolean;

  /**
     * The timeout for the state machine (if created)
     * @default - 6 hours (Duration.hours(6))
     * @optional
     */
  readonly stateMachineTimeout?: Duration;
}

const defaultProps: Partial<BatchFargateParallelPipelineConstructProps> = {
  stackName: '',
  env: {},
};

/**
 * Deploy a Batch-Fargate Parallel Pipeline.
 */
export class BatchFargateParallelPipelineConstruct extends Construct {
  /**
     * The Step Function Chain
     */
  public readonly chain: sfn.Chain;

  /**
     * The Step Function State Machine
     */
  public readonly stateMachine?: sfn.StateMachine;

  /**
     * The Step Function State Machine Log Group
     */
  public readonly stateMachineLogGroup?: logs.LogGroup;

  constructor(parent: Construct, name: string, props: BatchFargateParallelPipelineConstructProps) {
    super(parent, name);

    props = { ...defaultProps, ...props };

    const mapStateInputGenerator = new LambdaInvokeSfnChainConstruct(this, `MapStateInputGenerator${this.node.id}`, {
      lambdaFunctionProps: {
        functionName: `${props.pipelineName}-MapStateInputGenerator`,
        code: lambda.Code.fromAsset(path.join(__dirname, '..', '..', 'constructs', 'core', 'lambda', 'sfnMapStateInputGenerator')),
        handler: 'index.lambda_handler',
        runtime: lambda.Runtime.PYTHON_3_12,
      },
      grantReadBuckets: [props.batchFargateSubmitJobSfnChainConstructProps.bucket!],
    });

    NagSuppressions.addResourceSuppressions(
      mapStateInputGenerator,
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

    const mapState = new sfn.Map(this, `MapState${this.node.id}`, {
      maxConcurrency: 3,
      itemsPath: sfn.JsonPath.stringAt('$.step_data.Payload.item_keys'),
      itemSelector: {
        'state_machine_global_data.$': '$.state_machine_global_data',
        'step_data': {
          'type': props.batchFargateSubmitJobSfnChainConstructProps.stepConfig.type,
          'step_schema': props.batchFargateSubmitJobSfnChainConstructProps.stepConfig.schema,
          'source_bucket.$': '$.step_data.Payload.source_bucket',
          'input_file_name.$': '$$.Map.Item.Value',
          'inputs_prefix.$': '$.step_data.Payload.inputs_prefix',
          'outputs_prefix.$': '$.step_data.Payload.outputs_prefix',
        },
      },
      resultPath: sfn.JsonPath.DISCARD,
    });

    const batchFargateSubmitJob = new BatchFargateSubmitJobSfnChainConstruct(this, `BatchFargateSubmitJobSfnChainConstructStep${this.node.id}`, props.batchFargateSubmitJobSfnChainConstructProps);

    NagSuppressions.addResourceSuppressions(
      batchFargateSubmitJob,
      [
        {
          id: 'AwsSolutions-IAM5',
          reason: 'Wildcards needed in DefaultPolicy',
        },
      ],
      true,
    );

    var chain: sfn.Chain = sfn.Chain.start(mapStateInputGenerator.sfnChain
      .next(mapState
        .itemProcessor(batchFargateSubmitJob.sfnChain),
      ),
    );
    this.chain = chain;

    if (props.createStateMachine) {
      const stateMachineWithLogGroup = new StateMachineWithLogGroupFromChainConstruct(this, 'StateMachineWithLogGroupConstruct', {
        stateMachineName: props.pipelineName + '-StateMachine',
        chain: chain,
        timeout: props.stateMachineTimeout,
      });

      this.stateMachine = stateMachineWithLogGroup.stateMachine;
      this.stateMachineLogGroup = stateMachineWithLogGroup.stateMachineLogGroup;
    }

  }

}