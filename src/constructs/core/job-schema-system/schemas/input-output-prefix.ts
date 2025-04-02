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
 * Schema definition for INPUT_OUTPUT_PREFIX job type
 */
const inputOutputPrefixSchema: JobSchemaDefinition = {
  input: {
    type: 'prefix',
    required: ['type', 'source_bucket', 'inputs_prefix', 'outputs_prefix'],
    validation: {
      customRules: [
        // Example custom rule: ensure prefixes don't contain spaces
        (input) => {
          const { inputs_prefix, outputs_prefix } = input;
          return !inputs_prefix.includes(' ') && !outputs_prefix.includes(' ');
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
    let inputs_prefix = event.step_data.inputs_prefix;
    let outputs_prefix = event.step_data.outputs_prefix;
    
    // Check prefixes end with '/'
    if (inputs_prefix[-1] !== '/') {
      inputs_prefix += '/';
    }
    
    if (outputs_prefix[-1] !== '/') {
      outputs_prefix += '/';
    }
    
    return {
      jobName: job_name,
      type: job_type,
      input: {
        bucketName: bucket,
        objectDir: inputs_prefix
      },
      output: {
        bucketName: bucket,
        objectDir: outputs_prefix
      }
    };
  }
};

/**
 * Job type definition for INPUT_OUTPUT_PREFIX
 */
export const inputOutputPrefixJobType: JobTypeDefinition = {
  name: 'INPUT_OUTPUT_PREFIX',
  schema: inputOutputPrefixSchema,
  validator: (event) => {
    // Additional custom validation logic can be added here
    return true;
  }
};

// Register the job type
jobTypeRegistry.registerJobType(inputOutputPrefixJobType);
