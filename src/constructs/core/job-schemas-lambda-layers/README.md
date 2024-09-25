# Job Schemas
Job schemas abstract the definition of Input/Output interfaces from the job definition creation logic. For example, the [Construct Job Definition](../lambda/constructJobDefinition/index.py) Lambda function dynamically imports the `construct_definition` function at runtime based on a schema parameter.

Each job schemas consist of a [construct_definition function](../job-schemas-lambda-layers/input-output-prefix/input-output-prefix.py), a [lambda layer](./index.ts), and the inclusion in a [JobSchema enum](./index.ts).

## List of Job Schemas
| **Job Schema** | Description | Input | Output | [Enum Value](index.ts) |
|:-------------|:-------------|:-------------|:-------------|:-------------|
| [input-output-prefix](./input-output-prefix/input-output-prefix.py) | Input and output come from S3 prefixes (folders) | S3 Prefix | S3 Prefix | JobSchema.INPUT_OUTPUT_PREFIX |
| [input-single-file-output-prefix](./input-single-file-output-prefix/input-single-file-output-prefix.py) | Input is from a single file and output is from an S3 prefix | S3 Prefix, Object Key | S3 Prefix | JobSchema.INPUT_SINGLE_FILE_OUTPUT_PREFIX |

## Usage
The implementation of Job Definition Step Function State Machine constructs like the [BatchFargateSubmitJobSfnChain](../../aws-batch-fargate-submit-job-sfn-chain/index.ts) requires manipulation of state between the steps to conform to the job schema of the next step. Custom logic is needed to do this transformation. See the [BatchFargateSeriesPipeline](../../../patterns/aws-batch-fargate-series-pipeline/index.ts) Pass State implementation details for an example of how this is done for a dynamic job schema solution.