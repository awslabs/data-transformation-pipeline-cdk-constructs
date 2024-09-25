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

# import importlib.util
import importlib
import sys

from ..utils.job.objects import (
    JobDefinition,
    JobExecutionParams,
    JobStatus
)
from ..utils.aws import sfn
from ..utils.logging import log
from ..utils.job import extensions as ext

logger = log.get_logger()

def hello():
    logger.info(
        "Hello from Job Core")
    
def run(params: dict) -> JobExecutionParams:
    """
    Core runner for Jobs
    """
    definition = JobDefinition(**params)
    logger.info(f"Job Definition: {definition}")
    
    # import job based on job type 
    module = f"...jobs.{definition.type.lower()}.job"
    job = importlib.import_module(module, package=__name__)
    
    # run core job
    result = job.run(definition)
    logger.info(f"Job Result: {result}")
    
    output = JobExecutionParams(
        definition,
        result.status
    )
    
    if result.status is JobStatus.FAILED:
        sfn.send_task_failure(output)
        return output

    sfn.send_task_success(output)
    return output
    