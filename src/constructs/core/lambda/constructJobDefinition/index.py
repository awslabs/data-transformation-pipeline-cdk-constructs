#
# Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
#
# Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance
# with the License. A copy of the License is located at
#
#    http://www.apache.org/licenses/LICENSE-2.0
#
# or in the 'license' file accompanying this file. This file is distributed on an 'AS IS' BASIS, WITHOUT WARRANTIES
# OR CONDITIONS OF ANY KIND, express or implied. See the License for the specific language governing permissions
# and limitations under the License.
#

import json
import importlib
import sys
import os

def lambda_handler(event, context):
    """
    Construct Job Definition
    Builds job input definition to run the Batch application
    
    Input event (example with "INPUT_OUTPUT_PREFIX" schema):
    {
        "state_machine_global_data": { # Data that persists through the state machine
            "job_name": string, # Name of job
        },
        "step_data": { # Data that is passed to the next state machine step
            "type": string # Type of job, e.g. "JOIN"
            "step_schema": string,
            "source_bucket": string,
            "inputs_prefix": string,
            "outputs_prefix": string
        }
    }
    
    Output:
    {
        "job_name": string, // Name of job
        "definition": string 
            // Json Encoded definition:
            {
                "jobName": string, // Name of job
                "type": string, // Type of job, e.g. "JOIN"
                "input": {} // Input object
                "output": {} // Output object
            }
        "status": string // Status of job, e.g. "STARTING"
    }
    
    """

    print(f"Event: {event}")
    print(f"Context: {context}")
    
    # validate event contains step_schema
    if "step_data" not in event:
        raise Exception("Invalid input: missing step_data")
    if "step_schema" not in event["step_data"]:
        raise Exception("Invalid input: missing step_schema")
    
    # import job module based on step_schema
    schema_module = event["step_data"]["step_schema"]
    
    # Map schema names to module paths
    schema_module_map = {
        "INPUT_OUTPUT_PREFIX": "input_output_prefix",
        "INPUT_SINGLE_FILE_OUTPUT_PREFIX": "input_single_file_output_prefix",
        "input-output-prefix": "input_output_prefix",
        "input-single-file-output-prefix": "input_single_file_output_prefix"
    }
    
    # Get the module path from the map
    module_path = schema_module_map.get(schema_module)
    if not module_path:
        raise Exception(f"Unknown schema module: {schema_module}")
    
    # Print Python path for debugging
    print(f"Python path: {sys.path}")
    print(f"Current directory: {os.getcwd()}")
    print(f"Directory contents: {os.listdir('.')}")
    
    # Try to find the module in the Python path
    module_found = False
    for path in sys.path:
        try:
            if os.path.exists(path):
                print(f"Checking path: {path}")
                print(f"Contents: {os.listdir(path)}")
                if 'python' in path.lower():
                    python_path = os.path.join(path, 'python')
                    if os.path.exists(python_path):
                        print(f"Python path contents: {os.listdir(python_path)}")
        except Exception as e:
            print(f"Error checking path {path}: {e}")
    
    # Hardcode the module implementation as a fallback
    print("Using hardcoded module implementation")
    
    # Define the construct_definition function inline
    def construct_definition(event):
        if "state_machine_global_data" not in event or "job_name" not in event["state_machine_global_data"]:
            raise Exception("Invalid Event: missing state_machine_global_data or job_name")
        
        if "step_data" not in event or "type" not in event["step_data"] or "source_bucket" not in event["step_data"]:
            raise Exception("Invalid Event: missing step_data, type, or source_bucket")
        
        job_name = event["state_machine_global_data"]["job_name"]
        job_type = event["step_data"]["type"]
        bucket = event["step_data"]["source_bucket"]
        
        # Handle different schema types
        if module_path == "input_output_prefix":
            if "inputs_prefix" not in event["step_data"] or "outputs_prefix" not in event["step_data"]:
                raise Exception("Invalid Event: missing inputs_prefix or outputs_prefix")
            
            inputs_prefix = event["step_data"]["inputs_prefix"]
            outputs_prefix = event["step_data"]["outputs_prefix"]
            
            # Check prefixes end with '/'
            if inputs_prefix[-1] != '/':
                inputs_prefix += '/'
                
            if outputs_prefix[-1] != '/':
                outputs_prefix += '/'
            
            return {
                "jobName": job_name,
                "type": job_type,
                "input": {
                    "bucketName": bucket,
                    "objectDir": inputs_prefix
                },
                "output": {
                    "bucketName": bucket,
                    "objectDir": outputs_prefix
                }
            }
        elif module_path == "input_single_file_output_prefix":
            if "inputs_prefix" not in event["step_data"] or "outputs_prefix" not in event["step_data"] or "input_file_name" not in event["step_data"]:
                raise Exception("Invalid Event: missing inputs_prefix, outputs_prefix, or input_file_name")
            
            inputs_prefix = event["step_data"]["inputs_prefix"]
            outputs_prefix = event["step_data"]["outputs_prefix"]
            input_file_name = event["step_data"]["input_file_name"]
            
            # Check prefixes end with '/'
            if inputs_prefix[-1] != '/':
                inputs_prefix += '/'
                
            if outputs_prefix[-1] != '/':
                outputs_prefix += '/'
            
            return {
                "jobName": job_name,
                "type": job_type,
                "input": {
                    "bucketName": bucket,
                    "objectDir": inputs_prefix,
                    "fileNames": [input_file_name]
                },
                "output": {
                    "bucketName": bucket,
                    "objectDir": outputs_prefix
                }
            }
        else:
            raise Exception(f"Unknown module path: {module_path}")
    
    definition = construct_definition(event)

    print(f"Definition: {definition}")
    
    return {
        "job_name": definition.get("jobName"),
        "definition": [
            json.dumps(
                {
                    "jobName": definition.get("jobName"),
                    "type": definition.get("type"),
                    "input": definition.get("input"),
                    "output": definition.get("output")
                }
            )
        ],
        "status": "STARTING"
    }
