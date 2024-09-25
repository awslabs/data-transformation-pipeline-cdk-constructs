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
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as sfn from 'aws-cdk-lib/aws-stepfunctions';
import * as tasks from 'aws-cdk-lib/aws-stepfunctions-tasks';
import { Construct } from 'constructs';

/**
 * Properties for the LambdaInvokeSfnChainConstruct
 */
export interface LambdaInvokeSfnChainConstructProps extends cdk.StackProps {
  /**
   * The Lambda Function Props to generate
   */
  readonly lambdaFunctionProps: lambda.FunctionProps;

  /**
   * The S3 buckets to grant read permissions to
   * @default undefined
   */
  readonly grantReadBuckets?: s3.Bucket[];

  /**
   * The S3 buckets to grant read/write permissions to
   * @default undefined
   */
  readonly grantReadWriteBuckets?: s3.Bucket[];

  /**
   * The S3 buckets to grant write permissions to
   * @default undefined
   */
  readonly grantWriteBuckets?: s3.Bucket[];
}

const defaultProps: Partial<LambdaInvokeSfnChainConstructProps> = {
  stackName: '',
  env: {},
};

/**
 * A construct to create a Step Function Chain to invoke a Lambda function
 */
export class LambdaInvokeSfnChainConstruct extends Construct {
  /**
   * The Step Function Chain
   */
  public readonly sfnChain: sfn.Chain;
  
  /**
   * The Step Function Definition Body
   */
  public readonly sfnDefinitionBody: sfn.DefinitionBody;

  constructor(parent: Construct, name: string, props: LambdaInvokeSfnChainConstructProps) {
    super(parent, name);

    props = { ...defaultProps, ...props };

    const sfnLambda = new lambda.Function(this, props.lambdaFunctionProps.functionName + 'Function', props.lambdaFunctionProps);
    props.grantReadBuckets?.forEach(bucket => bucket.grantRead(sfnLambda));
    props.grantReadWriteBuckets?.forEach(bucket => bucket.grantReadWrite(sfnLambda));
    props.grantWriteBuckets?.forEach(bucket => bucket.grantWrite(sfnLambda));

    const lambdaInvokeTask = new tasks.LambdaInvoke(this, props.lambdaFunctionProps.functionName + 'Task', {
      lambdaFunction: sfnLambda,
      resultSelector: { 'Payload.$': '$.Payload' },
      resultPath: '$.step_data',
    }).addCatch(new sfn.Fail(
      this,
      props.lambdaFunctionProps.functionName + ' Error',
      {
        cause: props.lambdaFunctionProps.functionName + ' Task Failed',
        error: props.lambdaFunctionProps.functionName + ' Task failed.',
      },
    )).addRetry({
      maxAttempts: 2,
      backoffRate: 2,
      interval: Duration.seconds(5),
      jitterStrategy: sfn.JitterType.NONE,
    });

    /**
         * SFN Definition
         */
    this.sfnChain = sfn.Chain.start(lambdaInvokeTask);

    this.sfnDefinitionBody = sfn.DefinitionBody.fromChainable(this.sfnChain);

  }
}