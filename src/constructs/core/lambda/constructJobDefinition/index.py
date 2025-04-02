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

def lambda_handler(event, context):
    """
    Construct Job Definition
    Builds job input definition to run the Batch application
    
    Input event (example with "input-output-prefix" schema):
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
    if "step_data" not in event and "step_schema" not in event["step_data"]:
        raise Exception("Invalid input.")
    
    # import job module based on step_schema
    schema_module = event["step_data"]["step_schema"]
    
    # Map schema names to module paths
    schema_module_map = {
        "INPUT_OUTPUT_PREFIX": "input_output_prefix",
        "INPUT_SINGLE_FILE_OUTPUT_PREFIX": "input_single_file_output_prefix"
    }
    
    # Get the module path from the map
    module_path = schema_module_map.get(schema_module)
    if not module_path:
        raise Exception(f"Unknown schema module: {schema_module}")
    
    # Import the module
    schema = __import__(f"job_schema_system.python_modules.{module_path}", fromlist=["construct_definition"])
    
    definition = schema.construct_definition(event)

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
