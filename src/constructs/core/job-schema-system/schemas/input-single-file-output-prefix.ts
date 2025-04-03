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

import { JobSchemaDefinition, JobTypeDefinition } from '../core/types';
import { jobTypeRegistry } from '../core/schema-registry';

/**
 * Schema definition for INPUT_SINGLE_FILE_OUTPUT_PREFIX job type
 */
const inputSingleFileOutputPrefixSchema: JobSchemaDefinition = {
  input: {
    type: 'single-file',
    required: ['type', 'source_bucket', 'inputs_prefix', 'input_key', 'outputs_prefix'],
    validation: {
      customRules: [
        // Example custom rule: ensure input key is not empty
        (input) => {
          return !!input.input_key && input.input_key.trim().length > 0;
        }
      ]
    }
  },
  output: {
    type: 'prefix',
    validation: {
      // Example naming pattern: must end with a slash
      namingPattern: '.*/$'
    }
  },
  construct: (event) => {
    const job_name = event.state_machine_global_data.job_name;
    const job_type = event.step_data.type;
    const bucket = event.step_data.source_bucket;
    const inputs_prefix = event.step_data.inputs_prefix;
    const input_key = event.step_data.input_key;
    let outputs_prefix = event.step_data.outputs_prefix;
    
    // Check output prefix ends with '/'
    if (outputs_prefix[-1] !== '/') {
      outputs_prefix += '/';
    }
    
    return {
      jobName: job_name,
      type: job_type,
      input: {
        bucketName: bucket,
        objectDir: inputs_prefix,
        objectKey: input_key
      },
      output: {
        bucketName: bucket,
        objectDir: outputs_prefix
      }
    };
  }
};

/**
 * Job type definition for INPUT_SINGLE_FILE_OUTPUT_PREFIX
 */
export const inputSingleFileOutputPrefixJobType: JobTypeDefinition = {
  name: 'INPUT_SINGLE_FILE_OUTPUT_PREFIX',
  schema: inputSingleFileOutputPrefixSchema,
  validator: (_event) => {
    // Additional custom validation logic can be added here
    return true;
  }
};

// Register the job type
jobTypeRegistry.registerJobType(inputSingleFileOutputPrefixJobType);
