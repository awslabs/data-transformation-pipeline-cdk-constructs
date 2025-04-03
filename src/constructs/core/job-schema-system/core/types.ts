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

/**
 * Represents the input configuration for a job schema
 */
export interface JobSchemaInput {
  type: 'prefix' | 'single-file';
  required: string[];
  validation?: {
    allowedFormats?: string[];
    maxSize?: number;
    customRules?: Array<(input: any) => boolean>;
  };
}

/**
 * Represents the output configuration for a job schema
 */
export interface JobSchemaOutput {
  type: 'prefix';
  validation?: {
    namingPattern?: string;
    customRules?: Array<(output: any) => boolean>;
  };
}

/**
 * Defines the structure of a job schema
 */
export interface JobSchemaDefinition {
  input: JobSchemaInput;
  output: JobSchemaOutput;
  construct: (event: any) => any;
}

/**
 * Defines a job type with its associated schema and validator
 */
export interface JobTypeDefinition {
  name: string;
  schema: JobSchemaDefinition;
  validator?: (input: any) => boolean;
}

/**
 * Middleware hooks for job processing
 */
export interface JobMiddleware {
  beforeValidation?: (job: any) => void;
  afterValidation?: (job: any) => void;
  beforeExecution?: (job: any) => void;
  afterExecution?: (job: any) => void;
}

/**
 * Validation result
 */
export interface ValidationResult {
  valid: boolean;
  errors?: string[];
}
