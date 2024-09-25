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

import boto3

s3 = boto3.client('s3')

def lambda_handler(event, context):
    """
    Builds Map State Input for the Pipeline
    
    Event contains an s3 Object directory that has the source items. This function
    creates input for the pipeline that contains a list of all source items.
    
    Input event (example):
    {
        "state_machine_global_data": { # Data that persists through the state machine
            "job_name": string, # Name of job
        },
        "step_data": { # Data that is passed to the next state machine step
            "type": string # Type of job, e.g. "JOIN"
            "source_bucket": string,
            "inputs_prefix": string,
            "outputs_prefix": string
        }
    }
    
    Output:
    {
        "job_name": string, // Name of job
        "type": string, // Type of job, e.g. "JOIN"
        "bucket": string,
        "inputs_prefix": string,
        "item_keys": [string] // List of item keys,
        "outputs_prefix": string
    }
    
    """
    print(f"Event: {event}")
    print(f"Context: {context}")
    
    # validate event contains step_schema
    if not validate_event(event):
        raise Exception("Invalid input.")
    
    job_name = event.get('state_machine_global_data').get('job_name')
    source_bucket = event.get('step_data').get('source_bucket')
    inputs_prefix = event.get('step_data').get('inputs_prefix')
    outputs_prefix = event.get('step_data').get('outputs_prefix')
    
    if inputs_prefix[-1] != '/':
        inputs_prefix += '/'
    if outputs_prefix[-1] != '/':
        outputs_prefix += '/'
    
    paginator = s3.get_paginator('list_objects_v2')
    pages = paginator.paginate(Bucket=source_bucket, Prefix=inputs_prefix)
    
    item_keys = []
    
    for page in pages:
        for item in page['Contents']:
             if item['Key'] != inputs_prefix:
                item_keys.append(item['Key'].split('/')[-1])
                
    return {
        "job_name": job_name,
        "source_bucket": source_bucket,
        "inputs_prefix": inputs_prefix,
        "outputs_prefix": outputs_prefix,
        "item_keys": item_keys
    }
    
def validate_event(event) -> bool:
    """
    Validates the event to ensure all required fields are present
    """
    required_fields = ["state_machine_global_data", "step_data"]

    for field in required_fields:
        if field not in event:
            return False
        
    required_global_fields = ["job_name"]
    
    for field in required_global_fields:
        if field not in event["state_machine_global_data"]:
            return False
        
    required_step_fields = ["type", "source_bucket", "inputs_prefix", "outputs_prefix"]
    for field in required_step_fields:
        if field not in event["step_data"]:
            return False

    return True