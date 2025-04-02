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

import { JobMiddleware } from './types';

/**
 * Middleware manager for job processing
 */
export class MiddlewareManager {
  private static instance: MiddlewareManager;
  private middlewares: JobMiddleware[] = [];
  
  /**
   * Get the singleton instance of MiddlewareManager
   */
  public static getInstance(): MiddlewareManager {
    if (!MiddlewareManager.instance) {
      MiddlewareManager.instance = new MiddlewareManager();
    }
    return MiddlewareManager.instance;
  }
  
  /**
   * Register a middleware
   * @param middleware The middleware to register
   */
  public registerMiddleware(middleware: JobMiddleware): void {
    this.middlewares.push(middleware);
  }
  
  /**
   * Run the beforeValidation hooks
   * @param job The job to process
   */
  public runBeforeValidation(job: any): void {
    for (const middleware of this.middlewares) {
      if (middleware.beforeValidation) {
        middleware.beforeValidation(job);
      }
    }
  }
  
  /**
   * Run the afterValidation hooks
   * @param job The job to process
   */
  public runAfterValidation(job: any): void {
    for (const middleware of this.middlewares) {
      if (middleware.afterValidation) {
        middleware.afterValidation(job);
      }
    }
  }
  
  /**
   * Run the beforeExecution hooks
   * @param job The job to process
   */
  public runBeforeExecution(job: any): void {
    for (const middleware of this.middlewares) {
      if (middleware.beforeExecution) {
        middleware.beforeExecution(job);
      }
    }
  }
  
  /**
   * Run the afterExecution hooks
   * @param job The job to process
   */
  public runAfterExecution(job: any): void {
    for (const middleware of this.middlewares) {
      if (middleware.afterExecution) {
        middleware.afterExecution(job);
      }
    }
  }
  
  /**
   * Clear all registered middlewares
   */
  public clearMiddlewares(): void {
    this.middlewares = [];
  }
}

// Export a singleton instance
export const middlewareManager = MiddlewareManager.getInstance();

/**
 * Process a job through the middleware pipeline and validation
 * @param job The job to process
 * @param processFunction The function to process the job
 * @returns The result of the process function
 */
export function processJobWithMiddleware<T>(job: any, processFunction: (job: any) => T): T {
  // Run before validation hooks
  middlewareManager.runBeforeValidation(job);
  
  // Validation would happen here (handled separately in validators.ts)
  
  // Run after validation hooks
  middlewareManager.runAfterValidation(job);
  
  // Run before execution hooks
  middlewareManager.runBeforeExecution(job);
  
  // Execute the process function
  const result = processFunction(job);
  
  // Run after execution hooks
  middlewareManager.runAfterExecution(job);
  
  return result;
}
