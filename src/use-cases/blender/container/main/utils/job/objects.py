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
from enum import EnumMeta
from dataclasses import dataclass, asdict
from typing import Optional
import uuid


"""
Pipeline Definition Dataclasses
"""
class JobStatus(EnumMeta):
    PENDING = "PENDING"
    STARTING = "STARTING"
    RUNNING = "RUNNING"
    COMPLETE = "COMPLETE"
    FAILED = "FAILED"

@dataclass 
class JsonEncodable:
    def to_json(self) -> str:
        return json.dumps(asdict(self))


@dataclass
class JobDefinitionBase(JsonEncodable):
    bucketName: str


@dataclass
class JobInput(JobDefinitionBase):
    objectDir: str
    fileNames: Optional[list[str]] = None
    sceneKey: Optional[str] = None


@dataclass
class JobOutput(JobDefinitionBase):
    objectDir: str
    fileNames: Optional[list[str]] = None


@dataclass 
class JobError(JsonEncodable): 
    error: Exception
    status: JobStatus = JobStatus.FAILED
    
@dataclass 
class JobDefinition(JsonEncodable):
    jobName: str
    type: str
    input: JobInput
    output: JobOutput
    status: JobStatus = JobStatus.PENDING
    id: str = ""

    def __post_init__(self):
        self.id = str(uuid.uuid4())

@dataclass
class JobExecutionParams(JsonEncodable):
    jobDefinition: JobDefinition
    status: JobStatus = JobStatus.PENDING