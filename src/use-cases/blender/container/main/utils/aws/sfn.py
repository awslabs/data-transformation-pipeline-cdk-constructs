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
import os

import boto3
from botocore.exceptions import ClientError
from ..logging import log
from ...utils.job.objects import JobExecutionParams

logger = log.get_logger()

task_token = os.getenv("TASK_TOKEN")

client = boto3.client(
    "stepfunctions", region_name=os.getenv("AWS_REGION", "us-east-1"))


def send_task_success(output: JobExecutionParams):
    logger.info(f"Sending Task Success. Token: {task_token}")
    try:
        return client.send_task_success(
            taskToken=task_token,
            output=output.to_json(),
        )
    except ClientError as e:
        logger.error(e)
        raise


def send_task_failure(output: JobExecutionParams):
    logger.error(f"Sending Task Failure. Token: {task_token}")
    try:
        return client.send_task_failure(
            taskToken=task_token,
            output=output.to_json(),
        )
    except ClientError as e:
        logger.error(e)
        raise
