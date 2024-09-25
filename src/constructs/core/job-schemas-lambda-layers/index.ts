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
import * as pylambda from '@aws-cdk/aws-lambda-python-alpha';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';

export enum JobSchema {
  /**
     * Input and output come from S3 prefixes.
     * Input: S3 prefix
     * Output: S3 prefix
     */
  INPUT_OUTPUT_PREFIX = 'input-output-prefix',

  /**
     * Input is from a single file and output is from an S3 prefix.
     * Input: S3 prefix, object key
     * Output: S3 prefix
     */
  INPUT_SINGLE_FILE_OUTPUT_PREFIX = 'input-single-file-output-prefix'
}

export class JobSchemasLambdaLayersConstruct extends Construct {
  public readonly inputOutputPrefix: pylambda.PythonLayerVersion;
  public readonly inputSingleFileOutputPrefix: pylambda.PythonLayerVersion;

  constructor(parent: Construct, name: string) {
    super(parent, name);

    this.inputOutputPrefix = new pylambda.PythonLayerVersion(this, 'InputOutputPrefixSchemaLayer', {
      entry: path.join(__dirname, './input-output-prefix'),
      compatibleRuntimes: [lambda.Runtime.PYTHON_3_12],
    });

    this.inputSingleFileOutputPrefix = new pylambda.PythonLayerVersion(this, 'InputSingleFileOutputPrefixSchemaLayer', {
      entry: path.join(__dirname, './input-single-file-output-prefix'),
      compatibleRuntimes: [lambda.Runtime.PYTHON_3_12],
    });
  }
}