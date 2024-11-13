# CDK Sample - Data Transformation Pipeline

## Overview

This is a sample CDK project that shows how to deploy either a [Blender Bounding Box Parallel Pipeline](../src/use-cases/blender/blender-boundingbox-meshes-parallel/README.md) or a [Blender Join Meshes Series Pipeline](../src/use-cases/blender/blender-join-meshes-series/README.md)


## Getting started

To deploy this CDK Sample, follow these steps to set up the required tools and configure your AWS environment:

### Prerequisites

- An AWS account. We recommend you deploy this solution in a new account.
- [AWS CLI](https://aws.amazon.com/cli/): configure your credentials

```
aws configure --profile [your-profile] 
AWS Access Key ID [None]: xxxxxx
AWS Secret Access Key [None]:yyyyyyyyyy
Default region name [None]: us-east-1 
Default output format [None]: json
```

- Node.js: v18.20.4
- [AWS CDK](https://github.com/aws/aws-cdk/releases/tag/v2.152.0): 2.152.0

### Deploy the Backend with CDK

This project is built using the [AWS Cloud Development Kit (CDK)](https://aws.amazon.com/cdk/). See [Getting Started With the AWS CDK](https://docs.aws.amazon.com/cdk/v2/guide/getting_started.html) for additional details and prerequisites.

1. Clone this repository.
    ```shell
    $ git clone <this>
    ```
2. From the project root, install the dependencies.
    ```shell
    $ npx projen install
    ```

3. Enter the code sample backend directory.
    ```shell
    $ cd cdk-sample
    ```

4. Install packages
   ```shell
   $ npm install
   ```

5. Boostrap AWS CDK resources on the AWS account.
    ```shell
    $ cdk bootstrap aws://ACCOUNT_ID/REGION
    ```

6. Set environment variables.
    ```shell
    $ export CDK_DEFAULT_ACCOUNT=<ACCOUNT_ID>
    $ export CDK_DEFAULT_REGION=<REGION>
    ```
7. Inside `bin/cdk-sample.ts` on line 20, set `deployStack` variable equal to the stack you want to deploy, either  `DeployStack.BlenderBoundingBoxMeshesStack` or `DeployStack.BlenderJoinMeshesStack`.

    `DeployStack.BlenderBoundingBoxMeshesStack` is a [Blender Bounding Box Parallel Pipeline](../src/use-cases/blender/blender-boundingbox-meshes-parallel/README.md) while `DeployStack.BlenderJoinMeshesStack` is a [Blender Join Meshes Series Pipeline](../src/use-cases/blender/blender-join-meshes-series/README.md).

8. Deploy the sample in your account. Note: Docker daemon must be running.
    ```shell
    $ cdk deploy
    ```

### Usage

1. Once deployed, log in to the AWS Console and navigate to the S3 page.

2. Find the `blender(join|boundingbox)meshesstack-sourceassetbucketXXXX` and navigate to its management page.

3. Select `Create folder` and create a folder named `input`. If you are deploying the Blender Join pipeline, create a second folder named `step-1` at the root level of the bucket.

5. 
    For Blender Bounding Box pipeline:
    * Upload the sample OBJ files from this repository inside `sample-input/sample-boundingbox/input` named `partial-mesh-01.obj`, `partial-mesh-02.obj`, and `partial-mesh-03.obj` to the new `input` folder in S3.

    For Blender Join pipeline:
    * Upload the sample OBJ files from this repository inside `sample-input/sample-join/input` named `partial-mesh-01.obj` and `partial-mesh-02.obj` to the new `input` folder in S3.
    * Upload the sample OBJ files from this repository inside `sample-input/sample-join/step-1` named `partial-mesh-03.obj` to the new `step-1` folder in S3.

7. Navigate to the Step Functions page inside the AWS Console.

8. Navigate to the `Blender(Join|Boundingbox)MeshesPipelineStateMachineWithLogGroup...` state machine management page.

9. Select `Start execution`.

10. Input the following JSON input depending on the pipeline type, and ensure to include the source asset bucket name:

    for Blender Bounding Box Pipeline:
    ```
    {
        "state_machine_global_data": {
            "job_name": "test-map"
        },
        "step_data": {
            "type": "BOUNDINGBOX",
            "source_bucket": <source_asset_bucket_name>,
            "inputs_prefix": "input",
            "outputs_prefix": "bounding-box"
        }
    }
    ```

    for Blender Join Meshes Pipeline:
    ```
    {
        "state_machine_global_data": {
            "job_name": "test-series"
        },
        "step_data": {
            "type": "JOIN",
            "step_schema": "input-output-prefix",
            "source_bucket": <source_asset_bucket_name>,
            "inputs_prefix": "input",
            "outputs_prefix": "step-1"
        }
    }
    ```

9. Select `Start Execution`.

10. When the execution is complete, navigate to the S3 bucket to view the output files.

## Cleanup

To limit the amount of expenditure in your account, destroy the stack when you are finished testing.

```shell
$ cdk destroy
```