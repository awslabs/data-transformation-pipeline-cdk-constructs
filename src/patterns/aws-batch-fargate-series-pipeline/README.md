# Batch Fargate Series Pipeline

## Description
The Batch Fargate Series Pipeline pattern creates a Step Function Chain, and optionally a State Machine, with a series of Batch Submit Job Tasks. [Pass States](https://docs.aws.amazon.com/step-functions/latest/dg/state-pass.html) are generated between each series step to reformat the previous step's output state into the format required for the next step.

## Usage
Import and deploy the construct in a stack. 

### Props

* `pipelineName`: {string} The name of the pipeline.
* `steps`: {BatchFargateSubmitJobSfnChainConstructProps[]} Array of [The Batch Fargate Submit Job Sfn Chain Construct](../../constructs/aws-batch-fargate-submit-job-sfn-chain/index.ts) Props, one for each step in series.
* `createStateMachine`: {boolean} used to set whether a [State Machine with Log Group](../../constructs/aws-state-machine-with-log-group-from-chain/index.ts) is created.
* `stateMachineTimeout`: {Duration} The time after which the state machine will terminate.

Example implementation with three steps:
```
const step: BatchFargateSubmitJobSfnChainConstructProps =
    {
      stepConfig: new StepConfig(StepType.JOIN, StepSchema.INPUT_OUTPUT_PREFIX),
      bucket: sourceAssetBucket,
      batchFargateConstruct: batchFargateConstruct,
      batchEcsJobDefinition: batchEcsJobDefinition,
      constructJobDefinitionFunction: constructJobDefinitionFunction
    }

    const batchFargatePipeline = new BatchFargateSeriesPipelineConstruct(this, 'BlenderJoinMeshesPipeline', {
      ...props,
      pipelineName: 'BlenderJoinMeshes',
      steps: [step, step, step],
      createStateMachine: true,
      stateMachineTimeout: Duration.hours(6)
    });
```

### State Machine Execution

If creating a Step Function State Machine, initiate execution with input state of the following format:
```
{
    "state_machine_global_data": {
        "job_name": <name_of_job>
    },
    "step_data": { 
        "type": <type_of_job>
        "step_schema": <step_schema>
        "source_bucket": <bucket_name>
        "inputs_prefix": <source_input_bucket_prefix>
        "outputs_prefix": <output_bucket_prefix>
    }
}
```

where:

* `state_machine_global_data` persists through the pipeline
* `step_data` is passed to the next state, but may not persist through the entire pipeline.
* `job_name` is the name of the current job
* `type` is the type identifier for the job. This is a string value and is entirely dependent on container business logic interpretation, e.g. "JOIN".
* `step_schema` is the I/O schema for the step, e.g. `input-output-prefix`. See [job schemas](../../constructs/core/job-schemas-lambda-layers/index.ts).
* `source_bucket` is the bucket name of the source objects to be processed, e.g. "my-bucket-name".
* `inputs_prefix` is the S3 prefix pointing to the folder location of the input source objects, e.g. "my-project/my-job/source".
* `outputs_prefix` is the S3 prefix pointing to the folder location where the computed output objects should be stored, e.g. "my-project/my-job/output".

Example State Machine input state:
```
{
  "state_machine_global_data": {
    "job_name": "test-series"
  },
  "step_data": {
    "type": "JOIN",
    "step_schema": "input-output-prefix",
    "source_bucket": "blenderjoinmeshesstack-sourceassetbucketXXXXXXXX",
    "inputs_prefix": "input",
    "outputs_prefix": "step-1"
  }
}
```

If creating a Step Function Chain only (`createStateMachine` = false), ensure that the state is in the above format before being consumed by this chain.