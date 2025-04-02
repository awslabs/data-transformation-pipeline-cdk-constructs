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
import * as logs from 'aws-cdk-lib/aws-logs';
import * as sfn from 'aws-cdk-lib/aws-stepfunctions';
import { NagSuppressions } from 'cdk-nag';
import { Construct } from 'constructs';
import { BatchFargateSubmitJobSfnChainConstruct, BatchFargateSubmitJobSfnChainConstructProps } from '../../constructs/aws-batch-fargate-submit-job-sfn-chain';
import { StateMachineWithLogGroupFromChainConstruct } from '../../constructs/aws-state-machine-with-log-group-from-chain';
import { StepType, JobTypes } from '../../constructs/core/job-utils';

/**
 * Properties for the BatchFargateSeriesPipelineConstruct
 */
export interface BatchFargateSeriesPipelineConstructProps extends cdk.StackProps {
  /**
   * The name of the pipeline
   */
  readonly pipelineName: string;

  /**
   * The steps for the pipeline in the form of BatchFargateSubmitJobSfnChainConstructProps
   */
  readonly steps: BatchFargateSubmitJobSfnChainConstructProps[];

  /**
   * Should the construct create a Step Function State Machine
   * or just the Step Function Chain
   */
  readonly createStateMachine: boolean;

  /**
   * The timeout for the state machine (if created)
   */
  readonly stateMachineTimeout?: Duration;
}

const defaultProps: Partial<BatchFargateSeriesPipelineConstructProps> = {
  stackName: '',
  env: {},
};

/**
 * Deploy a Batch-Fargate Series Pipeline.
 */
export class BatchFargateSeriesPipelineConstruct extends Construct {
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
   * @default - 6 hours (Duration.hours(6))
   * @optional
   */
  public readonly stateMachineLogGroup?: logs.LogGroup;

  constructor(parent: Construct, name: string, props: BatchFargateSeriesPipelineConstructProps) {
    super(parent, name);

    props = { ...defaultProps, ...props };

    const submitJobStates: sfn.Chain[] = [];

    const passStates: sfn.State[] = [];

    props.steps.forEach((step, index) => {
      const stepNumber = index + 1;

      const jobState = new BatchFargateSubmitJobSfnChainConstruct(this, 'BatchFargateSubmitJobSfnChainConstructStep_' + stepNumber, step);

      NagSuppressions.addResourceSuppressions(
        jobState,
        [
          {
            id: 'AwsSolutions-IAM5',
            reason: 'Wildcards needed in DefaultPolicy',
          },
        ],
        true,
      );
      submitJobStates.push(jobState.sfnChain);

      if (stepNumber < props.steps.length) {
        passStates.push(generatePassState(this, step.stepConfig.type, step.stepConfig.getJobTypeName(), stepNumber, step.bucket?.bucketName));
      }
    });

    var chain: sfn.Chain = sfn.Chain.start(submitJobStates[0]);

    passStates.forEach((state, index) => {
      chain = chain.next(state).next(submitJobStates[index + 1]);
    });

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

    function generatePassState(scope: Construct, stepType: string, jobTypeName: string, stepNumber: number, inputBucket?: string): sfn.Pass {
      return new sfn.Pass(scope, `PassState_${stepNumber}_To_${stepNumber + 1}`, {
        result: sfn.Result.fromObject({
          type: stepType.toString(),
          step_schema: jobTypeName,
          source_bucket: inputBucket,
          inputs_prefix: `step-${stepNumber}`,
          outputs_prefix: stepNumber === props.steps.length - 1 ? 'final-output' : `step-${stepNumber + 1}`,
        }),
        resultPath: '$.step_data',
      });
    }
  }
}
