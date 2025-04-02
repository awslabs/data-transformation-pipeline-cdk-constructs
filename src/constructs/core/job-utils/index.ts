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
import { JobTypeDefinition, jobTypeRegistry } from '../job-schema-system';

/**
 * Configuration for a job step
 */
export class StepConfig {
  readonly type: string;
  readonly jobTypeDefinition: JobTypeDefinition;
  
  /**
   * Create a new step configuration
   * @param type The step type
   * @param jobTypeName The name of the job type in the registry
   */
  constructor(type: string, jobTypeName: string) {
    this.type = type;
    
    if (jobTypeRegistry.hasJobType(jobTypeName)) {
      this.jobTypeDefinition = jobTypeRegistry.getJobType(jobTypeName);
    } else {
      throw new Error(`Job type '${jobTypeName}' not found in registry`);
    }
  }
  
  /**
   * Get the job type name
   */
  getJobTypeName(): string {
    return this.jobTypeDefinition.name;
  }
  
  /**
   * Get the job schema definition
   */
  getSchema() {
    return this.jobTypeDefinition.schema;
  }
  
  /**
   * Validate an event against this step's schema
   * @param event The event to validate
   * @returns True if the event is valid, false otherwise
   */
  validateEvent(event: any): boolean {
    if (this.jobTypeDefinition.validator) {
      return this.jobTypeDefinition.validator(event);
    }
    return true;
  }
  
  /**
   * Construct a job definition from an event
   * @param event The event to construct a job definition from
   * @returns The constructed job definition
   */
  constructJobDefinition(event: any): any {
    return this.jobTypeDefinition.schema.construct(event);
  }
}

/**
 * Register a new job type
 * @param definition The job type definition
 */
export function registerJobType(definition: JobTypeDefinition): void {
  jobTypeRegistry.registerJobType(definition);
}

/**
 * Get all registered job types
 * @returns An array of all registered job type definitions
 */
export function getAllJobTypes(): JobTypeDefinition[] {
  return jobTypeRegistry.getAllJobTypes();
}

/**
 * Check if a job type exists
 * @param name The name of the job type
 * @returns True if the job type exists, false otherwise
 */
export function hasJobType(name: string): boolean {
  return jobTypeRegistry.hasJobType(name);
}

/**
 * Get a job type by name
 * @param name The name of the job type
 * @returns The job type definition
 */
export function getJobType(name: string): JobTypeDefinition {
  return jobTypeRegistry.getJobType(name);
}

/**
 * Common job types
 */
export const JobTypes = {
  INPUT_OUTPUT_PREFIX: 'INPUT_OUTPUT_PREFIX',
  INPUT_SINGLE_FILE_OUTPUT_PREFIX: 'INPUT_SINGLE_FILE_OUTPUT_PREFIX',
};

/**
 * Legacy StepType enum for backward compatibility
 */
export enum StepType {
  JOIN = 'JOIN',
  BOUNDINGBOX = 'BOUNDINGBOX'
}
