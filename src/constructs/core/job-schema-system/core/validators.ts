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

import { JobSchemaDefinition, ValidationResult } from './types';
import { jobTypeRegistry } from './schema-registry';

/**
 * Validates an event against a job schema
 * @param event The event to validate
 * @param jobTypeName The name of the job type
 * @returns A validation result
 */
export function validateEvent(event: any, jobTypeName: string): ValidationResult {
  const errors: string[] = [];
  
  // Check if the job type exists
  if (!jobTypeRegistry.hasJobType(jobTypeName)) {
    return {
      valid: false,
      errors: [`Job type '${jobTypeName}' not found`]
    };
  }
  
  const jobType = jobTypeRegistry.getJobType(jobTypeName);
  const schema = jobType.schema;
  
  // Validate required fields
  if (!event.state_machine_global_data) {
    errors.push('Missing state_machine_global_data');
  } else if (!event.state_machine_global_data.job_name) {
    errors.push('Missing job_name in state_machine_global_data');
  }
  
  if (!event.step_data) {
    errors.push('Missing step_data');
  } else {
    // Validate step_data fields based on schema
    validateStepData(event.step_data, schema, errors);
  }
  
  // Run custom validator if provided
  if (jobType.validator && !jobType.validator(event)) {
    errors.push('Custom validation failed');
  }
  
  return {
    valid: errors.length === 0,
    errors: errors.length > 0 ? errors : undefined
  };
}

/**
 * Validates step data against a schema
 * @param stepData The step data to validate
 * @param schema The schema to validate against
 * @param errors Array to collect validation errors
 */
function validateStepData(stepData: any, schema: JobSchemaDefinition, errors: string[]): void {
  // Validate type
  if (!stepData.type) {
    errors.push('Missing type in step_data');
  }
  
  // Validate input fields
  for (const field of schema.input.required) {
    if (!(field in stepData)) {
      errors.push(`Missing required field '${field}' in step_data`);
    }
  }
  
  // Validate input format if specified
  if (schema.input.validation?.allowedFormats && stepData.format) {
    if (!schema.input.validation.allowedFormats.includes(stepData.format)) {
      errors.push(`Invalid format '${stepData.format}'. Allowed formats: ${schema.input.validation.allowedFormats.join(', ')}`);
    }
  }
  
  // Run custom input validation rules
  if (schema.input.validation?.customRules) {
    for (const rule of schema.input.validation.customRules) {
      if (!rule(stepData)) {
        errors.push('Custom input validation rule failed');
      }
    }
  }
  
  // Validate output naming pattern if specified
  if (schema.output.validation?.namingPattern && stepData.outputs_prefix) {
    const pattern = new RegExp(schema.output.validation.namingPattern);
    if (!pattern.test(stepData.outputs_prefix)) {
      errors.push(`Output prefix '${stepData.outputs_prefix}' does not match required pattern '${schema.output.validation.namingPattern}'`);
    }
  }
  
  // Run custom output validation rules
  if (schema.output.validation?.customRules) {
    for (const rule of schema.output.validation.customRules) {
      if (!rule(stepData)) {
        errors.push('Custom output validation rule failed');
      }
    }
  }
}

/**
 * Constructs a job definition from an event using the appropriate schema
 * @param event The event to construct a job definition from
 * @param jobTypeName The name of the job type
 * @returns The constructed job definition
 * @throws Error if validation fails
 */
export function constructJobDefinition(event: any, jobTypeName: string): any {
  const validationResult = validateEvent(event, jobTypeName);
  
  if (!validationResult.valid) {
    throw new Error(`Invalid event: ${validationResult.errors?.join(', ')}`);
  }
  
  const jobType = jobTypeRegistry.getJobType(jobTypeName);
  return jobType.schema.construct(event);
}
