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

import os
import subprocess
from ...utils.job.objects import JobDefinition, JobInput, JobOutput
from ...utils.job import extensions as ext
from ...utils.logging import log
from ...utils.aws import s3

logger = log.get_logger()

def run(jobDefinition: JobDefinition) -> JobDefinition:

    # create local input and output dirs in container
    local_input_dir = ext.create_dir(["tmp", "input"])
    local_output_dir = ext.create_dir(["tmp", "output"])

    logger.info("Running Job...")
    logger.info(f"Job: {jobDefinition}")

    # get job input and output
    input = JobInput(**jobDefinition.input)
    output = JobOutput(**jobDefinition.output)

    # get objects from s3. Check first if we have a local build path for debugging
    local_input_path = os.path.join(local_input_dir, input.fileNames[0])
    logger.info(f"Downloading Input File: {local_input_path}")
    s3.download(input.bucketName, os.path.join(input.objectDir, input.fileNames[0]), local_input_path)
                
    # run the Blender Object Oriented Bounding Box Job
    iteration_file_name_prefix = input.fileNames[0].split('.')[0]
    output_file_name = f"{iteration_file_name_prefix}.obb-mesh.obj"
    logger.info(f"Output File Name: {output_file_name}")
    job_response = blender_obb_job(
        local_input_path, local_output_dir, output_file_name)
    logger.info(f"Job Response: {job_response}")

    # gather outputs and upload to s3
    for file in job_response["output_files"]:
        object_key = os.path.join(output.objectDir, file)
        file_path = os.path.join(local_output_dir, file)

        logger.info(f"Uploading Bounding Box Mesh File: {file_path}")
        s3.uploadV2(output.bucketName, object_key, file_path)

    # send success response back to core | keep source bucket ,key, file extension the same as we are not making intermediate conversion files
    
    
    return ext.success_response(jobDefinition)

def blender_obb_job(input_dir, output_dir, file_name) -> dict:
    """
    Blender Object Oriented Bounding Box Job
    """
    logger.info("Executing Blender Object Oriented Bounding Box Job...")
    
    output_path = os.path.join(output_dir, file_name)
    
    # Formulate local subprocess to run Blender Join Job
    BLENDER_OBB_CMD = ['blender',
                           '--background',
                           '-P', '/main/blender/boundingbox/boundingbox.py',
                           '--', 
                           input_dir,
                           output_path]
    
    subprocess.run(BLENDER_OBB_CMD)
    
    # Get an array of all file names in output directory
    output_files = os.listdir(output_dir)
    
    return {
        "output_dir": output_dir,
        "output_files": output_files
    }