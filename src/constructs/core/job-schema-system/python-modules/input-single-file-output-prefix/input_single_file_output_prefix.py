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
def construct_definition(event) -> dict:
    if validate_event(event) == False:
        raise Exception("Invalid Event")
    
    job_name = event.get("state_machine_global_data").get("job_name")
    job_type = event.get("step_data").get("type")
    bucket = event.get("step_data").get("source_bucket")
    inputs_prefix = event.get("step_data").get("inputs_prefix")
    outputs_prefix = event.get("step_data").get("outputs_prefix")
    input_file_name = event.get("step_data").get("input_file_name")
    
    # Check prefixes end with '/'
    if inputs_prefix[-1] != '/':
        inputs_prefix += '/'
        
    if outputs_prefix[-1] != '/':
        outputs_prefix += '/'
    
    definition = {
        "jobName": job_name,
        "type": job_type,
        "input": {
            "bucketName": bucket,
            "objectDir": inputs_prefix,
            "fileNames": [ input_file_name ]
        },
        "output": {
            "bucketName": bucket,
            "objectDir": outputs_prefix
        }
    }

    return definition

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
        
    required_step_fields = ["type", "source_bucket", "inputs_prefix", "outputs_prefix", "input_file_name"]
    for field in required_step_fields:
        if field not in event["step_data"]:
            return False

    return True