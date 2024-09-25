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

/**
 * Props for the StateMachineWithLogGroupFromChainConstruct construct
 */
export interface StateMachineWithLogGroupFromChainConstructProps extends cdk.StackProps {
  /**
   * State Machine name that will be appended by '-StateMachine'
   */
  readonly stateMachineName: string;
  /**
   * Chain used to create the State Machine definition body
   */
  readonly chain: sfn.Chain;
  /**
   * Maximum run time for this state machine.
   * @default - 6 hours (Duration.hours(6))
   * @optional
   */
  readonly timeout?: Duration;
}

const defaultProps: Partial<StateMachineWithLogGroupFromChainConstructProps> = {
  stackName: '',
  env: {},
};

/**
 * This construct creates a state machine and a corresponding log group.
 */
export class StateMachineWithLogGroupFromChainConstruct extends Construct {
  /**
   * The State Machine
   */
  public readonly stateMachine: sfn.StateMachine;

  /**
   * The State Machine Log Group
   */
  public readonly stateMachineLogGroup: logs.LogGroup;

  constructor(parent: Construct, name: string, props: StateMachineWithLogGroupFromChainConstructProps) {
    super(parent, name);

    props = { ...defaultProps, ...props };

    /**
         * CloudWatch Log Group
         */
    this.stateMachineLogGroup = new logs.LogGroup(
      this,
      `${props.stateMachineName}-StateMachineLogGroup`,
      {
        logGroupName: `/aws/stateMachine-${props.stateMachineName}/`,
        retention: logs.RetentionDays.ONE_WEEK,
        removalPolicy: cdk.RemovalPolicy.DESTROY,
      },
    );


    /**
     * SFN State Machine
    */

    const timeout = props.timeout ? props.timeout : Duration.hours(6);

    this.stateMachine = new sfn.StateMachine(
      this,
      `${props.stateMachineName}-StateMachine`,
      {
        definitionBody: sfn.DefinitionBody.fromChainable(props.chain),
        timeout: timeout,
        logs: {
          destination: this.stateMachineLogGroup,
          includeExecutionData: true,
          level: sfn.LogLevel.ALL,
        },
        tracingEnabled: true,
      },
    );

    NagSuppressions.addResourceSuppressions(this.stateMachine, [
      {
        id: 'AwsSolutions-IAM5',
        reason: 'State machine policies needs wildcard permission',
      },
    ], true);
  }
}