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

import { JobTypeDefinition, LegacyJobSchema } from './types';

/**
 * Registry for job types and their associated schemas
 */
export class JobTypeRegistry {
  private static instance: JobTypeRegistry;
  private jobTypes: Map<string, JobTypeDefinition> = new Map();
  
  /**
   * Get the singleton instance of JobTypeRegistry
   */
  public static getInstance(): JobTypeRegistry {
    if (!JobTypeRegistry.instance) {
      JobTypeRegistry.instance = new JobTypeRegistry();
    }
    return JobTypeRegistry.instance;
  }
  
  /**
   * Register a new job type
   * @param definition The job type definition
   * @throws Error if a job type with the same name already exists
   */
  public registerJobType(definition: JobTypeDefinition): void {
    if (this.jobTypes.has(definition.name)) {
      throw new Error(`Job type '${definition.name}' is already registered`);
    }
    this.jobTypes.set(definition.name, definition);
  }
  
  /**
   * Get a job type by name
   * @param name The name of the job type
   * @returns The job type definition
   * @throws Error if the job type is not found
   */
  public getJobType(name: string): JobTypeDefinition {
    const jobType = this.jobTypes.get(name);
    if (!jobType) {
      throw new Error(`Job type '${name}' not found`);
    }
    return jobType;
  }
  
  /**
   * Check if a job type exists
   * @param name The name of the job type
   * @returns True if the job type exists, false otherwise
   */
  public hasJobType(name: string): boolean {
    return this.jobTypes.has(name);
  }
  
  /**
   * Get all registered job types
   * @returns An array of all registered job type definitions
   */
  public getAllJobTypes(): JobTypeDefinition[] {
    return Array.from(this.jobTypes.values());
  }
  
  /**
   * Convert a legacy job schema to a job type name
   * @param schema The legacy job schema
   * @returns The corresponding job type name
   */
  public static legacySchemaToJobType(schema: LegacyJobSchema): string {
    switch (schema) {
      case LegacyJobSchema.INPUT_OUTPUT_PREFIX:
        return 'INPUT_OUTPUT_PREFIX';
      case LegacyJobSchema.INPUT_SINGLE_FILE_OUTPUT_PREFIX:
        return 'INPUT_SINGLE_FILE_OUTPUT_PREFIX';
      default:
        throw new Error(`Unknown legacy schema: ${schema}`);
    }
  }
}

// Export a singleton instance
export const jobTypeRegistry = JobTypeRegistry.getInstance();
