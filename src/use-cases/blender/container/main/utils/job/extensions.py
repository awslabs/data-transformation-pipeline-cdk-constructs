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

from enum import EnumMeta
import os
from pathlib import Path
from .objects import (
    JobDefinition,
    JobStatus
)
from ..logging import log

logger = log.get_logger()

def success_response(job: JobDefinition, message=None) -> JobDefinition:
    if not message:
        message = "Job executed successfully."

    logger.info(message)
    job.status = JobStatus.COMPLETE
    return job


def error_response(message=None) -> dict:
    if not message:
        message = "Job failed to execute. Please check the logs for more details."

    logger.error(message)
    return {"status": JobStatus.FAILED, "message": message}


def create_dir(parts: list) -> str:
    dir_path = os.path.join(*parts)

    if not os.path.exists(dir_path):
        Path(dir_path).mkdir(parents=True)

    return dir_path


def split_large_file(filename: str, chunk_size: int = 100000000) -> list:
    parts = []
    with open(filename, "rb") as f:
        while True:
            chunk = f.read(chunk_size)
            if not chunk:
                break
            parts.append(chunk)
    return parts


def create_key(s3_dir: str, path: str, filename: str) -> str:
    ext = os.path.splitext(filename)[1][1:]

    return os.path.join(s3_dir, ext, filename)