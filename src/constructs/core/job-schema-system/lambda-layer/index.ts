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

/**
 * A construct that creates Lambda layers for job schemas
 */
export class JobSchemaSystemLambdaLayerConstruct extends Construct {
  /**
   * The Lambda layer for all job schemas
   */
  public readonly schemaLayer: pylambda.PythonLayerVersion;

  constructor(parent: Construct, name: string) {
    super(parent, name);

    this.schemaLayer = new pylambda.PythonLayerVersion(this, 'JobSchemaSystemLayer', {
      entry: path.join(__dirname, '../python-modules'),
      compatibleRuntimes: [lambda.Runtime.PYTHON_3_13],
      layerVersionName: 'JobSchemaSystemLayer',
      description: 'Lambda layer for job schema system',
    });
  }
}
