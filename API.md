# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BatchFargateConstruct <a name="BatchFargateConstruct" id="@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateConstruct"></a>

A construct to create a Batch compute environment with Fargate.

#### Initializers <a name="Initializers" id="@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateConstruct.Initializer"></a>

```typescript
import { BatchFargateConstruct } from '@awslabs/data-transformation-pipeline-cdk-constructs'

new BatchFargateConstruct(parent: Construct, name: string, props: BatchFargateConstructProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateConstruct.Initializer.parameter.parent">parent</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateConstruct.Initializer.parameter.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateConstruct.Initializer.parameter.props">props</a></code> | <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateConstructProps">BatchFargateConstructProps</a></code> | *No description.* |

---

##### `parent`<sup>Required</sup> <a name="parent" id="@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateConstruct.Initializer.parameter.parent"></a>

- *Type:* constructs.Construct

---

##### `name`<sup>Required</sup> <a name="name" id="@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateConstruct.Initializer.parameter.name"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateConstruct.Initializer.parameter.props"></a>

- *Type:* <a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateConstructProps">BatchFargateConstructProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateConstruct.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateConstruct.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateConstruct.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateConstruct.isConstruct"></a>

```typescript
import { BatchFargateConstruct } from '@awslabs/data-transformation-pipeline-cdk-constructs'

BatchFargateConstruct.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateConstruct.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateConstruct.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateConstruct.property.batchJobQueue">batchJobQueue</a></code> | <code>aws-cdk-lib.aws_batch.JobQueue</code> | The Batch job queue associated with this compute environment. |

---

##### `node`<sup>Required</sup> <a name="node" id="@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateConstruct.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `batchJobQueue`<sup>Required</sup> <a name="batchJobQueue" id="@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateConstruct.property.batchJobQueue"></a>

```typescript
public readonly batchJobQueue: JobQueue;
```

- *Type:* aws-cdk-lib.aws_batch.JobQueue

The Batch job queue associated with this compute environment.

---


### BatchFargateParallelPipelineConstruct <a name="BatchFargateParallelPipelineConstruct" id="@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateParallelPipelineConstruct"></a>

Deploy a Batch-Fargate Parallel Pipeline.

#### Initializers <a name="Initializers" id="@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateParallelPipelineConstruct.Initializer"></a>

```typescript
import { BatchFargateParallelPipelineConstruct } from '@awslabs/data-transformation-pipeline-cdk-constructs'

new BatchFargateParallelPipelineConstruct(parent: Construct, name: string, props: BatchFargateParallelPipelineConstructProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateParallelPipelineConstruct.Initializer.parameter.parent">parent</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateParallelPipelineConstruct.Initializer.parameter.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateParallelPipelineConstruct.Initializer.parameter.props">props</a></code> | <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateParallelPipelineConstructProps">BatchFargateParallelPipelineConstructProps</a></code> | *No description.* |

---

##### `parent`<sup>Required</sup> <a name="parent" id="@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateParallelPipelineConstruct.Initializer.parameter.parent"></a>

- *Type:* constructs.Construct

---

##### `name`<sup>Required</sup> <a name="name" id="@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateParallelPipelineConstruct.Initializer.parameter.name"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateParallelPipelineConstruct.Initializer.parameter.props"></a>

- *Type:* <a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateParallelPipelineConstructProps">BatchFargateParallelPipelineConstructProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateParallelPipelineConstruct.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateParallelPipelineConstruct.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateParallelPipelineConstruct.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateParallelPipelineConstruct.isConstruct"></a>

```typescript
import { BatchFargateParallelPipelineConstruct } from '@awslabs/data-transformation-pipeline-cdk-constructs'

BatchFargateParallelPipelineConstruct.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateParallelPipelineConstruct.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateParallelPipelineConstruct.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateParallelPipelineConstruct.property.chain">chain</a></code> | <code>aws-cdk-lib.aws_stepfunctions.Chain</code> | The Step Function Chain. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateParallelPipelineConstruct.property.stateMachine">stateMachine</a></code> | <code>aws-cdk-lib.aws_stepfunctions.StateMachine</code> | The Step Function State Machine. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateParallelPipelineConstruct.property.stateMachineLogGroup">stateMachineLogGroup</a></code> | <code>aws-cdk-lib.aws_logs.LogGroup</code> | The Step Function State Machine Log Group. |

---

##### `node`<sup>Required</sup> <a name="node" id="@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateParallelPipelineConstruct.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `chain`<sup>Required</sup> <a name="chain" id="@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateParallelPipelineConstruct.property.chain"></a>

```typescript
public readonly chain: Chain;
```

- *Type:* aws-cdk-lib.aws_stepfunctions.Chain

The Step Function Chain.

---

##### `stateMachine`<sup>Optional</sup> <a name="stateMachine" id="@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateParallelPipelineConstruct.property.stateMachine"></a>

```typescript
public readonly stateMachine: StateMachine;
```

- *Type:* aws-cdk-lib.aws_stepfunctions.StateMachine

The Step Function State Machine.

---

##### `stateMachineLogGroup`<sup>Optional</sup> <a name="stateMachineLogGroup" id="@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateParallelPipelineConstruct.property.stateMachineLogGroup"></a>

```typescript
public readonly stateMachineLogGroup: LogGroup;
```

- *Type:* aws-cdk-lib.aws_logs.LogGroup

The Step Function State Machine Log Group.

---


### BatchFargateSeriesPipelineConstruct <a name="BatchFargateSeriesPipelineConstruct" id="@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateSeriesPipelineConstruct"></a>

Deploy a Batch-Fargate Series Pipeline.

#### Initializers <a name="Initializers" id="@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateSeriesPipelineConstruct.Initializer"></a>

```typescript
import { BatchFargateSeriesPipelineConstruct } from '@awslabs/data-transformation-pipeline-cdk-constructs'

new BatchFargateSeriesPipelineConstruct(parent: Construct, name: string, props: BatchFargateSeriesPipelineConstructProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateSeriesPipelineConstruct.Initializer.parameter.parent">parent</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateSeriesPipelineConstruct.Initializer.parameter.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateSeriesPipelineConstruct.Initializer.parameter.props">props</a></code> | <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateSeriesPipelineConstructProps">BatchFargateSeriesPipelineConstructProps</a></code> | *No description.* |

---

##### `parent`<sup>Required</sup> <a name="parent" id="@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateSeriesPipelineConstruct.Initializer.parameter.parent"></a>

- *Type:* constructs.Construct

---

##### `name`<sup>Required</sup> <a name="name" id="@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateSeriesPipelineConstruct.Initializer.parameter.name"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateSeriesPipelineConstruct.Initializer.parameter.props"></a>

- *Type:* <a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateSeriesPipelineConstructProps">BatchFargateSeriesPipelineConstructProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateSeriesPipelineConstruct.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateSeriesPipelineConstruct.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateSeriesPipelineConstruct.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateSeriesPipelineConstruct.isConstruct"></a>

```typescript
import { BatchFargateSeriesPipelineConstruct } from '@awslabs/data-transformation-pipeline-cdk-constructs'

BatchFargateSeriesPipelineConstruct.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateSeriesPipelineConstruct.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateSeriesPipelineConstruct.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateSeriesPipelineConstruct.property.chain">chain</a></code> | <code>aws-cdk-lib.aws_stepfunctions.Chain</code> | The Step Function Chain. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateSeriesPipelineConstruct.property.stateMachine">stateMachine</a></code> | <code>aws-cdk-lib.aws_stepfunctions.StateMachine</code> | The Step Function State Machine. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateSeriesPipelineConstruct.property.stateMachineLogGroup">stateMachineLogGroup</a></code> | <code>aws-cdk-lib.aws_logs.LogGroup</code> | The Step Function State Machine Log Group. |

---

##### `node`<sup>Required</sup> <a name="node" id="@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateSeriesPipelineConstruct.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `chain`<sup>Required</sup> <a name="chain" id="@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateSeriesPipelineConstruct.property.chain"></a>

```typescript
public readonly chain: Chain;
```

- *Type:* aws-cdk-lib.aws_stepfunctions.Chain

The Step Function Chain.

---

##### `stateMachine`<sup>Optional</sup> <a name="stateMachine" id="@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateSeriesPipelineConstruct.property.stateMachine"></a>

```typescript
public readonly stateMachine: StateMachine;
```

- *Type:* aws-cdk-lib.aws_stepfunctions.StateMachine

The Step Function State Machine.

---

##### `stateMachineLogGroup`<sup>Optional</sup> <a name="stateMachineLogGroup" id="@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateSeriesPipelineConstruct.property.stateMachineLogGroup"></a>

```typescript
public readonly stateMachineLogGroup: LogGroup;
```

- *Type:* aws-cdk-lib.aws_logs.LogGroup
- *Default:* 6 hours (Duration.hours(6))

The Step Function State Machine Log Group.

---


### BatchFargateSubmitJobSfnChainConstruct <a name="BatchFargateSubmitJobSfnChainConstruct" id="@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateSubmitJobSfnChainConstruct"></a>

A construct to create a Step Function Chain to submit a job to Batch.

#### Initializers <a name="Initializers" id="@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateSubmitJobSfnChainConstruct.Initializer"></a>

```typescript
import { BatchFargateSubmitJobSfnChainConstruct } from '@awslabs/data-transformation-pipeline-cdk-constructs'

new BatchFargateSubmitJobSfnChainConstruct(parent: Construct, name: string, props: BatchFargateSubmitJobSfnChainConstructProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateSubmitJobSfnChainConstruct.Initializer.parameter.parent">parent</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateSubmitJobSfnChainConstruct.Initializer.parameter.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateSubmitJobSfnChainConstruct.Initializer.parameter.props">props</a></code> | <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateSubmitJobSfnChainConstructProps">BatchFargateSubmitJobSfnChainConstructProps</a></code> | *No description.* |

---

##### `parent`<sup>Required</sup> <a name="parent" id="@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateSubmitJobSfnChainConstruct.Initializer.parameter.parent"></a>

- *Type:* constructs.Construct

---

##### `name`<sup>Required</sup> <a name="name" id="@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateSubmitJobSfnChainConstruct.Initializer.parameter.name"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateSubmitJobSfnChainConstruct.Initializer.parameter.props"></a>

- *Type:* <a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateSubmitJobSfnChainConstructProps">BatchFargateSubmitJobSfnChainConstructProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateSubmitJobSfnChainConstruct.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateSubmitJobSfnChainConstruct.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateSubmitJobSfnChainConstruct.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateSubmitJobSfnChainConstruct.isConstruct"></a>

```typescript
import { BatchFargateSubmitJobSfnChainConstruct } from '@awslabs/data-transformation-pipeline-cdk-constructs'

BatchFargateSubmitJobSfnChainConstruct.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateSubmitJobSfnChainConstruct.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateSubmitJobSfnChainConstruct.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateSubmitJobSfnChainConstruct.property.sfnChain">sfnChain</a></code> | <code>aws-cdk-lib.aws_stepfunctions.Chain</code> | The Step Function Chain. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateSubmitJobSfnChainConstruct.property.sfnDefinitionBody">sfnDefinitionBody</a></code> | <code>aws-cdk-lib.aws_stepfunctions.DefinitionBody</code> | The Step Function Definition Body. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateSubmitJobSfnChainConstruct.property.stepConfig">stepConfig</a></code> | <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.StepConfig">StepConfig</a></code> | The StepConfig to use for the Step Function Chain step. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateSubmitJobSfnChainConstruct.property.bucket">bucket</a></code> | <code>aws-cdk-lib.aws_s3.Bucket</code> | The S3 bucket to use for source files. |

---

##### `node`<sup>Required</sup> <a name="node" id="@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateSubmitJobSfnChainConstruct.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `sfnChain`<sup>Required</sup> <a name="sfnChain" id="@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateSubmitJobSfnChainConstruct.property.sfnChain"></a>

```typescript
public readonly sfnChain: Chain;
```

- *Type:* aws-cdk-lib.aws_stepfunctions.Chain

The Step Function Chain.

---

##### `sfnDefinitionBody`<sup>Required</sup> <a name="sfnDefinitionBody" id="@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateSubmitJobSfnChainConstruct.property.sfnDefinitionBody"></a>

```typescript
public readonly sfnDefinitionBody: DefinitionBody;
```

- *Type:* aws-cdk-lib.aws_stepfunctions.DefinitionBody

The Step Function Definition Body.

---

##### `stepConfig`<sup>Required</sup> <a name="stepConfig" id="@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateSubmitJobSfnChainConstruct.property.stepConfig"></a>

```typescript
public readonly stepConfig: StepConfig;
```

- *Type:* <a href="#@awslabs/data-transformation-pipeline-cdk-constructs.StepConfig">StepConfig</a>

The StepConfig to use for the Step Function Chain step.

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateSubmitJobSfnChainConstruct.property.bucket"></a>

```typescript
public readonly bucket: Bucket;
```

- *Type:* aws-cdk-lib.aws_s3.Bucket
- *Default:* undefined

The S3 bucket to use for source files.

---


### BlenderBoundingBoxMeshesStack <a name="BlenderBoundingBoxMeshesStack" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderBoundingBoxMeshesStack"></a>

#### Initializers <a name="Initializers" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderBoundingBoxMeshesStack.Initializer"></a>

```typescript
import { BlenderBoundingBoxMeshesStack } from '@awslabs/data-transformation-pipeline-cdk-constructs'

new BlenderBoundingBoxMeshesStack(scope: Construct, id: string, props?: StackProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BlenderBoundingBoxMeshesStack.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BlenderBoundingBoxMeshesStack.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BlenderBoundingBoxMeshesStack.Initializer.parameter.props">props</a></code> | <code>aws-cdk-lib.StackProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderBoundingBoxMeshesStack.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderBoundingBoxMeshesStack.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Optional</sup> <a name="props" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderBoundingBoxMeshesStack.Initializer.parameter.props"></a>

- *Type:* aws-cdk-lib.StackProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BlenderBoundingBoxMeshesStack.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BlenderBoundingBoxMeshesStack.addDependency">addDependency</a></code> | Add a dependency between this stack and another stack. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BlenderBoundingBoxMeshesStack.addMetadata">addMetadata</a></code> | Adds an arbitrary key-value pair, with information you want to record about the stack. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BlenderBoundingBoxMeshesStack.addTransform">addTransform</a></code> | Add a Transform to this stack. A Transform is a macro that AWS CloudFormation uses to process your template. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BlenderBoundingBoxMeshesStack.exportStringListValue">exportStringListValue</a></code> | Create a CloudFormation Export for a string list value. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BlenderBoundingBoxMeshesStack.exportValue">exportValue</a></code> | Create a CloudFormation Export for a string value. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BlenderBoundingBoxMeshesStack.formatArn">formatArn</a></code> | Creates an ARN from components. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BlenderBoundingBoxMeshesStack.getLogicalId">getLogicalId</a></code> | Allocates a stack-unique CloudFormation-compatible logical identity for a specific resource. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BlenderBoundingBoxMeshesStack.regionalFact">regionalFact</a></code> | Look up a fact value for the given fact for the region of this stack. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BlenderBoundingBoxMeshesStack.renameLogicalId">renameLogicalId</a></code> | Rename a generated logical identities. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BlenderBoundingBoxMeshesStack.reportMissingContextKey">reportMissingContextKey</a></code> | Indicate that a context key was expected. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BlenderBoundingBoxMeshesStack.resolve">resolve</a></code> | Resolve a tokenized value in the context of the current stack. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BlenderBoundingBoxMeshesStack.splitArn">splitArn</a></code> | Splits the provided ARN into its components. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BlenderBoundingBoxMeshesStack.toJsonString">toJsonString</a></code> | Convert an object, potentially containing tokens, to a JSON string. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BlenderBoundingBoxMeshesStack.toYamlString">toYamlString</a></code> | Convert an object, potentially containing tokens, to a YAML string. |

---

##### `toString` <a name="toString" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderBoundingBoxMeshesStack.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addDependency` <a name="addDependency" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderBoundingBoxMeshesStack.addDependency"></a>

```typescript
public addDependency(target: Stack, reason?: string): void
```

Add a dependency between this stack and another stack.

This can be used to define dependencies between any two stacks within an
app, and also supports nested stacks.

###### `target`<sup>Required</sup> <a name="target" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderBoundingBoxMeshesStack.addDependency.parameter.target"></a>

- *Type:* aws-cdk-lib.Stack

---

###### `reason`<sup>Optional</sup> <a name="reason" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderBoundingBoxMeshesStack.addDependency.parameter.reason"></a>

- *Type:* string

---

##### `addMetadata` <a name="addMetadata" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderBoundingBoxMeshesStack.addMetadata"></a>

```typescript
public addMetadata(key: string, value: any): void
```

Adds an arbitrary key-value pair, with information you want to record about the stack.

These get translated to the Metadata section of the generated template.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html)

###### `key`<sup>Required</sup> <a name="key" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderBoundingBoxMeshesStack.addMetadata.parameter.key"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderBoundingBoxMeshesStack.addMetadata.parameter.value"></a>

- *Type:* any

---

##### `addTransform` <a name="addTransform" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderBoundingBoxMeshesStack.addTransform"></a>

```typescript
public addTransform(transform: string): void
```

Add a Transform to this stack. A Transform is a macro that AWS CloudFormation uses to process your template.

Duplicate values are removed when stack is synthesized.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/transform-section-structure.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/transform-section-structure.html)

*Example*

```typescript
declare const stack: Stack;

stack.addTransform('AWS::Serverless-2016-10-31')
```


###### `transform`<sup>Required</sup> <a name="transform" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderBoundingBoxMeshesStack.addTransform.parameter.transform"></a>

- *Type:* string

The transform to add.

---

##### `exportStringListValue` <a name="exportStringListValue" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderBoundingBoxMeshesStack.exportStringListValue"></a>

```typescript
public exportStringListValue(exportedValue: any, options?: ExportValueOptions): string[]
```

Create a CloudFormation Export for a string list value.

Returns a string list representing the corresponding `Fn.importValue()`
expression for this Export. The export expression is automatically wrapped with an
`Fn::Join` and the import value with an `Fn::Split`, since CloudFormation can only
export strings. You can control the name for the export by passing the `name` option.

If you don't supply a value for `name`, the value you're exporting must be
a Resource attribute (for example: `bucket.bucketName`) and it will be
given the same name as the automatic cross-stack reference that would be created
if you used the attribute in another Stack.

One of the uses for this method is to *remove* the relationship between
two Stacks established by automatic cross-stack references. It will
temporarily ensure that the CloudFormation Export still exists while you
remove the reference from the consuming stack. After that, you can remove
the resource and the manual export.

See `exportValue` for an example of this process.

###### `exportedValue`<sup>Required</sup> <a name="exportedValue" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderBoundingBoxMeshesStack.exportStringListValue.parameter.exportedValue"></a>

- *Type:* any

---

###### `options`<sup>Optional</sup> <a name="options" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderBoundingBoxMeshesStack.exportStringListValue.parameter.options"></a>

- *Type:* aws-cdk-lib.ExportValueOptions

---

##### `exportValue` <a name="exportValue" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderBoundingBoxMeshesStack.exportValue"></a>

```typescript
public exportValue(exportedValue: any, options?: ExportValueOptions): string
```

Create a CloudFormation Export for a string value.

Returns a string representing the corresponding `Fn.importValue()`
expression for this Export. You can control the name for the export by
passing the `name` option.

If you don't supply a value for `name`, the value you're exporting must be
a Resource attribute (for example: `bucket.bucketName`) and it will be
given the same name as the automatic cross-stack reference that would be created
if you used the attribute in another Stack.

One of the uses for this method is to *remove* the relationship between
two Stacks established by automatic cross-stack references. It will
temporarily ensure that the CloudFormation Export still exists while you
remove the reference from the consuming stack. After that, you can remove
the resource and the manual export.

Here is how the process works. Let's say there are two stacks,
`producerStack` and `consumerStack`, and `producerStack` has a bucket
called `bucket`, which is referenced by `consumerStack` (perhaps because
an AWS Lambda Function writes into it, or something like that).

It is not safe to remove `producerStack.bucket` because as the bucket is being
deleted, `consumerStack` might still be using it.

Instead, the process takes two deployments:

**Deployment 1: break the relationship**:

- Make sure `consumerStack` no longer references `bucket.bucketName` (maybe the consumer
  stack now uses its own bucket, or it writes to an AWS DynamoDB table, or maybe you just
  remove the Lambda Function altogether).
- In the `ProducerStack` class, call `this.exportValue(this.bucket.bucketName)`. This
  will make sure the CloudFormation Export continues to exist while the relationship
  between the two stacks is being broken.
- Deploy (this will effectively only change the `consumerStack`, but it's safe to deploy both).

**Deployment 2: remove the bucket resource**:

- You are now free to remove the `bucket` resource from `producerStack`.
- Don't forget to remove the `exportValue()` call as well.
- Deploy again (this time only the `producerStack` will be changed -- the bucket will be deleted).

###### `exportedValue`<sup>Required</sup> <a name="exportedValue" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderBoundingBoxMeshesStack.exportValue.parameter.exportedValue"></a>

- *Type:* any

---

###### `options`<sup>Optional</sup> <a name="options" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderBoundingBoxMeshesStack.exportValue.parameter.options"></a>

- *Type:* aws-cdk-lib.ExportValueOptions

---

##### `formatArn` <a name="formatArn" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderBoundingBoxMeshesStack.formatArn"></a>

```typescript
public formatArn(components: ArnComponents): string
```

Creates an ARN from components.

If `partition`, `region` or `account` are not specified, the stack's
partition, region and account will be used.

If any component is the empty string, an empty string will be inserted
into the generated ARN at the location that component corresponds to.

The ARN will be formatted as follows:

  arn:{partition}:{service}:{region}:{account}:{resource}{sep}{resource-name}

The required ARN pieces that are omitted will be taken from the stack that
the 'scope' is attached to. If all ARN pieces are supplied, the supplied scope
can be 'undefined'.

###### `components`<sup>Required</sup> <a name="components" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderBoundingBoxMeshesStack.formatArn.parameter.components"></a>

- *Type:* aws-cdk-lib.ArnComponents

---

##### `getLogicalId` <a name="getLogicalId" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderBoundingBoxMeshesStack.getLogicalId"></a>

```typescript
public getLogicalId(element: CfnElement): string
```

Allocates a stack-unique CloudFormation-compatible logical identity for a specific resource.

This method is called when a `CfnElement` is created and used to render the
initial logical identity of resources. Logical ID renames are applied at
this stage.

This method uses the protected method `allocateLogicalId` to render the
logical ID for an element. To modify the naming scheme, extend the `Stack`
class and override this method.

###### `element`<sup>Required</sup> <a name="element" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderBoundingBoxMeshesStack.getLogicalId.parameter.element"></a>

- *Type:* aws-cdk-lib.CfnElement

The CloudFormation element for which a logical identity is needed.

---

##### `regionalFact` <a name="regionalFact" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderBoundingBoxMeshesStack.regionalFact"></a>

```typescript
public regionalFact(factName: string, defaultValue?: string): string
```

Look up a fact value for the given fact for the region of this stack.

Will return a definite value only if the region of the current stack is resolved.
If not, a lookup map will be added to the stack and the lookup will be done at
CDK deployment time.

What regions will be included in the lookup map is controlled by the
`@aws-cdk/core:target-partitions` context value: it must be set to a list
of partitions, and only regions from the given partitions will be included.
If no such context key is set, all regions will be included.

This function is intended to be used by construct library authors. Application
builders can rely on the abstractions offered by construct libraries and do
not have to worry about regional facts.

If `defaultValue` is not given, it is an error if the fact is unknown for
the given region.

###### `factName`<sup>Required</sup> <a name="factName" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderBoundingBoxMeshesStack.regionalFact.parameter.factName"></a>

- *Type:* string

---

###### `defaultValue`<sup>Optional</sup> <a name="defaultValue" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderBoundingBoxMeshesStack.regionalFact.parameter.defaultValue"></a>

- *Type:* string

---

##### `renameLogicalId` <a name="renameLogicalId" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderBoundingBoxMeshesStack.renameLogicalId"></a>

```typescript
public renameLogicalId(oldId: string, newId: string): void
```

Rename a generated logical identities.

To modify the naming scheme strategy, extend the `Stack` class and
override the `allocateLogicalId` method.

###### `oldId`<sup>Required</sup> <a name="oldId" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderBoundingBoxMeshesStack.renameLogicalId.parameter.oldId"></a>

- *Type:* string

---

###### `newId`<sup>Required</sup> <a name="newId" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderBoundingBoxMeshesStack.renameLogicalId.parameter.newId"></a>

- *Type:* string

---

##### `reportMissingContextKey` <a name="reportMissingContextKey" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderBoundingBoxMeshesStack.reportMissingContextKey"></a>

```typescript
public reportMissingContextKey(report: MissingContext): void
```

Indicate that a context key was expected.

Contains instructions which will be emitted into the cloud assembly on how
the key should be supplied.

###### `report`<sup>Required</sup> <a name="report" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderBoundingBoxMeshesStack.reportMissingContextKey.parameter.report"></a>

- *Type:* aws-cdk-lib.cloud_assembly_schema.MissingContext

The set of parameters needed to obtain the context.

---

##### `resolve` <a name="resolve" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderBoundingBoxMeshesStack.resolve"></a>

```typescript
public resolve(obj: any): any
```

Resolve a tokenized value in the context of the current stack.

###### `obj`<sup>Required</sup> <a name="obj" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderBoundingBoxMeshesStack.resolve.parameter.obj"></a>

- *Type:* any

---

##### `splitArn` <a name="splitArn" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderBoundingBoxMeshesStack.splitArn"></a>

```typescript
public splitArn(arn: string, arnFormat: ArnFormat): ArnComponents
```

Splits the provided ARN into its components.

Works both if 'arn' is a string like 'arn:aws:s3:::bucket',
and a Token representing a dynamic CloudFormation expression
(in which case the returned components will also be dynamic CloudFormation expressions,
encoded as Tokens).

###### `arn`<sup>Required</sup> <a name="arn" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderBoundingBoxMeshesStack.splitArn.parameter.arn"></a>

- *Type:* string

the ARN to split into its components.

---

###### `arnFormat`<sup>Required</sup> <a name="arnFormat" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderBoundingBoxMeshesStack.splitArn.parameter.arnFormat"></a>

- *Type:* aws-cdk-lib.ArnFormat

the expected format of 'arn' - depends on what format the service 'arn' represents uses.

---

##### `toJsonString` <a name="toJsonString" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderBoundingBoxMeshesStack.toJsonString"></a>

```typescript
public toJsonString(obj: any, space?: number): string
```

Convert an object, potentially containing tokens, to a JSON string.

###### `obj`<sup>Required</sup> <a name="obj" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderBoundingBoxMeshesStack.toJsonString.parameter.obj"></a>

- *Type:* any

---

###### `space`<sup>Optional</sup> <a name="space" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderBoundingBoxMeshesStack.toJsonString.parameter.space"></a>

- *Type:* number

---

##### `toYamlString` <a name="toYamlString" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderBoundingBoxMeshesStack.toYamlString"></a>

```typescript
public toYamlString(obj: any): string
```

Convert an object, potentially containing tokens, to a YAML string.

###### `obj`<sup>Required</sup> <a name="obj" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderBoundingBoxMeshesStack.toYamlString.parameter.obj"></a>

- *Type:* any

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BlenderBoundingBoxMeshesStack.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BlenderBoundingBoxMeshesStack.isStack">isStack</a></code> | Return whether the given object is a Stack. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BlenderBoundingBoxMeshesStack.of">of</a></code> | Looks up the first stack scope in which `construct` is defined. |

---

##### `isConstruct` <a name="isConstruct" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderBoundingBoxMeshesStack.isConstruct"></a>

```typescript
import { BlenderBoundingBoxMeshesStack } from '@awslabs/data-transformation-pipeline-cdk-constructs'

BlenderBoundingBoxMeshesStack.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderBoundingBoxMeshesStack.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isStack` <a name="isStack" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderBoundingBoxMeshesStack.isStack"></a>

```typescript
import { BlenderBoundingBoxMeshesStack } from '@awslabs/data-transformation-pipeline-cdk-constructs'

BlenderBoundingBoxMeshesStack.isStack(x: any)
```

Return whether the given object is a Stack.

We do attribute detection since we can't reliably use 'instanceof'.

###### `x`<sup>Required</sup> <a name="x" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderBoundingBoxMeshesStack.isStack.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderBoundingBoxMeshesStack.of"></a>

```typescript
import { BlenderBoundingBoxMeshesStack } from '@awslabs/data-transformation-pipeline-cdk-constructs'

BlenderBoundingBoxMeshesStack.of(construct: IConstruct)
```

Looks up the first stack scope in which `construct` is defined.

Fails if there is no stack up the tree.

###### `construct`<sup>Required</sup> <a name="construct" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderBoundingBoxMeshesStack.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

The construct to start the search from.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BlenderBoundingBoxMeshesStack.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BlenderBoundingBoxMeshesStack.property.account">account</a></code> | <code>string</code> | The AWS account into which this stack will be deployed. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BlenderBoundingBoxMeshesStack.property.artifactId">artifactId</a></code> | <code>string</code> | The ID of the cloud assembly artifact for this stack. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BlenderBoundingBoxMeshesStack.property.availabilityZones">availabilityZones</a></code> | <code>string[]</code> | Returns the list of AZs that are available in the AWS environment (account/region) associated with this stack. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BlenderBoundingBoxMeshesStack.property.bundlingRequired">bundlingRequired</a></code> | <code>boolean</code> | Indicates whether the stack requires bundling or not. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BlenderBoundingBoxMeshesStack.property.dependencies">dependencies</a></code> | <code>aws-cdk-lib.Stack[]</code> | Return the stacks this stack depends on. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BlenderBoundingBoxMeshesStack.property.environment">environment</a></code> | <code>string</code> | The environment coordinates in which this stack is deployed. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BlenderBoundingBoxMeshesStack.property.nested">nested</a></code> | <code>boolean</code> | Indicates if this is a nested stack, in which case `parentStack` will include a reference to it's parent. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BlenderBoundingBoxMeshesStack.property.notificationArns">notificationArns</a></code> | <code>string[]</code> | Returns the list of notification Amazon Resource Names (ARNs) for the current stack. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BlenderBoundingBoxMeshesStack.property.partition">partition</a></code> | <code>string</code> | The partition in which this stack is defined. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BlenderBoundingBoxMeshesStack.property.region">region</a></code> | <code>string</code> | The AWS region into which this stack will be deployed (e.g. `us-west-2`). |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BlenderBoundingBoxMeshesStack.property.stackId">stackId</a></code> | <code>string</code> | The ID of the stack. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BlenderBoundingBoxMeshesStack.property.stackName">stackName</a></code> | <code>string</code> | The concrete CloudFormation physical stack name. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BlenderBoundingBoxMeshesStack.property.synthesizer">synthesizer</a></code> | <code>aws-cdk-lib.IStackSynthesizer</code> | Synthesis method for this stack. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BlenderBoundingBoxMeshesStack.property.tags">tags</a></code> | <code>aws-cdk-lib.TagManager</code> | Tags to be applied to the stack. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BlenderBoundingBoxMeshesStack.property.templateFile">templateFile</a></code> | <code>string</code> | The name of the CloudFormation template file emitted to the output directory during synthesis. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BlenderBoundingBoxMeshesStack.property.templateOptions">templateOptions</a></code> | <code>aws-cdk-lib.ITemplateOptions</code> | Options for CloudFormation template (like version, transform, description). |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BlenderBoundingBoxMeshesStack.property.urlSuffix">urlSuffix</a></code> | <code>string</code> | The Amazon domain suffix for the region in which this stack is defined. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BlenderBoundingBoxMeshesStack.property.nestedStackParent">nestedStackParent</a></code> | <code>aws-cdk-lib.Stack</code> | If this is a nested stack, returns it's parent stack. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BlenderBoundingBoxMeshesStack.property.nestedStackResource">nestedStackResource</a></code> | <code>aws-cdk-lib.CfnResource</code> | If this is a nested stack, this represents its `AWS::CloudFormation::Stack` resource. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BlenderBoundingBoxMeshesStack.property.terminationProtection">terminationProtection</a></code> | <code>boolean</code> | Whether termination protection is enabled for this stack. |

---

##### `node`<sup>Required</sup> <a name="node" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderBoundingBoxMeshesStack.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `account`<sup>Required</sup> <a name="account" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderBoundingBoxMeshesStack.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

The AWS account into which this stack will be deployed.

This value is resolved according to the following rules:

1. The value provided to `env.account` when the stack is defined. This can
   either be a concrete account (e.g. `585695031111`) or the
   `Aws.ACCOUNT_ID` token.
3. `Aws.ACCOUNT_ID`, which represents the CloudFormation intrinsic reference
   `{ "Ref": "AWS::AccountId" }` encoded as a string token.

Preferably, you should use the return value as an opaque string and not
attempt to parse it to implement your logic. If you do, you must first
check that it is a concrete value an not an unresolved token. If this
value is an unresolved token (`Token.isUnresolved(stack.account)` returns
`true`), this implies that the user wishes that this stack will synthesize
into a **account-agnostic template**. In this case, your code should either
fail (throw an error, emit a synth error using `Annotations.of(construct).addError()`) or
implement some other region-agnostic behavior.

---

##### `artifactId`<sup>Required</sup> <a name="artifactId" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderBoundingBoxMeshesStack.property.artifactId"></a>

```typescript
public readonly artifactId: string;
```

- *Type:* string

The ID of the cloud assembly artifact for this stack.

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderBoundingBoxMeshesStack.property.availabilityZones"></a>

```typescript
public readonly availabilityZones: string[];
```

- *Type:* string[]

Returns the list of AZs that are available in the AWS environment (account/region) associated with this stack.

If the stack is environment-agnostic (either account and/or region are
tokens), this property will return an array with 2 tokens that will resolve
at deploy-time to the first two availability zones returned from CloudFormation's
`Fn::GetAZs` intrinsic function.

If they are not available in the context, returns a set of dummy values and
reports them as missing, and let the CLI resolve them by calling EC2
`DescribeAvailabilityZones` on the target environment.

To specify a different strategy for selecting availability zones override this method.

---

##### `bundlingRequired`<sup>Required</sup> <a name="bundlingRequired" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderBoundingBoxMeshesStack.property.bundlingRequired"></a>

```typescript
public readonly bundlingRequired: boolean;
```

- *Type:* boolean

Indicates whether the stack requires bundling or not.

---

##### `dependencies`<sup>Required</sup> <a name="dependencies" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderBoundingBoxMeshesStack.property.dependencies"></a>

```typescript
public readonly dependencies: Stack[];
```

- *Type:* aws-cdk-lib.Stack[]

Return the stacks this stack depends on.

---

##### `environment`<sup>Required</sup> <a name="environment" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderBoundingBoxMeshesStack.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

The environment coordinates in which this stack is deployed.

In the form
`aws://account/region`. Use `stack.account` and `stack.region` to obtain
the specific values, no need to parse.

You can use this value to determine if two stacks are targeting the same
environment.

If either `stack.account` or `stack.region` are not concrete values (e.g.
`Aws.ACCOUNT_ID` or `Aws.REGION`) the special strings `unknown-account` and/or
`unknown-region` will be used respectively to indicate this stack is
region/account-agnostic.

---

##### `nested`<sup>Required</sup> <a name="nested" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderBoundingBoxMeshesStack.property.nested"></a>

```typescript
public readonly nested: boolean;
```

- *Type:* boolean

Indicates if this is a nested stack, in which case `parentStack` will include a reference to it's parent.

---

##### `notificationArns`<sup>Required</sup> <a name="notificationArns" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderBoundingBoxMeshesStack.property.notificationArns"></a>

```typescript
public readonly notificationArns: string[];
```

- *Type:* string[]

Returns the list of notification Amazon Resource Names (ARNs) for the current stack.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderBoundingBoxMeshesStack.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

The partition in which this stack is defined.

---

##### `region`<sup>Required</sup> <a name="region" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderBoundingBoxMeshesStack.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The AWS region into which this stack will be deployed (e.g. `us-west-2`).

This value is resolved according to the following rules:

1. The value provided to `env.region` when the stack is defined. This can
   either be a concrete region (e.g. `us-west-2`) or the `Aws.REGION`
   token.
3. `Aws.REGION`, which is represents the CloudFormation intrinsic reference
   `{ "Ref": "AWS::Region" }` encoded as a string token.

Preferably, you should use the return value as an opaque string and not
attempt to parse it to implement your logic. If you do, you must first
check that it is a concrete value an not an unresolved token. If this
value is an unresolved token (`Token.isUnresolved(stack.region)` returns
`true`), this implies that the user wishes that this stack will synthesize
into a **region-agnostic template**. In this case, your code should either
fail (throw an error, emit a synth error using `Annotations.of(construct).addError()`) or
implement some other region-agnostic behavior.

---

##### `stackId`<sup>Required</sup> <a name="stackId" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderBoundingBoxMeshesStack.property.stackId"></a>

```typescript
public readonly stackId: string;
```

- *Type:* string

The ID of the stack.

---

*Example*

```typescript
// After resolving, looks like
'arn:aws:cloudformation:us-west-2:123456789012:stack/teststack/51af3dc0-da77-11e4-872e-1234567db123'
```


##### `stackName`<sup>Required</sup> <a name="stackName" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderBoundingBoxMeshesStack.property.stackName"></a>

```typescript
public readonly stackName: string;
```

- *Type:* string

The concrete CloudFormation physical stack name.

This is either the name defined explicitly in the `stackName` prop or
allocated based on the stack's location in the construct tree. Stacks that
are directly defined under the app use their construct `id` as their stack
name. Stacks that are defined deeper within the tree will use a hashed naming
scheme based on the construct path to ensure uniqueness.

If you wish to obtain the deploy-time AWS::StackName intrinsic,
you can use `Aws.STACK_NAME` directly.

---

##### `synthesizer`<sup>Required</sup> <a name="synthesizer" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderBoundingBoxMeshesStack.property.synthesizer"></a>

```typescript
public readonly synthesizer: IStackSynthesizer;
```

- *Type:* aws-cdk-lib.IStackSynthesizer

Synthesis method for this stack.

---

##### `tags`<sup>Required</sup> <a name="tags" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderBoundingBoxMeshesStack.property.tags"></a>

```typescript
public readonly tags: TagManager;
```

- *Type:* aws-cdk-lib.TagManager

Tags to be applied to the stack.

---

##### `templateFile`<sup>Required</sup> <a name="templateFile" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderBoundingBoxMeshesStack.property.templateFile"></a>

```typescript
public readonly templateFile: string;
```

- *Type:* string

The name of the CloudFormation template file emitted to the output directory during synthesis.

Example value: `MyStack.template.json`

---

##### `templateOptions`<sup>Required</sup> <a name="templateOptions" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderBoundingBoxMeshesStack.property.templateOptions"></a>

```typescript
public readonly templateOptions: ITemplateOptions;
```

- *Type:* aws-cdk-lib.ITemplateOptions

Options for CloudFormation template (like version, transform, description).

---

##### `urlSuffix`<sup>Required</sup> <a name="urlSuffix" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderBoundingBoxMeshesStack.property.urlSuffix"></a>

```typescript
public readonly urlSuffix: string;
```

- *Type:* string

The Amazon domain suffix for the region in which this stack is defined.

---

##### `nestedStackParent`<sup>Optional</sup> <a name="nestedStackParent" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderBoundingBoxMeshesStack.property.nestedStackParent"></a>

```typescript
public readonly nestedStackParent: Stack;
```

- *Type:* aws-cdk-lib.Stack

If this is a nested stack, returns it's parent stack.

---

##### `nestedStackResource`<sup>Optional</sup> <a name="nestedStackResource" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderBoundingBoxMeshesStack.property.nestedStackResource"></a>

```typescript
public readonly nestedStackResource: CfnResource;
```

- *Type:* aws-cdk-lib.CfnResource

If this is a nested stack, this represents its `AWS::CloudFormation::Stack` resource.

`undefined` for top-level (non-nested) stacks.

---

##### `terminationProtection`<sup>Required</sup> <a name="terminationProtection" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderBoundingBoxMeshesStack.property.terminationProtection"></a>

```typescript
public readonly terminationProtection: boolean;
```

- *Type:* boolean

Whether termination protection is enabled for this stack.

---


### BlenderJoinMeshesStack <a name="BlenderJoinMeshesStack" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderJoinMeshesStack"></a>

#### Initializers <a name="Initializers" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderJoinMeshesStack.Initializer"></a>

```typescript
import { BlenderJoinMeshesStack } from '@awslabs/data-transformation-pipeline-cdk-constructs'

new BlenderJoinMeshesStack(scope: Construct, id: string, props?: StackProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BlenderJoinMeshesStack.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BlenderJoinMeshesStack.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BlenderJoinMeshesStack.Initializer.parameter.props">props</a></code> | <code>aws-cdk-lib.StackProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderJoinMeshesStack.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderJoinMeshesStack.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Optional</sup> <a name="props" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderJoinMeshesStack.Initializer.parameter.props"></a>

- *Type:* aws-cdk-lib.StackProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BlenderJoinMeshesStack.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BlenderJoinMeshesStack.addDependency">addDependency</a></code> | Add a dependency between this stack and another stack. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BlenderJoinMeshesStack.addMetadata">addMetadata</a></code> | Adds an arbitrary key-value pair, with information you want to record about the stack. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BlenderJoinMeshesStack.addTransform">addTransform</a></code> | Add a Transform to this stack. A Transform is a macro that AWS CloudFormation uses to process your template. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BlenderJoinMeshesStack.exportStringListValue">exportStringListValue</a></code> | Create a CloudFormation Export for a string list value. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BlenderJoinMeshesStack.exportValue">exportValue</a></code> | Create a CloudFormation Export for a string value. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BlenderJoinMeshesStack.formatArn">formatArn</a></code> | Creates an ARN from components. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BlenderJoinMeshesStack.getLogicalId">getLogicalId</a></code> | Allocates a stack-unique CloudFormation-compatible logical identity for a specific resource. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BlenderJoinMeshesStack.regionalFact">regionalFact</a></code> | Look up a fact value for the given fact for the region of this stack. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BlenderJoinMeshesStack.renameLogicalId">renameLogicalId</a></code> | Rename a generated logical identities. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BlenderJoinMeshesStack.reportMissingContextKey">reportMissingContextKey</a></code> | Indicate that a context key was expected. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BlenderJoinMeshesStack.resolve">resolve</a></code> | Resolve a tokenized value in the context of the current stack. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BlenderJoinMeshesStack.splitArn">splitArn</a></code> | Splits the provided ARN into its components. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BlenderJoinMeshesStack.toJsonString">toJsonString</a></code> | Convert an object, potentially containing tokens, to a JSON string. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BlenderJoinMeshesStack.toYamlString">toYamlString</a></code> | Convert an object, potentially containing tokens, to a YAML string. |

---

##### `toString` <a name="toString" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderJoinMeshesStack.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addDependency` <a name="addDependency" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderJoinMeshesStack.addDependency"></a>

```typescript
public addDependency(target: Stack, reason?: string): void
```

Add a dependency between this stack and another stack.

This can be used to define dependencies between any two stacks within an
app, and also supports nested stacks.

###### `target`<sup>Required</sup> <a name="target" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderJoinMeshesStack.addDependency.parameter.target"></a>

- *Type:* aws-cdk-lib.Stack

---

###### `reason`<sup>Optional</sup> <a name="reason" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderJoinMeshesStack.addDependency.parameter.reason"></a>

- *Type:* string

---

##### `addMetadata` <a name="addMetadata" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderJoinMeshesStack.addMetadata"></a>

```typescript
public addMetadata(key: string, value: any): void
```

Adds an arbitrary key-value pair, with information you want to record about the stack.

These get translated to the Metadata section of the generated template.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html)

###### `key`<sup>Required</sup> <a name="key" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderJoinMeshesStack.addMetadata.parameter.key"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderJoinMeshesStack.addMetadata.parameter.value"></a>

- *Type:* any

---

##### `addTransform` <a name="addTransform" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderJoinMeshesStack.addTransform"></a>

```typescript
public addTransform(transform: string): void
```

Add a Transform to this stack. A Transform is a macro that AWS CloudFormation uses to process your template.

Duplicate values are removed when stack is synthesized.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/transform-section-structure.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/transform-section-structure.html)

*Example*

```typescript
declare const stack: Stack;

stack.addTransform('AWS::Serverless-2016-10-31')
```


###### `transform`<sup>Required</sup> <a name="transform" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderJoinMeshesStack.addTransform.parameter.transform"></a>

- *Type:* string

The transform to add.

---

##### `exportStringListValue` <a name="exportStringListValue" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderJoinMeshesStack.exportStringListValue"></a>

```typescript
public exportStringListValue(exportedValue: any, options?: ExportValueOptions): string[]
```

Create a CloudFormation Export for a string list value.

Returns a string list representing the corresponding `Fn.importValue()`
expression for this Export. The export expression is automatically wrapped with an
`Fn::Join` and the import value with an `Fn::Split`, since CloudFormation can only
export strings. You can control the name for the export by passing the `name` option.

If you don't supply a value for `name`, the value you're exporting must be
a Resource attribute (for example: `bucket.bucketName`) and it will be
given the same name as the automatic cross-stack reference that would be created
if you used the attribute in another Stack.

One of the uses for this method is to *remove* the relationship between
two Stacks established by automatic cross-stack references. It will
temporarily ensure that the CloudFormation Export still exists while you
remove the reference from the consuming stack. After that, you can remove
the resource and the manual export.

See `exportValue` for an example of this process.

###### `exportedValue`<sup>Required</sup> <a name="exportedValue" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderJoinMeshesStack.exportStringListValue.parameter.exportedValue"></a>

- *Type:* any

---

###### `options`<sup>Optional</sup> <a name="options" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderJoinMeshesStack.exportStringListValue.parameter.options"></a>

- *Type:* aws-cdk-lib.ExportValueOptions

---

##### `exportValue` <a name="exportValue" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderJoinMeshesStack.exportValue"></a>

```typescript
public exportValue(exportedValue: any, options?: ExportValueOptions): string
```

Create a CloudFormation Export for a string value.

Returns a string representing the corresponding `Fn.importValue()`
expression for this Export. You can control the name for the export by
passing the `name` option.

If you don't supply a value for `name`, the value you're exporting must be
a Resource attribute (for example: `bucket.bucketName`) and it will be
given the same name as the automatic cross-stack reference that would be created
if you used the attribute in another Stack.

One of the uses for this method is to *remove* the relationship between
two Stacks established by automatic cross-stack references. It will
temporarily ensure that the CloudFormation Export still exists while you
remove the reference from the consuming stack. After that, you can remove
the resource and the manual export.

Here is how the process works. Let's say there are two stacks,
`producerStack` and `consumerStack`, and `producerStack` has a bucket
called `bucket`, which is referenced by `consumerStack` (perhaps because
an AWS Lambda Function writes into it, or something like that).

It is not safe to remove `producerStack.bucket` because as the bucket is being
deleted, `consumerStack` might still be using it.

Instead, the process takes two deployments:

**Deployment 1: break the relationship**:

- Make sure `consumerStack` no longer references `bucket.bucketName` (maybe the consumer
  stack now uses its own bucket, or it writes to an AWS DynamoDB table, or maybe you just
  remove the Lambda Function altogether).
- In the `ProducerStack` class, call `this.exportValue(this.bucket.bucketName)`. This
  will make sure the CloudFormation Export continues to exist while the relationship
  between the two stacks is being broken.
- Deploy (this will effectively only change the `consumerStack`, but it's safe to deploy both).

**Deployment 2: remove the bucket resource**:

- You are now free to remove the `bucket` resource from `producerStack`.
- Don't forget to remove the `exportValue()` call as well.
- Deploy again (this time only the `producerStack` will be changed -- the bucket will be deleted).

###### `exportedValue`<sup>Required</sup> <a name="exportedValue" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderJoinMeshesStack.exportValue.parameter.exportedValue"></a>

- *Type:* any

---

###### `options`<sup>Optional</sup> <a name="options" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderJoinMeshesStack.exportValue.parameter.options"></a>

- *Type:* aws-cdk-lib.ExportValueOptions

---

##### `formatArn` <a name="formatArn" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderJoinMeshesStack.formatArn"></a>

```typescript
public formatArn(components: ArnComponents): string
```

Creates an ARN from components.

If `partition`, `region` or `account` are not specified, the stack's
partition, region and account will be used.

If any component is the empty string, an empty string will be inserted
into the generated ARN at the location that component corresponds to.

The ARN will be formatted as follows:

  arn:{partition}:{service}:{region}:{account}:{resource}{sep}{resource-name}

The required ARN pieces that are omitted will be taken from the stack that
the 'scope' is attached to. If all ARN pieces are supplied, the supplied scope
can be 'undefined'.

###### `components`<sup>Required</sup> <a name="components" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderJoinMeshesStack.formatArn.parameter.components"></a>

- *Type:* aws-cdk-lib.ArnComponents

---

##### `getLogicalId` <a name="getLogicalId" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderJoinMeshesStack.getLogicalId"></a>

```typescript
public getLogicalId(element: CfnElement): string
```

Allocates a stack-unique CloudFormation-compatible logical identity for a specific resource.

This method is called when a `CfnElement` is created and used to render the
initial logical identity of resources. Logical ID renames are applied at
this stage.

This method uses the protected method `allocateLogicalId` to render the
logical ID for an element. To modify the naming scheme, extend the `Stack`
class and override this method.

###### `element`<sup>Required</sup> <a name="element" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderJoinMeshesStack.getLogicalId.parameter.element"></a>

- *Type:* aws-cdk-lib.CfnElement

The CloudFormation element for which a logical identity is needed.

---

##### `regionalFact` <a name="regionalFact" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderJoinMeshesStack.regionalFact"></a>

```typescript
public regionalFact(factName: string, defaultValue?: string): string
```

Look up a fact value for the given fact for the region of this stack.

Will return a definite value only if the region of the current stack is resolved.
If not, a lookup map will be added to the stack and the lookup will be done at
CDK deployment time.

What regions will be included in the lookup map is controlled by the
`@aws-cdk/core:target-partitions` context value: it must be set to a list
of partitions, and only regions from the given partitions will be included.
If no such context key is set, all regions will be included.

This function is intended to be used by construct library authors. Application
builders can rely on the abstractions offered by construct libraries and do
not have to worry about regional facts.

If `defaultValue` is not given, it is an error if the fact is unknown for
the given region.

###### `factName`<sup>Required</sup> <a name="factName" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderJoinMeshesStack.regionalFact.parameter.factName"></a>

- *Type:* string

---

###### `defaultValue`<sup>Optional</sup> <a name="defaultValue" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderJoinMeshesStack.regionalFact.parameter.defaultValue"></a>

- *Type:* string

---

##### `renameLogicalId` <a name="renameLogicalId" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderJoinMeshesStack.renameLogicalId"></a>

```typescript
public renameLogicalId(oldId: string, newId: string): void
```

Rename a generated logical identities.

To modify the naming scheme strategy, extend the `Stack` class and
override the `allocateLogicalId` method.

###### `oldId`<sup>Required</sup> <a name="oldId" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderJoinMeshesStack.renameLogicalId.parameter.oldId"></a>

- *Type:* string

---

###### `newId`<sup>Required</sup> <a name="newId" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderJoinMeshesStack.renameLogicalId.parameter.newId"></a>

- *Type:* string

---

##### `reportMissingContextKey` <a name="reportMissingContextKey" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderJoinMeshesStack.reportMissingContextKey"></a>

```typescript
public reportMissingContextKey(report: MissingContext): void
```

Indicate that a context key was expected.

Contains instructions which will be emitted into the cloud assembly on how
the key should be supplied.

###### `report`<sup>Required</sup> <a name="report" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderJoinMeshesStack.reportMissingContextKey.parameter.report"></a>

- *Type:* aws-cdk-lib.cloud_assembly_schema.MissingContext

The set of parameters needed to obtain the context.

---

##### `resolve` <a name="resolve" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderJoinMeshesStack.resolve"></a>

```typescript
public resolve(obj: any): any
```

Resolve a tokenized value in the context of the current stack.

###### `obj`<sup>Required</sup> <a name="obj" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderJoinMeshesStack.resolve.parameter.obj"></a>

- *Type:* any

---

##### `splitArn` <a name="splitArn" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderJoinMeshesStack.splitArn"></a>

```typescript
public splitArn(arn: string, arnFormat: ArnFormat): ArnComponents
```

Splits the provided ARN into its components.

Works both if 'arn' is a string like 'arn:aws:s3:::bucket',
and a Token representing a dynamic CloudFormation expression
(in which case the returned components will also be dynamic CloudFormation expressions,
encoded as Tokens).

###### `arn`<sup>Required</sup> <a name="arn" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderJoinMeshesStack.splitArn.parameter.arn"></a>

- *Type:* string

the ARN to split into its components.

---

###### `arnFormat`<sup>Required</sup> <a name="arnFormat" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderJoinMeshesStack.splitArn.parameter.arnFormat"></a>

- *Type:* aws-cdk-lib.ArnFormat

the expected format of 'arn' - depends on what format the service 'arn' represents uses.

---

##### `toJsonString` <a name="toJsonString" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderJoinMeshesStack.toJsonString"></a>

```typescript
public toJsonString(obj: any, space?: number): string
```

Convert an object, potentially containing tokens, to a JSON string.

###### `obj`<sup>Required</sup> <a name="obj" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderJoinMeshesStack.toJsonString.parameter.obj"></a>

- *Type:* any

---

###### `space`<sup>Optional</sup> <a name="space" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderJoinMeshesStack.toJsonString.parameter.space"></a>

- *Type:* number

---

##### `toYamlString` <a name="toYamlString" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderJoinMeshesStack.toYamlString"></a>

```typescript
public toYamlString(obj: any): string
```

Convert an object, potentially containing tokens, to a YAML string.

###### `obj`<sup>Required</sup> <a name="obj" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderJoinMeshesStack.toYamlString.parameter.obj"></a>

- *Type:* any

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BlenderJoinMeshesStack.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BlenderJoinMeshesStack.isStack">isStack</a></code> | Return whether the given object is a Stack. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BlenderJoinMeshesStack.of">of</a></code> | Looks up the first stack scope in which `construct` is defined. |

---

##### `isConstruct` <a name="isConstruct" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderJoinMeshesStack.isConstruct"></a>

```typescript
import { BlenderJoinMeshesStack } from '@awslabs/data-transformation-pipeline-cdk-constructs'

BlenderJoinMeshesStack.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderJoinMeshesStack.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isStack` <a name="isStack" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderJoinMeshesStack.isStack"></a>

```typescript
import { BlenderJoinMeshesStack } from '@awslabs/data-transformation-pipeline-cdk-constructs'

BlenderJoinMeshesStack.isStack(x: any)
```

Return whether the given object is a Stack.

We do attribute detection since we can't reliably use 'instanceof'.

###### `x`<sup>Required</sup> <a name="x" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderJoinMeshesStack.isStack.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderJoinMeshesStack.of"></a>

```typescript
import { BlenderJoinMeshesStack } from '@awslabs/data-transformation-pipeline-cdk-constructs'

BlenderJoinMeshesStack.of(construct: IConstruct)
```

Looks up the first stack scope in which `construct` is defined.

Fails if there is no stack up the tree.

###### `construct`<sup>Required</sup> <a name="construct" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderJoinMeshesStack.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

The construct to start the search from.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BlenderJoinMeshesStack.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BlenderJoinMeshesStack.property.account">account</a></code> | <code>string</code> | The AWS account into which this stack will be deployed. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BlenderJoinMeshesStack.property.artifactId">artifactId</a></code> | <code>string</code> | The ID of the cloud assembly artifact for this stack. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BlenderJoinMeshesStack.property.availabilityZones">availabilityZones</a></code> | <code>string[]</code> | Returns the list of AZs that are available in the AWS environment (account/region) associated with this stack. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BlenderJoinMeshesStack.property.bundlingRequired">bundlingRequired</a></code> | <code>boolean</code> | Indicates whether the stack requires bundling or not. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BlenderJoinMeshesStack.property.dependencies">dependencies</a></code> | <code>aws-cdk-lib.Stack[]</code> | Return the stacks this stack depends on. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BlenderJoinMeshesStack.property.environment">environment</a></code> | <code>string</code> | The environment coordinates in which this stack is deployed. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BlenderJoinMeshesStack.property.nested">nested</a></code> | <code>boolean</code> | Indicates if this is a nested stack, in which case `parentStack` will include a reference to it's parent. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BlenderJoinMeshesStack.property.notificationArns">notificationArns</a></code> | <code>string[]</code> | Returns the list of notification Amazon Resource Names (ARNs) for the current stack. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BlenderJoinMeshesStack.property.partition">partition</a></code> | <code>string</code> | The partition in which this stack is defined. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BlenderJoinMeshesStack.property.region">region</a></code> | <code>string</code> | The AWS region into which this stack will be deployed (e.g. `us-west-2`). |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BlenderJoinMeshesStack.property.stackId">stackId</a></code> | <code>string</code> | The ID of the stack. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BlenderJoinMeshesStack.property.stackName">stackName</a></code> | <code>string</code> | The concrete CloudFormation physical stack name. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BlenderJoinMeshesStack.property.synthesizer">synthesizer</a></code> | <code>aws-cdk-lib.IStackSynthesizer</code> | Synthesis method for this stack. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BlenderJoinMeshesStack.property.tags">tags</a></code> | <code>aws-cdk-lib.TagManager</code> | Tags to be applied to the stack. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BlenderJoinMeshesStack.property.templateFile">templateFile</a></code> | <code>string</code> | The name of the CloudFormation template file emitted to the output directory during synthesis. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BlenderJoinMeshesStack.property.templateOptions">templateOptions</a></code> | <code>aws-cdk-lib.ITemplateOptions</code> | Options for CloudFormation template (like version, transform, description). |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BlenderJoinMeshesStack.property.urlSuffix">urlSuffix</a></code> | <code>string</code> | The Amazon domain suffix for the region in which this stack is defined. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BlenderJoinMeshesStack.property.nestedStackParent">nestedStackParent</a></code> | <code>aws-cdk-lib.Stack</code> | If this is a nested stack, returns it's parent stack. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BlenderJoinMeshesStack.property.nestedStackResource">nestedStackResource</a></code> | <code>aws-cdk-lib.CfnResource</code> | If this is a nested stack, this represents its `AWS::CloudFormation::Stack` resource. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BlenderJoinMeshesStack.property.terminationProtection">terminationProtection</a></code> | <code>boolean</code> | Whether termination protection is enabled for this stack. |

---

##### `node`<sup>Required</sup> <a name="node" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderJoinMeshesStack.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `account`<sup>Required</sup> <a name="account" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderJoinMeshesStack.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

The AWS account into which this stack will be deployed.

This value is resolved according to the following rules:

1. The value provided to `env.account` when the stack is defined. This can
   either be a concrete account (e.g. `585695031111`) or the
   `Aws.ACCOUNT_ID` token.
3. `Aws.ACCOUNT_ID`, which represents the CloudFormation intrinsic reference
   `{ "Ref": "AWS::AccountId" }` encoded as a string token.

Preferably, you should use the return value as an opaque string and not
attempt to parse it to implement your logic. If you do, you must first
check that it is a concrete value an not an unresolved token. If this
value is an unresolved token (`Token.isUnresolved(stack.account)` returns
`true`), this implies that the user wishes that this stack will synthesize
into a **account-agnostic template**. In this case, your code should either
fail (throw an error, emit a synth error using `Annotations.of(construct).addError()`) or
implement some other region-agnostic behavior.

---

##### `artifactId`<sup>Required</sup> <a name="artifactId" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderJoinMeshesStack.property.artifactId"></a>

```typescript
public readonly artifactId: string;
```

- *Type:* string

The ID of the cloud assembly artifact for this stack.

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderJoinMeshesStack.property.availabilityZones"></a>

```typescript
public readonly availabilityZones: string[];
```

- *Type:* string[]

Returns the list of AZs that are available in the AWS environment (account/region) associated with this stack.

If the stack is environment-agnostic (either account and/or region are
tokens), this property will return an array with 2 tokens that will resolve
at deploy-time to the first two availability zones returned from CloudFormation's
`Fn::GetAZs` intrinsic function.

If they are not available in the context, returns a set of dummy values and
reports them as missing, and let the CLI resolve them by calling EC2
`DescribeAvailabilityZones` on the target environment.

To specify a different strategy for selecting availability zones override this method.

---

##### `bundlingRequired`<sup>Required</sup> <a name="bundlingRequired" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderJoinMeshesStack.property.bundlingRequired"></a>

```typescript
public readonly bundlingRequired: boolean;
```

- *Type:* boolean

Indicates whether the stack requires bundling or not.

---

##### `dependencies`<sup>Required</sup> <a name="dependencies" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderJoinMeshesStack.property.dependencies"></a>

```typescript
public readonly dependencies: Stack[];
```

- *Type:* aws-cdk-lib.Stack[]

Return the stacks this stack depends on.

---

##### `environment`<sup>Required</sup> <a name="environment" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderJoinMeshesStack.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

The environment coordinates in which this stack is deployed.

In the form
`aws://account/region`. Use `stack.account` and `stack.region` to obtain
the specific values, no need to parse.

You can use this value to determine if two stacks are targeting the same
environment.

If either `stack.account` or `stack.region` are not concrete values (e.g.
`Aws.ACCOUNT_ID` or `Aws.REGION`) the special strings `unknown-account` and/or
`unknown-region` will be used respectively to indicate this stack is
region/account-agnostic.

---

##### `nested`<sup>Required</sup> <a name="nested" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderJoinMeshesStack.property.nested"></a>

```typescript
public readonly nested: boolean;
```

- *Type:* boolean

Indicates if this is a nested stack, in which case `parentStack` will include a reference to it's parent.

---

##### `notificationArns`<sup>Required</sup> <a name="notificationArns" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderJoinMeshesStack.property.notificationArns"></a>

```typescript
public readonly notificationArns: string[];
```

- *Type:* string[]

Returns the list of notification Amazon Resource Names (ARNs) for the current stack.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderJoinMeshesStack.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

The partition in which this stack is defined.

---

##### `region`<sup>Required</sup> <a name="region" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderJoinMeshesStack.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The AWS region into which this stack will be deployed (e.g. `us-west-2`).

This value is resolved according to the following rules:

1. The value provided to `env.region` when the stack is defined. This can
   either be a concrete region (e.g. `us-west-2`) or the `Aws.REGION`
   token.
3. `Aws.REGION`, which is represents the CloudFormation intrinsic reference
   `{ "Ref": "AWS::Region" }` encoded as a string token.

Preferably, you should use the return value as an opaque string and not
attempt to parse it to implement your logic. If you do, you must first
check that it is a concrete value an not an unresolved token. If this
value is an unresolved token (`Token.isUnresolved(stack.region)` returns
`true`), this implies that the user wishes that this stack will synthesize
into a **region-agnostic template**. In this case, your code should either
fail (throw an error, emit a synth error using `Annotations.of(construct).addError()`) or
implement some other region-agnostic behavior.

---

##### `stackId`<sup>Required</sup> <a name="stackId" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderJoinMeshesStack.property.stackId"></a>

```typescript
public readonly stackId: string;
```

- *Type:* string

The ID of the stack.

---

*Example*

```typescript
// After resolving, looks like
'arn:aws:cloudformation:us-west-2:123456789012:stack/teststack/51af3dc0-da77-11e4-872e-1234567db123'
```


##### `stackName`<sup>Required</sup> <a name="stackName" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderJoinMeshesStack.property.stackName"></a>

```typescript
public readonly stackName: string;
```

- *Type:* string

The concrete CloudFormation physical stack name.

This is either the name defined explicitly in the `stackName` prop or
allocated based on the stack's location in the construct tree. Stacks that
are directly defined under the app use their construct `id` as their stack
name. Stacks that are defined deeper within the tree will use a hashed naming
scheme based on the construct path to ensure uniqueness.

If you wish to obtain the deploy-time AWS::StackName intrinsic,
you can use `Aws.STACK_NAME` directly.

---

##### `synthesizer`<sup>Required</sup> <a name="synthesizer" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderJoinMeshesStack.property.synthesizer"></a>

```typescript
public readonly synthesizer: IStackSynthesizer;
```

- *Type:* aws-cdk-lib.IStackSynthesizer

Synthesis method for this stack.

---

##### `tags`<sup>Required</sup> <a name="tags" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderJoinMeshesStack.property.tags"></a>

```typescript
public readonly tags: TagManager;
```

- *Type:* aws-cdk-lib.TagManager

Tags to be applied to the stack.

---

##### `templateFile`<sup>Required</sup> <a name="templateFile" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderJoinMeshesStack.property.templateFile"></a>

```typescript
public readonly templateFile: string;
```

- *Type:* string

The name of the CloudFormation template file emitted to the output directory during synthesis.

Example value: `MyStack.template.json`

---

##### `templateOptions`<sup>Required</sup> <a name="templateOptions" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderJoinMeshesStack.property.templateOptions"></a>

```typescript
public readonly templateOptions: ITemplateOptions;
```

- *Type:* aws-cdk-lib.ITemplateOptions

Options for CloudFormation template (like version, transform, description).

---

##### `urlSuffix`<sup>Required</sup> <a name="urlSuffix" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderJoinMeshesStack.property.urlSuffix"></a>

```typescript
public readonly urlSuffix: string;
```

- *Type:* string

The Amazon domain suffix for the region in which this stack is defined.

---

##### `nestedStackParent`<sup>Optional</sup> <a name="nestedStackParent" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderJoinMeshesStack.property.nestedStackParent"></a>

```typescript
public readonly nestedStackParent: Stack;
```

- *Type:* aws-cdk-lib.Stack

If this is a nested stack, returns it's parent stack.

---

##### `nestedStackResource`<sup>Optional</sup> <a name="nestedStackResource" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderJoinMeshesStack.property.nestedStackResource"></a>

```typescript
public readonly nestedStackResource: CfnResource;
```

- *Type:* aws-cdk-lib.CfnResource

If this is a nested stack, this represents its `AWS::CloudFormation::Stack` resource.

`undefined` for top-level (non-nested) stacks.

---

##### `terminationProtection`<sup>Required</sup> <a name="terminationProtection" id="@awslabs/data-transformation-pipeline-cdk-constructs.BlenderJoinMeshesStack.property.terminationProtection"></a>

```typescript
public readonly terminationProtection: boolean;
```

- *Type:* boolean

Whether termination protection is enabled for this stack.

---


### JobSchemasLambdaLayersConstruct <a name="JobSchemasLambdaLayersConstruct" id="@awslabs/data-transformation-pipeline-cdk-constructs.JobSchemasLambdaLayersConstruct"></a>

#### Initializers <a name="Initializers" id="@awslabs/data-transformation-pipeline-cdk-constructs.JobSchemasLambdaLayersConstruct.Initializer"></a>

```typescript
import { JobSchemasLambdaLayersConstruct } from '@awslabs/data-transformation-pipeline-cdk-constructs'

new JobSchemasLambdaLayersConstruct(parent: Construct, name: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.JobSchemasLambdaLayersConstruct.Initializer.parameter.parent">parent</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.JobSchemasLambdaLayersConstruct.Initializer.parameter.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `parent`<sup>Required</sup> <a name="parent" id="@awslabs/data-transformation-pipeline-cdk-constructs.JobSchemasLambdaLayersConstruct.Initializer.parameter.parent"></a>

- *Type:* constructs.Construct

---

##### `name`<sup>Required</sup> <a name="name" id="@awslabs/data-transformation-pipeline-cdk-constructs.JobSchemasLambdaLayersConstruct.Initializer.parameter.name"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.JobSchemasLambdaLayersConstruct.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@awslabs/data-transformation-pipeline-cdk-constructs.JobSchemasLambdaLayersConstruct.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.JobSchemasLambdaLayersConstruct.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="@awslabs/data-transformation-pipeline-cdk-constructs.JobSchemasLambdaLayersConstruct.isConstruct"></a>

```typescript
import { JobSchemasLambdaLayersConstruct } from '@awslabs/data-transformation-pipeline-cdk-constructs'

JobSchemasLambdaLayersConstruct.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@awslabs/data-transformation-pipeline-cdk-constructs.JobSchemasLambdaLayersConstruct.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.JobSchemasLambdaLayersConstruct.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.JobSchemasLambdaLayersConstruct.property.inputOutputPrefix">inputOutputPrefix</a></code> | <code>@aws-cdk/aws-lambda-python-alpha.PythonLayerVersion</code> | *No description.* |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.JobSchemasLambdaLayersConstruct.property.inputSingleFileOutputPrefix">inputSingleFileOutputPrefix</a></code> | <code>@aws-cdk/aws-lambda-python-alpha.PythonLayerVersion</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@awslabs/data-transformation-pipeline-cdk-constructs.JobSchemasLambdaLayersConstruct.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `inputOutputPrefix`<sup>Required</sup> <a name="inputOutputPrefix" id="@awslabs/data-transformation-pipeline-cdk-constructs.JobSchemasLambdaLayersConstruct.property.inputOutputPrefix"></a>

```typescript
public readonly inputOutputPrefix: PythonLayerVersion;
```

- *Type:* @aws-cdk/aws-lambda-python-alpha.PythonLayerVersion

---

##### `inputSingleFileOutputPrefix`<sup>Required</sup> <a name="inputSingleFileOutputPrefix" id="@awslabs/data-transformation-pipeline-cdk-constructs.JobSchemasLambdaLayersConstruct.property.inputSingleFileOutputPrefix"></a>

```typescript
public readonly inputSingleFileOutputPrefix: PythonLayerVersion;
```

- *Type:* @aws-cdk/aws-lambda-python-alpha.PythonLayerVersion

---


### LambdaInvokeSfnChainConstruct <a name="LambdaInvokeSfnChainConstruct" id="@awslabs/data-transformation-pipeline-cdk-constructs.LambdaInvokeSfnChainConstruct"></a>

A construct to create a Step Function Chain to invoke a Lambda function.

#### Initializers <a name="Initializers" id="@awslabs/data-transformation-pipeline-cdk-constructs.LambdaInvokeSfnChainConstruct.Initializer"></a>

```typescript
import { LambdaInvokeSfnChainConstruct } from '@awslabs/data-transformation-pipeline-cdk-constructs'

new LambdaInvokeSfnChainConstruct(parent: Construct, name: string, props: LambdaInvokeSfnChainConstructProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.LambdaInvokeSfnChainConstruct.Initializer.parameter.parent">parent</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.LambdaInvokeSfnChainConstruct.Initializer.parameter.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.LambdaInvokeSfnChainConstruct.Initializer.parameter.props">props</a></code> | <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.LambdaInvokeSfnChainConstructProps">LambdaInvokeSfnChainConstructProps</a></code> | *No description.* |

---

##### `parent`<sup>Required</sup> <a name="parent" id="@awslabs/data-transformation-pipeline-cdk-constructs.LambdaInvokeSfnChainConstruct.Initializer.parameter.parent"></a>

- *Type:* constructs.Construct

---

##### `name`<sup>Required</sup> <a name="name" id="@awslabs/data-transformation-pipeline-cdk-constructs.LambdaInvokeSfnChainConstruct.Initializer.parameter.name"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@awslabs/data-transformation-pipeline-cdk-constructs.LambdaInvokeSfnChainConstruct.Initializer.parameter.props"></a>

- *Type:* <a href="#@awslabs/data-transformation-pipeline-cdk-constructs.LambdaInvokeSfnChainConstructProps">LambdaInvokeSfnChainConstructProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.LambdaInvokeSfnChainConstruct.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@awslabs/data-transformation-pipeline-cdk-constructs.LambdaInvokeSfnChainConstruct.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.LambdaInvokeSfnChainConstruct.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="@awslabs/data-transformation-pipeline-cdk-constructs.LambdaInvokeSfnChainConstruct.isConstruct"></a>

```typescript
import { LambdaInvokeSfnChainConstruct } from '@awslabs/data-transformation-pipeline-cdk-constructs'

LambdaInvokeSfnChainConstruct.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@awslabs/data-transformation-pipeline-cdk-constructs.LambdaInvokeSfnChainConstruct.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.LambdaInvokeSfnChainConstruct.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.LambdaInvokeSfnChainConstruct.property.sfnChain">sfnChain</a></code> | <code>aws-cdk-lib.aws_stepfunctions.Chain</code> | The Step Function Chain. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.LambdaInvokeSfnChainConstruct.property.sfnDefinitionBody">sfnDefinitionBody</a></code> | <code>aws-cdk-lib.aws_stepfunctions.DefinitionBody</code> | The Step Function Definition Body. |

---

##### `node`<sup>Required</sup> <a name="node" id="@awslabs/data-transformation-pipeline-cdk-constructs.LambdaInvokeSfnChainConstruct.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `sfnChain`<sup>Required</sup> <a name="sfnChain" id="@awslabs/data-transformation-pipeline-cdk-constructs.LambdaInvokeSfnChainConstruct.property.sfnChain"></a>

```typescript
public readonly sfnChain: Chain;
```

- *Type:* aws-cdk-lib.aws_stepfunctions.Chain

The Step Function Chain.

---

##### `sfnDefinitionBody`<sup>Required</sup> <a name="sfnDefinitionBody" id="@awslabs/data-transformation-pipeline-cdk-constructs.LambdaInvokeSfnChainConstruct.property.sfnDefinitionBody"></a>

```typescript
public readonly sfnDefinitionBody: DefinitionBody;
```

- *Type:* aws-cdk-lib.aws_stepfunctions.DefinitionBody

The Step Function Definition Body.

---


### StateMachineWithLogGroupFromChainConstruct <a name="StateMachineWithLogGroupFromChainConstruct" id="@awslabs/data-transformation-pipeline-cdk-constructs.StateMachineWithLogGroupFromChainConstruct"></a>

This construct creates a state machine and a corresponding log group.

#### Initializers <a name="Initializers" id="@awslabs/data-transformation-pipeline-cdk-constructs.StateMachineWithLogGroupFromChainConstruct.Initializer"></a>

```typescript
import { StateMachineWithLogGroupFromChainConstruct } from '@awslabs/data-transformation-pipeline-cdk-constructs'

new StateMachineWithLogGroupFromChainConstruct(parent: Construct, name: string, props: StateMachineWithLogGroupFromChainConstructProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.StateMachineWithLogGroupFromChainConstruct.Initializer.parameter.parent">parent</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.StateMachineWithLogGroupFromChainConstruct.Initializer.parameter.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.StateMachineWithLogGroupFromChainConstruct.Initializer.parameter.props">props</a></code> | <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.StateMachineWithLogGroupFromChainConstructProps">StateMachineWithLogGroupFromChainConstructProps</a></code> | *No description.* |

---

##### `parent`<sup>Required</sup> <a name="parent" id="@awslabs/data-transformation-pipeline-cdk-constructs.StateMachineWithLogGroupFromChainConstruct.Initializer.parameter.parent"></a>

- *Type:* constructs.Construct

---

##### `name`<sup>Required</sup> <a name="name" id="@awslabs/data-transformation-pipeline-cdk-constructs.StateMachineWithLogGroupFromChainConstruct.Initializer.parameter.name"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@awslabs/data-transformation-pipeline-cdk-constructs.StateMachineWithLogGroupFromChainConstruct.Initializer.parameter.props"></a>

- *Type:* <a href="#@awslabs/data-transformation-pipeline-cdk-constructs.StateMachineWithLogGroupFromChainConstructProps">StateMachineWithLogGroupFromChainConstructProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.StateMachineWithLogGroupFromChainConstruct.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@awslabs/data-transformation-pipeline-cdk-constructs.StateMachineWithLogGroupFromChainConstruct.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.StateMachineWithLogGroupFromChainConstruct.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="@awslabs/data-transformation-pipeline-cdk-constructs.StateMachineWithLogGroupFromChainConstruct.isConstruct"></a>

```typescript
import { StateMachineWithLogGroupFromChainConstruct } from '@awslabs/data-transformation-pipeline-cdk-constructs'

StateMachineWithLogGroupFromChainConstruct.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@awslabs/data-transformation-pipeline-cdk-constructs.StateMachineWithLogGroupFromChainConstruct.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.StateMachineWithLogGroupFromChainConstruct.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.StateMachineWithLogGroupFromChainConstruct.property.stateMachine">stateMachine</a></code> | <code>aws-cdk-lib.aws_stepfunctions.StateMachine</code> | The State Machine. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.StateMachineWithLogGroupFromChainConstruct.property.stateMachineLogGroup">stateMachineLogGroup</a></code> | <code>aws-cdk-lib.aws_logs.LogGroup</code> | The State Machine Log Group. |

---

##### `node`<sup>Required</sup> <a name="node" id="@awslabs/data-transformation-pipeline-cdk-constructs.StateMachineWithLogGroupFromChainConstruct.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `stateMachine`<sup>Required</sup> <a name="stateMachine" id="@awslabs/data-transformation-pipeline-cdk-constructs.StateMachineWithLogGroupFromChainConstruct.property.stateMachine"></a>

```typescript
public readonly stateMachine: StateMachine;
```

- *Type:* aws-cdk-lib.aws_stepfunctions.StateMachine

The State Machine.

---

##### `stateMachineLogGroup`<sup>Required</sup> <a name="stateMachineLogGroup" id="@awslabs/data-transformation-pipeline-cdk-constructs.StateMachineWithLogGroupFromChainConstruct.property.stateMachineLogGroup"></a>

```typescript
public readonly stateMachineLogGroup: LogGroup;
```

- *Type:* aws-cdk-lib.aws_logs.LogGroup

The State Machine Log Group.

---


### VpcBatchFargateConstruct <a name="VpcBatchFargateConstruct" id="@awslabs/data-transformation-pipeline-cdk-constructs.VpcBatchFargateConstruct"></a>

This construct creates a VPC with a private subnet and a security group.

#### Initializers <a name="Initializers" id="@awslabs/data-transformation-pipeline-cdk-constructs.VpcBatchFargateConstruct.Initializer"></a>

```typescript
import { VpcBatchFargateConstruct } from '@awslabs/data-transformation-pipeline-cdk-constructs'

new VpcBatchFargateConstruct(parent: Construct, name: string, props: VpcBatchFargateConstructProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.VpcBatchFargateConstruct.Initializer.parameter.parent">parent</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.VpcBatchFargateConstruct.Initializer.parameter.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.VpcBatchFargateConstruct.Initializer.parameter.props">props</a></code> | <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.VpcBatchFargateConstructProps">VpcBatchFargateConstructProps</a></code> | *No description.* |

---

##### `parent`<sup>Required</sup> <a name="parent" id="@awslabs/data-transformation-pipeline-cdk-constructs.VpcBatchFargateConstruct.Initializer.parameter.parent"></a>

- *Type:* constructs.Construct

---

##### `name`<sup>Required</sup> <a name="name" id="@awslabs/data-transformation-pipeline-cdk-constructs.VpcBatchFargateConstruct.Initializer.parameter.name"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@awslabs/data-transformation-pipeline-cdk-constructs.VpcBatchFargateConstruct.Initializer.parameter.props"></a>

- *Type:* <a href="#@awslabs/data-transformation-pipeline-cdk-constructs.VpcBatchFargateConstructProps">VpcBatchFargateConstructProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.VpcBatchFargateConstruct.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@awslabs/data-transformation-pipeline-cdk-constructs.VpcBatchFargateConstruct.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.VpcBatchFargateConstruct.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="@awslabs/data-transformation-pipeline-cdk-constructs.VpcBatchFargateConstruct.isConstruct"></a>

```typescript
import { VpcBatchFargateConstruct } from '@awslabs/data-transformation-pipeline-cdk-constructs'

VpcBatchFargateConstruct.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@awslabs/data-transformation-pipeline-cdk-constructs.VpcBatchFargateConstruct.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.VpcBatchFargateConstruct.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.VpcBatchFargateConstruct.property.securityGroups">securityGroups</a></code> | <code>aws-cdk-lib.aws_ec2.SecurityGroup[]</code> | The VPC security groups. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.VpcBatchFargateConstruct.property.subnets">subnets</a></code> | <code>aws-cdk-lib.aws_ec2.ISubnet[]</code> | The VPC subnets. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.VpcBatchFargateConstruct.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.Vpc</code> | The VPC. |

---

##### `node`<sup>Required</sup> <a name="node" id="@awslabs/data-transformation-pipeline-cdk-constructs.VpcBatchFargateConstruct.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `securityGroups`<sup>Required</sup> <a name="securityGroups" id="@awslabs/data-transformation-pipeline-cdk-constructs.VpcBatchFargateConstruct.property.securityGroups"></a>

```typescript
public readonly securityGroups: SecurityGroup[];
```

- *Type:* aws-cdk-lib.aws_ec2.SecurityGroup[]

The VPC security groups.

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@awslabs/data-transformation-pipeline-cdk-constructs.VpcBatchFargateConstruct.property.subnets"></a>

```typescript
public readonly subnets: ISubnet[];
```

- *Type:* aws-cdk-lib.aws_ec2.ISubnet[]

The VPC subnets.

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="@awslabs/data-transformation-pipeline-cdk-constructs.VpcBatchFargateConstruct.property.vpc"></a>

```typescript
public readonly vpc: Vpc;
```

- *Type:* aws-cdk-lib.aws_ec2.Vpc

The VPC.

---


## Structs <a name="Structs" id="Structs"></a>

### BatchFargateConstructProps <a name="BatchFargateConstructProps" id="@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateConstructProps"></a>

Properties for the BatchFargateConstruct.

#### Initializer <a name="Initializer" id="@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateConstructProps.Initializer"></a>

```typescript
import { BatchFargateConstructProps } from '@awslabs/data-transformation-pipeline-cdk-constructs'

const batchFargateConstructProps: BatchFargateConstructProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateConstructProps.property.analyticsReporting">analyticsReporting</a></code> | <code>boolean</code> | Include runtime versioning information in this Stack. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateConstructProps.property.crossRegionReferences">crossRegionReferences</a></code> | <code>boolean</code> | Enable this flag to allow native cross region stack references. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateConstructProps.property.description">description</a></code> | <code>string</code> | A description of the stack. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateConstructProps.property.env">env</a></code> | <code>aws-cdk-lib.Environment</code> | The AWS environment (account/region) where this stack will be deployed. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateConstructProps.property.notificationArns">notificationArns</a></code> | <code>string[]</code> | SNS Topic ARNs that will receive stack events. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateConstructProps.property.permissionsBoundary">permissionsBoundary</a></code> | <code>aws-cdk-lib.PermissionsBoundary</code> | Options for applying a permissions boundary to all IAM Roles and Users created within this Stage. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateConstructProps.property.stackName">stackName</a></code> | <code>string</code> | Name to deploy the stack with. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateConstructProps.property.suppressTemplateIndentation">suppressTemplateIndentation</a></code> | <code>boolean</code> | Enable this flag to suppress indentation in generated CloudFormation templates. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateConstructProps.property.synthesizer">synthesizer</a></code> | <code>aws-cdk-lib.IStackSynthesizer</code> | Synthesis method to use while deploying this stack. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateConstructProps.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Stack tags that will be applied to all the taggable resources and the stack itself. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateConstructProps.property.terminationProtection">terminationProtection</a></code> | <code>boolean</code> | Whether to enable termination protection for this stack. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateConstructProps.property.securityGroups">securityGroups</a></code> | <code>aws-cdk-lib.aws_ec2.SecurityGroup[]</code> | The security groups to use. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateConstructProps.property.subnets">subnets</a></code> | <code>aws-cdk-lib.aws_ec2.ISubnet[]</code> | The subnets to use. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateConstructProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.Vpc</code> | The VPC to use. |

---

##### `analyticsReporting`<sup>Optional</sup> <a name="analyticsReporting" id="@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateConstructProps.property.analyticsReporting"></a>

```typescript
public readonly analyticsReporting: boolean;
```

- *Type:* boolean
- *Default:* `analyticsReporting` setting of containing `App`, or value of 'aws:cdk:version-reporting' context key

Include runtime versioning information in this Stack.

---

##### `crossRegionReferences`<sup>Optional</sup> <a name="crossRegionReferences" id="@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateConstructProps.property.crossRegionReferences"></a>

```typescript
public readonly crossRegionReferences: boolean;
```

- *Type:* boolean
- *Default:* false

Enable this flag to allow native cross region stack references.

Enabling this will create a CloudFormation custom resource
in both the producing stack and consuming stack in order to perform the export/import

This feature is currently experimental

---

##### `description`<sup>Optional</sup> <a name="description" id="@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateConstructProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* No description.

A description of the stack.

---

##### `env`<sup>Optional</sup> <a name="env" id="@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateConstructProps.property.env"></a>

```typescript
public readonly env: Environment;
```

- *Type:* aws-cdk-lib.Environment
- *Default:* The environment of the containing `Stage` if available, otherwise create the stack will be environment-agnostic.

The AWS environment (account/region) where this stack will be deployed.

Set the `region`/`account` fields of `env` to either a concrete value to
select the indicated environment (recommended for production stacks), or to
the values of environment variables
`CDK_DEFAULT_REGION`/`CDK_DEFAULT_ACCOUNT` to let the target environment
depend on the AWS credentials/configuration that the CDK CLI is executed
under (recommended for development stacks).

If the `Stack` is instantiated inside a `Stage`, any undefined
`region`/`account` fields from `env` will default to the same field on the
encompassing `Stage`, if configured there.

If either `region` or `account` are not set nor inherited from `Stage`, the
Stack will be considered "*environment-agnostic*"". Environment-agnostic
stacks can be deployed to any environment but may not be able to take
advantage of all features of the CDK. For example, they will not be able to
use environmental context lookups such as `ec2.Vpc.fromLookup` and will not
automatically translate Service Principals to the right format based on the
environment's AWS partition, and other such enhancements.

---

*Example*

```typescript
// Use a concrete account and region to deploy this stack to:
// `.account` and `.region` will simply return these values.
new Stack(app, 'Stack1', {
  env: {
    account: '123456789012',
    region: 'us-east-1'
  },
});

// Use the CLI's current credentials to determine the target environment:
// `.account` and `.region` will reflect the account+region the CLI
// is configured to use (based on the user CLI credentials)
new Stack(app, 'Stack2', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION
  },
});

// Define multiple stacks stage associated with an environment
const myStage = new Stage(app, 'MyStage', {
  env: {
    account: '123456789012',
    region: 'us-east-1'
  }
});

// both of these stacks will use the stage's account/region:
// `.account` and `.region` will resolve to the concrete values as above
new MyStack(myStage, 'Stack1');
new YourStack(myStage, 'Stack2');

// Define an environment-agnostic stack:
// `.account` and `.region` will resolve to `{ "Ref": "AWS::AccountId" }` and `{ "Ref": "AWS::Region" }` respectively.
// which will only resolve to actual values by CloudFormation during deployment.
new MyStack(app, 'Stack1');
```


##### `notificationArns`<sup>Optional</sup> <a name="notificationArns" id="@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateConstructProps.property.notificationArns"></a>

```typescript
public readonly notificationArns: string[];
```

- *Type:* string[]
- *Default:* no notfication arns.

SNS Topic ARNs that will receive stack events.

---

##### `permissionsBoundary`<sup>Optional</sup> <a name="permissionsBoundary" id="@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateConstructProps.property.permissionsBoundary"></a>

```typescript
public readonly permissionsBoundary: PermissionsBoundary;
```

- *Type:* aws-cdk-lib.PermissionsBoundary
- *Default:* no permissions boundary is applied

Options for applying a permissions boundary to all IAM Roles and Users created within this Stage.

---

##### `stackName`<sup>Optional</sup> <a name="stackName" id="@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateConstructProps.property.stackName"></a>

```typescript
public readonly stackName: string;
```

- *Type:* string
- *Default:* Derived from construct path.

Name to deploy the stack with.

---

##### `suppressTemplateIndentation`<sup>Optional</sup> <a name="suppressTemplateIndentation" id="@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateConstructProps.property.suppressTemplateIndentation"></a>

```typescript
public readonly suppressTemplateIndentation: boolean;
```

- *Type:* boolean
- *Default:* the value of `@aws-cdk/core:suppressTemplateIndentation`, or `false` if that is not set.

Enable this flag to suppress indentation in generated CloudFormation templates.

If not specified, the value of the `@aws-cdk/core:suppressTemplateIndentation`
context key will be used. If that is not specified, then the
default value `false` will be used.

---

##### `synthesizer`<sup>Optional</sup> <a name="synthesizer" id="@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateConstructProps.property.synthesizer"></a>

```typescript
public readonly synthesizer: IStackSynthesizer;
```

- *Type:* aws-cdk-lib.IStackSynthesizer
- *Default:* The synthesizer specified on `App`, or `DefaultStackSynthesizer` otherwise.

Synthesis method to use while deploying this stack.

The Stack Synthesizer controls aspects of synthesis and deployment,
like how assets are referenced and what IAM roles to use. For more
information, see the README of the main CDK package.

If not specified, the `defaultStackSynthesizer` from `App` will be used.
If that is not specified, `DefaultStackSynthesizer` is used if
`@aws-cdk/core:newStyleStackSynthesis` is set to `true` or the CDK major
version is v2. In CDK v1 `LegacyStackSynthesizer` is the default if no
other synthesizer is specified.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateConstructProps.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* {}

Stack tags that will be applied to all the taggable resources and the stack itself.

---

##### `terminationProtection`<sup>Optional</sup> <a name="terminationProtection" id="@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateConstructProps.property.terminationProtection"></a>

```typescript
public readonly terminationProtection: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to enable termination protection for this stack.

---

##### `securityGroups`<sup>Required</sup> <a name="securityGroups" id="@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateConstructProps.property.securityGroups"></a>

```typescript
public readonly securityGroups: SecurityGroup[];
```

- *Type:* aws-cdk-lib.aws_ec2.SecurityGroup[]

The security groups to use.

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateConstructProps.property.subnets"></a>

```typescript
public readonly subnets: ISubnet[];
```

- *Type:* aws-cdk-lib.aws_ec2.ISubnet[]

The subnets to use.

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateConstructProps.property.vpc"></a>

```typescript
public readonly vpc: Vpc;
```

- *Type:* aws-cdk-lib.aws_ec2.Vpc

The VPC to use.

---

### BatchFargateParallelPipelineConstructProps <a name="BatchFargateParallelPipelineConstructProps" id="@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateParallelPipelineConstructProps"></a>

Properties for the BatchFargateParallelPipelineConstruct.

#### Initializer <a name="Initializer" id="@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateParallelPipelineConstructProps.Initializer"></a>

```typescript
import { BatchFargateParallelPipelineConstructProps } from '@awslabs/data-transformation-pipeline-cdk-constructs'

const batchFargateParallelPipelineConstructProps: BatchFargateParallelPipelineConstructProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateParallelPipelineConstructProps.property.analyticsReporting">analyticsReporting</a></code> | <code>boolean</code> | Include runtime versioning information in this Stack. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateParallelPipelineConstructProps.property.crossRegionReferences">crossRegionReferences</a></code> | <code>boolean</code> | Enable this flag to allow native cross region stack references. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateParallelPipelineConstructProps.property.description">description</a></code> | <code>string</code> | A description of the stack. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateParallelPipelineConstructProps.property.env">env</a></code> | <code>aws-cdk-lib.Environment</code> | The AWS environment (account/region) where this stack will be deployed. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateParallelPipelineConstructProps.property.notificationArns">notificationArns</a></code> | <code>string[]</code> | SNS Topic ARNs that will receive stack events. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateParallelPipelineConstructProps.property.permissionsBoundary">permissionsBoundary</a></code> | <code>aws-cdk-lib.PermissionsBoundary</code> | Options for applying a permissions boundary to all IAM Roles and Users created within this Stage. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateParallelPipelineConstructProps.property.stackName">stackName</a></code> | <code>string</code> | Name to deploy the stack with. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateParallelPipelineConstructProps.property.suppressTemplateIndentation">suppressTemplateIndentation</a></code> | <code>boolean</code> | Enable this flag to suppress indentation in generated CloudFormation templates. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateParallelPipelineConstructProps.property.synthesizer">synthesizer</a></code> | <code>aws-cdk-lib.IStackSynthesizer</code> | Synthesis method to use while deploying this stack. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateParallelPipelineConstructProps.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Stack tags that will be applied to all the taggable resources and the stack itself. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateParallelPipelineConstructProps.property.terminationProtection">terminationProtection</a></code> | <code>boolean</code> | Whether to enable termination protection for this stack. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateParallelPipelineConstructProps.property.batchFargateSubmitJobSfnChainConstructProps">batchFargateSubmitJobSfnChainConstructProps</a></code> | <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateSubmitJobSfnChainConstructProps">BatchFargateSubmitJobSfnChainConstructProps</a></code> | The BatchFargateSubmitJobSfnChainConstructProps for the pipeline step. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateParallelPipelineConstructProps.property.createStateMachine">createStateMachine</a></code> | <code>boolean</code> | Should the construct create a Step Function State Machine or just the Step Function Chain. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateParallelPipelineConstructProps.property.pipelineName">pipelineName</a></code> | <code>string</code> | The name of the pipeline. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateParallelPipelineConstructProps.property.stateMachineTimeout">stateMachineTimeout</a></code> | <code>aws-cdk-lib.Duration</code> | The timeout for the state machine (if created). |

---

##### `analyticsReporting`<sup>Optional</sup> <a name="analyticsReporting" id="@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateParallelPipelineConstructProps.property.analyticsReporting"></a>

```typescript
public readonly analyticsReporting: boolean;
```

- *Type:* boolean
- *Default:* `analyticsReporting` setting of containing `App`, or value of 'aws:cdk:version-reporting' context key

Include runtime versioning information in this Stack.

---

##### `crossRegionReferences`<sup>Optional</sup> <a name="crossRegionReferences" id="@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateParallelPipelineConstructProps.property.crossRegionReferences"></a>

```typescript
public readonly crossRegionReferences: boolean;
```

- *Type:* boolean
- *Default:* false

Enable this flag to allow native cross region stack references.

Enabling this will create a CloudFormation custom resource
in both the producing stack and consuming stack in order to perform the export/import

This feature is currently experimental

---

##### `description`<sup>Optional</sup> <a name="description" id="@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateParallelPipelineConstructProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* No description.

A description of the stack.

---

##### `env`<sup>Optional</sup> <a name="env" id="@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateParallelPipelineConstructProps.property.env"></a>

```typescript
public readonly env: Environment;
```

- *Type:* aws-cdk-lib.Environment
- *Default:* The environment of the containing `Stage` if available, otherwise create the stack will be environment-agnostic.

The AWS environment (account/region) where this stack will be deployed.

Set the `region`/`account` fields of `env` to either a concrete value to
select the indicated environment (recommended for production stacks), or to
the values of environment variables
`CDK_DEFAULT_REGION`/`CDK_DEFAULT_ACCOUNT` to let the target environment
depend on the AWS credentials/configuration that the CDK CLI is executed
under (recommended for development stacks).

If the `Stack` is instantiated inside a `Stage`, any undefined
`region`/`account` fields from `env` will default to the same field on the
encompassing `Stage`, if configured there.

If either `region` or `account` are not set nor inherited from `Stage`, the
Stack will be considered "*environment-agnostic*"". Environment-agnostic
stacks can be deployed to any environment but may not be able to take
advantage of all features of the CDK. For example, they will not be able to
use environmental context lookups such as `ec2.Vpc.fromLookup` and will not
automatically translate Service Principals to the right format based on the
environment's AWS partition, and other such enhancements.

---

*Example*

```typescript
// Use a concrete account and region to deploy this stack to:
// `.account` and `.region` will simply return these values.
new Stack(app, 'Stack1', {
  env: {
    account: '123456789012',
    region: 'us-east-1'
  },
});

// Use the CLI's current credentials to determine the target environment:
// `.account` and `.region` will reflect the account+region the CLI
// is configured to use (based on the user CLI credentials)
new Stack(app, 'Stack2', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION
  },
});

// Define multiple stacks stage associated with an environment
const myStage = new Stage(app, 'MyStage', {
  env: {
    account: '123456789012',
    region: 'us-east-1'
  }
});

// both of these stacks will use the stage's account/region:
// `.account` and `.region` will resolve to the concrete values as above
new MyStack(myStage, 'Stack1');
new YourStack(myStage, 'Stack2');

// Define an environment-agnostic stack:
// `.account` and `.region` will resolve to `{ "Ref": "AWS::AccountId" }` and `{ "Ref": "AWS::Region" }` respectively.
// which will only resolve to actual values by CloudFormation during deployment.
new MyStack(app, 'Stack1');
```


##### `notificationArns`<sup>Optional</sup> <a name="notificationArns" id="@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateParallelPipelineConstructProps.property.notificationArns"></a>

```typescript
public readonly notificationArns: string[];
```

- *Type:* string[]
- *Default:* no notfication arns.

SNS Topic ARNs that will receive stack events.

---

##### `permissionsBoundary`<sup>Optional</sup> <a name="permissionsBoundary" id="@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateParallelPipelineConstructProps.property.permissionsBoundary"></a>

```typescript
public readonly permissionsBoundary: PermissionsBoundary;
```

- *Type:* aws-cdk-lib.PermissionsBoundary
- *Default:* no permissions boundary is applied

Options for applying a permissions boundary to all IAM Roles and Users created within this Stage.

---

##### `stackName`<sup>Optional</sup> <a name="stackName" id="@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateParallelPipelineConstructProps.property.stackName"></a>

```typescript
public readonly stackName: string;
```

- *Type:* string
- *Default:* Derived from construct path.

Name to deploy the stack with.

---

##### `suppressTemplateIndentation`<sup>Optional</sup> <a name="suppressTemplateIndentation" id="@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateParallelPipelineConstructProps.property.suppressTemplateIndentation"></a>

```typescript
public readonly suppressTemplateIndentation: boolean;
```

- *Type:* boolean
- *Default:* the value of `@aws-cdk/core:suppressTemplateIndentation`, or `false` if that is not set.

Enable this flag to suppress indentation in generated CloudFormation templates.

If not specified, the value of the `@aws-cdk/core:suppressTemplateIndentation`
context key will be used. If that is not specified, then the
default value `false` will be used.

---

##### `synthesizer`<sup>Optional</sup> <a name="synthesizer" id="@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateParallelPipelineConstructProps.property.synthesizer"></a>

```typescript
public readonly synthesizer: IStackSynthesizer;
```

- *Type:* aws-cdk-lib.IStackSynthesizer
- *Default:* The synthesizer specified on `App`, or `DefaultStackSynthesizer` otherwise.

Synthesis method to use while deploying this stack.

The Stack Synthesizer controls aspects of synthesis and deployment,
like how assets are referenced and what IAM roles to use. For more
information, see the README of the main CDK package.

If not specified, the `defaultStackSynthesizer` from `App` will be used.
If that is not specified, `DefaultStackSynthesizer` is used if
`@aws-cdk/core:newStyleStackSynthesis` is set to `true` or the CDK major
version is v2. In CDK v1 `LegacyStackSynthesizer` is the default if no
other synthesizer is specified.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateParallelPipelineConstructProps.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* {}

Stack tags that will be applied to all the taggable resources and the stack itself.

---

##### `terminationProtection`<sup>Optional</sup> <a name="terminationProtection" id="@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateParallelPipelineConstructProps.property.terminationProtection"></a>

```typescript
public readonly terminationProtection: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to enable termination protection for this stack.

---

##### `batchFargateSubmitJobSfnChainConstructProps`<sup>Required</sup> <a name="batchFargateSubmitJobSfnChainConstructProps" id="@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateParallelPipelineConstructProps.property.batchFargateSubmitJobSfnChainConstructProps"></a>

```typescript
public readonly batchFargateSubmitJobSfnChainConstructProps: BatchFargateSubmitJobSfnChainConstructProps;
```

- *Type:* <a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateSubmitJobSfnChainConstructProps">BatchFargateSubmitJobSfnChainConstructProps</a>

The BatchFargateSubmitJobSfnChainConstructProps for the pipeline step.

---

##### `createStateMachine`<sup>Required</sup> <a name="createStateMachine" id="@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateParallelPipelineConstructProps.property.createStateMachine"></a>

```typescript
public readonly createStateMachine: boolean;
```

- *Type:* boolean

Should the construct create a Step Function State Machine or just the Step Function Chain.

---

##### `pipelineName`<sup>Required</sup> <a name="pipelineName" id="@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateParallelPipelineConstructProps.property.pipelineName"></a>

```typescript
public readonly pipelineName: string;
```

- *Type:* string

The name of the pipeline.

---

##### `stateMachineTimeout`<sup>Optional</sup> <a name="stateMachineTimeout" id="@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateParallelPipelineConstructProps.property.stateMachineTimeout"></a>

```typescript
public readonly stateMachineTimeout: Duration;
```

- *Type:* aws-cdk-lib.Duration
- *Default:* 6 hours (Duration.hours(6))

The timeout for the state machine (if created).

---

### BatchFargateSeriesPipelineConstructProps <a name="BatchFargateSeriesPipelineConstructProps" id="@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateSeriesPipelineConstructProps"></a>

Properties for the BatchFargateSeriesPipelineConstruct.

#### Initializer <a name="Initializer" id="@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateSeriesPipelineConstructProps.Initializer"></a>

```typescript
import { BatchFargateSeriesPipelineConstructProps } from '@awslabs/data-transformation-pipeline-cdk-constructs'

const batchFargateSeriesPipelineConstructProps: BatchFargateSeriesPipelineConstructProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateSeriesPipelineConstructProps.property.analyticsReporting">analyticsReporting</a></code> | <code>boolean</code> | Include runtime versioning information in this Stack. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateSeriesPipelineConstructProps.property.crossRegionReferences">crossRegionReferences</a></code> | <code>boolean</code> | Enable this flag to allow native cross region stack references. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateSeriesPipelineConstructProps.property.description">description</a></code> | <code>string</code> | A description of the stack. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateSeriesPipelineConstructProps.property.env">env</a></code> | <code>aws-cdk-lib.Environment</code> | The AWS environment (account/region) where this stack will be deployed. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateSeriesPipelineConstructProps.property.notificationArns">notificationArns</a></code> | <code>string[]</code> | SNS Topic ARNs that will receive stack events. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateSeriesPipelineConstructProps.property.permissionsBoundary">permissionsBoundary</a></code> | <code>aws-cdk-lib.PermissionsBoundary</code> | Options for applying a permissions boundary to all IAM Roles and Users created within this Stage. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateSeriesPipelineConstructProps.property.stackName">stackName</a></code> | <code>string</code> | Name to deploy the stack with. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateSeriesPipelineConstructProps.property.suppressTemplateIndentation">suppressTemplateIndentation</a></code> | <code>boolean</code> | Enable this flag to suppress indentation in generated CloudFormation templates. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateSeriesPipelineConstructProps.property.synthesizer">synthesizer</a></code> | <code>aws-cdk-lib.IStackSynthesizer</code> | Synthesis method to use while deploying this stack. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateSeriesPipelineConstructProps.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Stack tags that will be applied to all the taggable resources and the stack itself. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateSeriesPipelineConstructProps.property.terminationProtection">terminationProtection</a></code> | <code>boolean</code> | Whether to enable termination protection for this stack. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateSeriesPipelineConstructProps.property.createStateMachine">createStateMachine</a></code> | <code>boolean</code> | Should the construct create a Step Function State Machine or just the Step Function Chain. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateSeriesPipelineConstructProps.property.pipelineName">pipelineName</a></code> | <code>string</code> | The name of the pipeline. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateSeriesPipelineConstructProps.property.steps">steps</a></code> | <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateSubmitJobSfnChainConstructProps">BatchFargateSubmitJobSfnChainConstructProps</a>[]</code> | The steps for the pipeline in the form of BatchFargateSubmitJobSfnChainConstructProps. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateSeriesPipelineConstructProps.property.stateMachineTimeout">stateMachineTimeout</a></code> | <code>aws-cdk-lib.Duration</code> | The timeout for the state machine (if created). |

---

##### `analyticsReporting`<sup>Optional</sup> <a name="analyticsReporting" id="@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateSeriesPipelineConstructProps.property.analyticsReporting"></a>

```typescript
public readonly analyticsReporting: boolean;
```

- *Type:* boolean
- *Default:* `analyticsReporting` setting of containing `App`, or value of 'aws:cdk:version-reporting' context key

Include runtime versioning information in this Stack.

---

##### `crossRegionReferences`<sup>Optional</sup> <a name="crossRegionReferences" id="@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateSeriesPipelineConstructProps.property.crossRegionReferences"></a>

```typescript
public readonly crossRegionReferences: boolean;
```

- *Type:* boolean
- *Default:* false

Enable this flag to allow native cross region stack references.

Enabling this will create a CloudFormation custom resource
in both the producing stack and consuming stack in order to perform the export/import

This feature is currently experimental

---

##### `description`<sup>Optional</sup> <a name="description" id="@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateSeriesPipelineConstructProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* No description.

A description of the stack.

---

##### `env`<sup>Optional</sup> <a name="env" id="@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateSeriesPipelineConstructProps.property.env"></a>

```typescript
public readonly env: Environment;
```

- *Type:* aws-cdk-lib.Environment
- *Default:* The environment of the containing `Stage` if available, otherwise create the stack will be environment-agnostic.

The AWS environment (account/region) where this stack will be deployed.

Set the `region`/`account` fields of `env` to either a concrete value to
select the indicated environment (recommended for production stacks), or to
the values of environment variables
`CDK_DEFAULT_REGION`/`CDK_DEFAULT_ACCOUNT` to let the target environment
depend on the AWS credentials/configuration that the CDK CLI is executed
under (recommended for development stacks).

If the `Stack` is instantiated inside a `Stage`, any undefined
`region`/`account` fields from `env` will default to the same field on the
encompassing `Stage`, if configured there.

If either `region` or `account` are not set nor inherited from `Stage`, the
Stack will be considered "*environment-agnostic*"". Environment-agnostic
stacks can be deployed to any environment but may not be able to take
advantage of all features of the CDK. For example, they will not be able to
use environmental context lookups such as `ec2.Vpc.fromLookup` and will not
automatically translate Service Principals to the right format based on the
environment's AWS partition, and other such enhancements.

---

*Example*

```typescript
// Use a concrete account and region to deploy this stack to:
// `.account` and `.region` will simply return these values.
new Stack(app, 'Stack1', {
  env: {
    account: '123456789012',
    region: 'us-east-1'
  },
});

// Use the CLI's current credentials to determine the target environment:
// `.account` and `.region` will reflect the account+region the CLI
// is configured to use (based on the user CLI credentials)
new Stack(app, 'Stack2', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION
  },
});

// Define multiple stacks stage associated with an environment
const myStage = new Stage(app, 'MyStage', {
  env: {
    account: '123456789012',
    region: 'us-east-1'
  }
});

// both of these stacks will use the stage's account/region:
// `.account` and `.region` will resolve to the concrete values as above
new MyStack(myStage, 'Stack1');
new YourStack(myStage, 'Stack2');

// Define an environment-agnostic stack:
// `.account` and `.region` will resolve to `{ "Ref": "AWS::AccountId" }` and `{ "Ref": "AWS::Region" }` respectively.
// which will only resolve to actual values by CloudFormation during deployment.
new MyStack(app, 'Stack1');
```


##### `notificationArns`<sup>Optional</sup> <a name="notificationArns" id="@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateSeriesPipelineConstructProps.property.notificationArns"></a>

```typescript
public readonly notificationArns: string[];
```

- *Type:* string[]
- *Default:* no notfication arns.

SNS Topic ARNs that will receive stack events.

---

##### `permissionsBoundary`<sup>Optional</sup> <a name="permissionsBoundary" id="@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateSeriesPipelineConstructProps.property.permissionsBoundary"></a>

```typescript
public readonly permissionsBoundary: PermissionsBoundary;
```

- *Type:* aws-cdk-lib.PermissionsBoundary
- *Default:* no permissions boundary is applied

Options for applying a permissions boundary to all IAM Roles and Users created within this Stage.

---

##### `stackName`<sup>Optional</sup> <a name="stackName" id="@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateSeriesPipelineConstructProps.property.stackName"></a>

```typescript
public readonly stackName: string;
```

- *Type:* string
- *Default:* Derived from construct path.

Name to deploy the stack with.

---

##### `suppressTemplateIndentation`<sup>Optional</sup> <a name="suppressTemplateIndentation" id="@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateSeriesPipelineConstructProps.property.suppressTemplateIndentation"></a>

```typescript
public readonly suppressTemplateIndentation: boolean;
```

- *Type:* boolean
- *Default:* the value of `@aws-cdk/core:suppressTemplateIndentation`, or `false` if that is not set.

Enable this flag to suppress indentation in generated CloudFormation templates.

If not specified, the value of the `@aws-cdk/core:suppressTemplateIndentation`
context key will be used. If that is not specified, then the
default value `false` will be used.

---

##### `synthesizer`<sup>Optional</sup> <a name="synthesizer" id="@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateSeriesPipelineConstructProps.property.synthesizer"></a>

```typescript
public readonly synthesizer: IStackSynthesizer;
```

- *Type:* aws-cdk-lib.IStackSynthesizer
- *Default:* The synthesizer specified on `App`, or `DefaultStackSynthesizer` otherwise.

Synthesis method to use while deploying this stack.

The Stack Synthesizer controls aspects of synthesis and deployment,
like how assets are referenced and what IAM roles to use. For more
information, see the README of the main CDK package.

If not specified, the `defaultStackSynthesizer` from `App` will be used.
If that is not specified, `DefaultStackSynthesizer` is used if
`@aws-cdk/core:newStyleStackSynthesis` is set to `true` or the CDK major
version is v2. In CDK v1 `LegacyStackSynthesizer` is the default if no
other synthesizer is specified.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateSeriesPipelineConstructProps.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* {}

Stack tags that will be applied to all the taggable resources and the stack itself.

---

##### `terminationProtection`<sup>Optional</sup> <a name="terminationProtection" id="@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateSeriesPipelineConstructProps.property.terminationProtection"></a>

```typescript
public readonly terminationProtection: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to enable termination protection for this stack.

---

##### `createStateMachine`<sup>Required</sup> <a name="createStateMachine" id="@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateSeriesPipelineConstructProps.property.createStateMachine"></a>

```typescript
public readonly createStateMachine: boolean;
```

- *Type:* boolean

Should the construct create a Step Function State Machine or just the Step Function Chain.

---

##### `pipelineName`<sup>Required</sup> <a name="pipelineName" id="@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateSeriesPipelineConstructProps.property.pipelineName"></a>

```typescript
public readonly pipelineName: string;
```

- *Type:* string

The name of the pipeline.

---

##### `steps`<sup>Required</sup> <a name="steps" id="@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateSeriesPipelineConstructProps.property.steps"></a>

```typescript
public readonly steps: BatchFargateSubmitJobSfnChainConstructProps[];
```

- *Type:* <a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateSubmitJobSfnChainConstructProps">BatchFargateSubmitJobSfnChainConstructProps</a>[]

The steps for the pipeline in the form of BatchFargateSubmitJobSfnChainConstructProps.

---

##### `stateMachineTimeout`<sup>Optional</sup> <a name="stateMachineTimeout" id="@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateSeriesPipelineConstructProps.property.stateMachineTimeout"></a>

```typescript
public readonly stateMachineTimeout: Duration;
```

- *Type:* aws-cdk-lib.Duration

The timeout for the state machine (if created).

---

### BatchFargateSubmitJobSfnChainConstructProps <a name="BatchFargateSubmitJobSfnChainConstructProps" id="@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateSubmitJobSfnChainConstructProps"></a>

Properties for the BatchFargateSubmitJobSfnChainConstruct.

#### Initializer <a name="Initializer" id="@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateSubmitJobSfnChainConstructProps.Initializer"></a>

```typescript
import { BatchFargateSubmitJobSfnChainConstructProps } from '@awslabs/data-transformation-pipeline-cdk-constructs'

const batchFargateSubmitJobSfnChainConstructProps: BatchFargateSubmitJobSfnChainConstructProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateSubmitJobSfnChainConstructProps.property.analyticsReporting">analyticsReporting</a></code> | <code>boolean</code> | Include runtime versioning information in this Stack. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateSubmitJobSfnChainConstructProps.property.crossRegionReferences">crossRegionReferences</a></code> | <code>boolean</code> | Enable this flag to allow native cross region stack references. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateSubmitJobSfnChainConstructProps.property.description">description</a></code> | <code>string</code> | A description of the stack. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateSubmitJobSfnChainConstructProps.property.env">env</a></code> | <code>aws-cdk-lib.Environment</code> | The AWS environment (account/region) where this stack will be deployed. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateSubmitJobSfnChainConstructProps.property.notificationArns">notificationArns</a></code> | <code>string[]</code> | SNS Topic ARNs that will receive stack events. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateSubmitJobSfnChainConstructProps.property.permissionsBoundary">permissionsBoundary</a></code> | <code>aws-cdk-lib.PermissionsBoundary</code> | Options for applying a permissions boundary to all IAM Roles and Users created within this Stage. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateSubmitJobSfnChainConstructProps.property.stackName">stackName</a></code> | <code>string</code> | Name to deploy the stack with. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateSubmitJobSfnChainConstructProps.property.suppressTemplateIndentation">suppressTemplateIndentation</a></code> | <code>boolean</code> | Enable this flag to suppress indentation in generated CloudFormation templates. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateSubmitJobSfnChainConstructProps.property.synthesizer">synthesizer</a></code> | <code>aws-cdk-lib.IStackSynthesizer</code> | Synthesis method to use while deploying this stack. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateSubmitJobSfnChainConstructProps.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Stack tags that will be applied to all the taggable resources and the stack itself. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateSubmitJobSfnChainConstructProps.property.terminationProtection">terminationProtection</a></code> | <code>boolean</code> | Whether to enable termination protection for this stack. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateSubmitJobSfnChainConstructProps.property.batchEcsJobDefinition">batchEcsJobDefinition</a></code> | <code>aws-cdk-lib.aws_batch.EcsJobDefinition</code> | The BatchEcsJobDefinition to use. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateSubmitJobSfnChainConstructProps.property.batchFargateConstruct">batchFargateConstruct</a></code> | <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateConstruct">BatchFargateConstruct</a></code> | The BatchFargateConstruct to use. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateSubmitJobSfnChainConstructProps.property.constructJobDefinitionFunction">constructJobDefinitionFunction</a></code> | <code>aws-cdk-lib.aws_lambda.Function</code> | The Lambda function to use for constructing the job definition. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateSubmitJobSfnChainConstructProps.property.stepConfig">stepConfig</a></code> | <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.StepConfig">StepConfig</a></code> | The StepConfig to use for the Step Function Chain step. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateSubmitJobSfnChainConstructProps.property.bucket">bucket</a></code> | <code>aws-cdk-lib.aws_s3.Bucket</code> | The S3 bucket to use for source files. |

---

##### `analyticsReporting`<sup>Optional</sup> <a name="analyticsReporting" id="@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateSubmitJobSfnChainConstructProps.property.analyticsReporting"></a>

```typescript
public readonly analyticsReporting: boolean;
```

- *Type:* boolean
- *Default:* `analyticsReporting` setting of containing `App`, or value of 'aws:cdk:version-reporting' context key

Include runtime versioning information in this Stack.

---

##### `crossRegionReferences`<sup>Optional</sup> <a name="crossRegionReferences" id="@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateSubmitJobSfnChainConstructProps.property.crossRegionReferences"></a>

```typescript
public readonly crossRegionReferences: boolean;
```

- *Type:* boolean
- *Default:* false

Enable this flag to allow native cross region stack references.

Enabling this will create a CloudFormation custom resource
in both the producing stack and consuming stack in order to perform the export/import

This feature is currently experimental

---

##### `description`<sup>Optional</sup> <a name="description" id="@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateSubmitJobSfnChainConstructProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* No description.

A description of the stack.

---

##### `env`<sup>Optional</sup> <a name="env" id="@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateSubmitJobSfnChainConstructProps.property.env"></a>

```typescript
public readonly env: Environment;
```

- *Type:* aws-cdk-lib.Environment
- *Default:* The environment of the containing `Stage` if available, otherwise create the stack will be environment-agnostic.

The AWS environment (account/region) where this stack will be deployed.

Set the `region`/`account` fields of `env` to either a concrete value to
select the indicated environment (recommended for production stacks), or to
the values of environment variables
`CDK_DEFAULT_REGION`/`CDK_DEFAULT_ACCOUNT` to let the target environment
depend on the AWS credentials/configuration that the CDK CLI is executed
under (recommended for development stacks).

If the `Stack` is instantiated inside a `Stage`, any undefined
`region`/`account` fields from `env` will default to the same field on the
encompassing `Stage`, if configured there.

If either `region` or `account` are not set nor inherited from `Stage`, the
Stack will be considered "*environment-agnostic*"". Environment-agnostic
stacks can be deployed to any environment but may not be able to take
advantage of all features of the CDK. For example, they will not be able to
use environmental context lookups such as `ec2.Vpc.fromLookup` and will not
automatically translate Service Principals to the right format based on the
environment's AWS partition, and other such enhancements.

---

*Example*

```typescript
// Use a concrete account and region to deploy this stack to:
// `.account` and `.region` will simply return these values.
new Stack(app, 'Stack1', {
  env: {
    account: '123456789012',
    region: 'us-east-1'
  },
});

// Use the CLI's current credentials to determine the target environment:
// `.account` and `.region` will reflect the account+region the CLI
// is configured to use (based on the user CLI credentials)
new Stack(app, 'Stack2', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION
  },
});

// Define multiple stacks stage associated with an environment
const myStage = new Stage(app, 'MyStage', {
  env: {
    account: '123456789012',
    region: 'us-east-1'
  }
});

// both of these stacks will use the stage's account/region:
// `.account` and `.region` will resolve to the concrete values as above
new MyStack(myStage, 'Stack1');
new YourStack(myStage, 'Stack2');

// Define an environment-agnostic stack:
// `.account` and `.region` will resolve to `{ "Ref": "AWS::AccountId" }` and `{ "Ref": "AWS::Region" }` respectively.
// which will only resolve to actual values by CloudFormation during deployment.
new MyStack(app, 'Stack1');
```


##### `notificationArns`<sup>Optional</sup> <a name="notificationArns" id="@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateSubmitJobSfnChainConstructProps.property.notificationArns"></a>

```typescript
public readonly notificationArns: string[];
```

- *Type:* string[]
- *Default:* no notfication arns.

SNS Topic ARNs that will receive stack events.

---

##### `permissionsBoundary`<sup>Optional</sup> <a name="permissionsBoundary" id="@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateSubmitJobSfnChainConstructProps.property.permissionsBoundary"></a>

```typescript
public readonly permissionsBoundary: PermissionsBoundary;
```

- *Type:* aws-cdk-lib.PermissionsBoundary
- *Default:* no permissions boundary is applied

Options for applying a permissions boundary to all IAM Roles and Users created within this Stage.

---

##### `stackName`<sup>Optional</sup> <a name="stackName" id="@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateSubmitJobSfnChainConstructProps.property.stackName"></a>

```typescript
public readonly stackName: string;
```

- *Type:* string
- *Default:* Derived from construct path.

Name to deploy the stack with.

---

##### `suppressTemplateIndentation`<sup>Optional</sup> <a name="suppressTemplateIndentation" id="@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateSubmitJobSfnChainConstructProps.property.suppressTemplateIndentation"></a>

```typescript
public readonly suppressTemplateIndentation: boolean;
```

- *Type:* boolean
- *Default:* the value of `@aws-cdk/core:suppressTemplateIndentation`, or `false` if that is not set.

Enable this flag to suppress indentation in generated CloudFormation templates.

If not specified, the value of the `@aws-cdk/core:suppressTemplateIndentation`
context key will be used. If that is not specified, then the
default value `false` will be used.

---

##### `synthesizer`<sup>Optional</sup> <a name="synthesizer" id="@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateSubmitJobSfnChainConstructProps.property.synthesizer"></a>

```typescript
public readonly synthesizer: IStackSynthesizer;
```

- *Type:* aws-cdk-lib.IStackSynthesizer
- *Default:* The synthesizer specified on `App`, or `DefaultStackSynthesizer` otherwise.

Synthesis method to use while deploying this stack.

The Stack Synthesizer controls aspects of synthesis and deployment,
like how assets are referenced and what IAM roles to use. For more
information, see the README of the main CDK package.

If not specified, the `defaultStackSynthesizer` from `App` will be used.
If that is not specified, `DefaultStackSynthesizer` is used if
`@aws-cdk/core:newStyleStackSynthesis` is set to `true` or the CDK major
version is v2. In CDK v1 `LegacyStackSynthesizer` is the default if no
other synthesizer is specified.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateSubmitJobSfnChainConstructProps.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* {}

Stack tags that will be applied to all the taggable resources and the stack itself.

---

##### `terminationProtection`<sup>Optional</sup> <a name="terminationProtection" id="@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateSubmitJobSfnChainConstructProps.property.terminationProtection"></a>

```typescript
public readonly terminationProtection: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to enable termination protection for this stack.

---

##### `batchEcsJobDefinition`<sup>Required</sup> <a name="batchEcsJobDefinition" id="@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateSubmitJobSfnChainConstructProps.property.batchEcsJobDefinition"></a>

```typescript
public readonly batchEcsJobDefinition: EcsJobDefinition;
```

- *Type:* aws-cdk-lib.aws_batch.EcsJobDefinition

The BatchEcsJobDefinition to use.

---

##### `batchFargateConstruct`<sup>Required</sup> <a name="batchFargateConstruct" id="@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateSubmitJobSfnChainConstructProps.property.batchFargateConstruct"></a>

```typescript
public readonly batchFargateConstruct: BatchFargateConstruct;
```

- *Type:* <a href="#@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateConstruct">BatchFargateConstruct</a>

The BatchFargateConstruct to use.

---

##### `constructJobDefinitionFunction`<sup>Required</sup> <a name="constructJobDefinitionFunction" id="@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateSubmitJobSfnChainConstructProps.property.constructJobDefinitionFunction"></a>

```typescript
public readonly constructJobDefinitionFunction: Function;
```

- *Type:* aws-cdk-lib.aws_lambda.Function

The Lambda function to use for constructing the job definition.

---

##### `stepConfig`<sup>Required</sup> <a name="stepConfig" id="@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateSubmitJobSfnChainConstructProps.property.stepConfig"></a>

```typescript
public readonly stepConfig: StepConfig;
```

- *Type:* <a href="#@awslabs/data-transformation-pipeline-cdk-constructs.StepConfig">StepConfig</a>

The StepConfig to use for the Step Function Chain step.

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@awslabs/data-transformation-pipeline-cdk-constructs.BatchFargateSubmitJobSfnChainConstructProps.property.bucket"></a>

```typescript
public readonly bucket: Bucket;
```

- *Type:* aws-cdk-lib.aws_s3.Bucket

The S3 bucket to use for source files.

---

### LambdaInvokeSfnChainConstructProps <a name="LambdaInvokeSfnChainConstructProps" id="@awslabs/data-transformation-pipeline-cdk-constructs.LambdaInvokeSfnChainConstructProps"></a>

Properties for the LambdaInvokeSfnChainConstruct.

#### Initializer <a name="Initializer" id="@awslabs/data-transformation-pipeline-cdk-constructs.LambdaInvokeSfnChainConstructProps.Initializer"></a>

```typescript
import { LambdaInvokeSfnChainConstructProps } from '@awslabs/data-transformation-pipeline-cdk-constructs'

const lambdaInvokeSfnChainConstructProps: LambdaInvokeSfnChainConstructProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.LambdaInvokeSfnChainConstructProps.property.analyticsReporting">analyticsReporting</a></code> | <code>boolean</code> | Include runtime versioning information in this Stack. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.LambdaInvokeSfnChainConstructProps.property.crossRegionReferences">crossRegionReferences</a></code> | <code>boolean</code> | Enable this flag to allow native cross region stack references. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.LambdaInvokeSfnChainConstructProps.property.description">description</a></code> | <code>string</code> | A description of the stack. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.LambdaInvokeSfnChainConstructProps.property.env">env</a></code> | <code>aws-cdk-lib.Environment</code> | The AWS environment (account/region) where this stack will be deployed. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.LambdaInvokeSfnChainConstructProps.property.notificationArns">notificationArns</a></code> | <code>string[]</code> | SNS Topic ARNs that will receive stack events. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.LambdaInvokeSfnChainConstructProps.property.permissionsBoundary">permissionsBoundary</a></code> | <code>aws-cdk-lib.PermissionsBoundary</code> | Options for applying a permissions boundary to all IAM Roles and Users created within this Stage. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.LambdaInvokeSfnChainConstructProps.property.stackName">stackName</a></code> | <code>string</code> | Name to deploy the stack with. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.LambdaInvokeSfnChainConstructProps.property.suppressTemplateIndentation">suppressTemplateIndentation</a></code> | <code>boolean</code> | Enable this flag to suppress indentation in generated CloudFormation templates. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.LambdaInvokeSfnChainConstructProps.property.synthesizer">synthesizer</a></code> | <code>aws-cdk-lib.IStackSynthesizer</code> | Synthesis method to use while deploying this stack. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.LambdaInvokeSfnChainConstructProps.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Stack tags that will be applied to all the taggable resources and the stack itself. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.LambdaInvokeSfnChainConstructProps.property.terminationProtection">terminationProtection</a></code> | <code>boolean</code> | Whether to enable termination protection for this stack. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.LambdaInvokeSfnChainConstructProps.property.lambdaFunctionProps">lambdaFunctionProps</a></code> | <code>aws-cdk-lib.aws_lambda.FunctionProps</code> | The Lambda Function Props to generate. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.LambdaInvokeSfnChainConstructProps.property.grantReadBuckets">grantReadBuckets</a></code> | <code>aws-cdk-lib.aws_s3.Bucket[]</code> | The S3 buckets to grant read permissions to. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.LambdaInvokeSfnChainConstructProps.property.grantReadWriteBuckets">grantReadWriteBuckets</a></code> | <code>aws-cdk-lib.aws_s3.Bucket[]</code> | The S3 buckets to grant read/write permissions to. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.LambdaInvokeSfnChainConstructProps.property.grantWriteBuckets">grantWriteBuckets</a></code> | <code>aws-cdk-lib.aws_s3.Bucket[]</code> | The S3 buckets to grant write permissions to. |

---

##### `analyticsReporting`<sup>Optional</sup> <a name="analyticsReporting" id="@awslabs/data-transformation-pipeline-cdk-constructs.LambdaInvokeSfnChainConstructProps.property.analyticsReporting"></a>

```typescript
public readonly analyticsReporting: boolean;
```

- *Type:* boolean
- *Default:* `analyticsReporting` setting of containing `App`, or value of 'aws:cdk:version-reporting' context key

Include runtime versioning information in this Stack.

---

##### `crossRegionReferences`<sup>Optional</sup> <a name="crossRegionReferences" id="@awslabs/data-transformation-pipeline-cdk-constructs.LambdaInvokeSfnChainConstructProps.property.crossRegionReferences"></a>

```typescript
public readonly crossRegionReferences: boolean;
```

- *Type:* boolean
- *Default:* false

Enable this flag to allow native cross region stack references.

Enabling this will create a CloudFormation custom resource
in both the producing stack and consuming stack in order to perform the export/import

This feature is currently experimental

---

##### `description`<sup>Optional</sup> <a name="description" id="@awslabs/data-transformation-pipeline-cdk-constructs.LambdaInvokeSfnChainConstructProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* No description.

A description of the stack.

---

##### `env`<sup>Optional</sup> <a name="env" id="@awslabs/data-transformation-pipeline-cdk-constructs.LambdaInvokeSfnChainConstructProps.property.env"></a>

```typescript
public readonly env: Environment;
```

- *Type:* aws-cdk-lib.Environment
- *Default:* The environment of the containing `Stage` if available, otherwise create the stack will be environment-agnostic.

The AWS environment (account/region) where this stack will be deployed.

Set the `region`/`account` fields of `env` to either a concrete value to
select the indicated environment (recommended for production stacks), or to
the values of environment variables
`CDK_DEFAULT_REGION`/`CDK_DEFAULT_ACCOUNT` to let the target environment
depend on the AWS credentials/configuration that the CDK CLI is executed
under (recommended for development stacks).

If the `Stack` is instantiated inside a `Stage`, any undefined
`region`/`account` fields from `env` will default to the same field on the
encompassing `Stage`, if configured there.

If either `region` or `account` are not set nor inherited from `Stage`, the
Stack will be considered "*environment-agnostic*"". Environment-agnostic
stacks can be deployed to any environment but may not be able to take
advantage of all features of the CDK. For example, they will not be able to
use environmental context lookups such as `ec2.Vpc.fromLookup` and will not
automatically translate Service Principals to the right format based on the
environment's AWS partition, and other such enhancements.

---

*Example*

```typescript
// Use a concrete account and region to deploy this stack to:
// `.account` and `.region` will simply return these values.
new Stack(app, 'Stack1', {
  env: {
    account: '123456789012',
    region: 'us-east-1'
  },
});

// Use the CLI's current credentials to determine the target environment:
// `.account` and `.region` will reflect the account+region the CLI
// is configured to use (based on the user CLI credentials)
new Stack(app, 'Stack2', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION
  },
});

// Define multiple stacks stage associated with an environment
const myStage = new Stage(app, 'MyStage', {
  env: {
    account: '123456789012',
    region: 'us-east-1'
  }
});

// both of these stacks will use the stage's account/region:
// `.account` and `.region` will resolve to the concrete values as above
new MyStack(myStage, 'Stack1');
new YourStack(myStage, 'Stack2');

// Define an environment-agnostic stack:
// `.account` and `.region` will resolve to `{ "Ref": "AWS::AccountId" }` and `{ "Ref": "AWS::Region" }` respectively.
// which will only resolve to actual values by CloudFormation during deployment.
new MyStack(app, 'Stack1');
```


##### `notificationArns`<sup>Optional</sup> <a name="notificationArns" id="@awslabs/data-transformation-pipeline-cdk-constructs.LambdaInvokeSfnChainConstructProps.property.notificationArns"></a>

```typescript
public readonly notificationArns: string[];
```

- *Type:* string[]
- *Default:* no notfication arns.

SNS Topic ARNs that will receive stack events.

---

##### `permissionsBoundary`<sup>Optional</sup> <a name="permissionsBoundary" id="@awslabs/data-transformation-pipeline-cdk-constructs.LambdaInvokeSfnChainConstructProps.property.permissionsBoundary"></a>

```typescript
public readonly permissionsBoundary: PermissionsBoundary;
```

- *Type:* aws-cdk-lib.PermissionsBoundary
- *Default:* no permissions boundary is applied

Options for applying a permissions boundary to all IAM Roles and Users created within this Stage.

---

##### `stackName`<sup>Optional</sup> <a name="stackName" id="@awslabs/data-transformation-pipeline-cdk-constructs.LambdaInvokeSfnChainConstructProps.property.stackName"></a>

```typescript
public readonly stackName: string;
```

- *Type:* string
- *Default:* Derived from construct path.

Name to deploy the stack with.

---

##### `suppressTemplateIndentation`<sup>Optional</sup> <a name="suppressTemplateIndentation" id="@awslabs/data-transformation-pipeline-cdk-constructs.LambdaInvokeSfnChainConstructProps.property.suppressTemplateIndentation"></a>

```typescript
public readonly suppressTemplateIndentation: boolean;
```

- *Type:* boolean
- *Default:* the value of `@aws-cdk/core:suppressTemplateIndentation`, or `false` if that is not set.

Enable this flag to suppress indentation in generated CloudFormation templates.

If not specified, the value of the `@aws-cdk/core:suppressTemplateIndentation`
context key will be used. If that is not specified, then the
default value `false` will be used.

---

##### `synthesizer`<sup>Optional</sup> <a name="synthesizer" id="@awslabs/data-transformation-pipeline-cdk-constructs.LambdaInvokeSfnChainConstructProps.property.synthesizer"></a>

```typescript
public readonly synthesizer: IStackSynthesizer;
```

- *Type:* aws-cdk-lib.IStackSynthesizer
- *Default:* The synthesizer specified on `App`, or `DefaultStackSynthesizer` otherwise.

Synthesis method to use while deploying this stack.

The Stack Synthesizer controls aspects of synthesis and deployment,
like how assets are referenced and what IAM roles to use. For more
information, see the README of the main CDK package.

If not specified, the `defaultStackSynthesizer` from `App` will be used.
If that is not specified, `DefaultStackSynthesizer` is used if
`@aws-cdk/core:newStyleStackSynthesis` is set to `true` or the CDK major
version is v2. In CDK v1 `LegacyStackSynthesizer` is the default if no
other synthesizer is specified.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@awslabs/data-transformation-pipeline-cdk-constructs.LambdaInvokeSfnChainConstructProps.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* {}

Stack tags that will be applied to all the taggable resources and the stack itself.

---

##### `terminationProtection`<sup>Optional</sup> <a name="terminationProtection" id="@awslabs/data-transformation-pipeline-cdk-constructs.LambdaInvokeSfnChainConstructProps.property.terminationProtection"></a>

```typescript
public readonly terminationProtection: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to enable termination protection for this stack.

---

##### `lambdaFunctionProps`<sup>Required</sup> <a name="lambdaFunctionProps" id="@awslabs/data-transformation-pipeline-cdk-constructs.LambdaInvokeSfnChainConstructProps.property.lambdaFunctionProps"></a>

```typescript
public readonly lambdaFunctionProps: FunctionProps;
```

- *Type:* aws-cdk-lib.aws_lambda.FunctionProps

The Lambda Function Props to generate.

---

##### `grantReadBuckets`<sup>Optional</sup> <a name="grantReadBuckets" id="@awslabs/data-transformation-pipeline-cdk-constructs.LambdaInvokeSfnChainConstructProps.property.grantReadBuckets"></a>

```typescript
public readonly grantReadBuckets: Bucket[];
```

- *Type:* aws-cdk-lib.aws_s3.Bucket[]
- *Default:* undefined

The S3 buckets to grant read permissions to.

---

##### `grantReadWriteBuckets`<sup>Optional</sup> <a name="grantReadWriteBuckets" id="@awslabs/data-transformation-pipeline-cdk-constructs.LambdaInvokeSfnChainConstructProps.property.grantReadWriteBuckets"></a>

```typescript
public readonly grantReadWriteBuckets: Bucket[];
```

- *Type:* aws-cdk-lib.aws_s3.Bucket[]
- *Default:* undefined

The S3 buckets to grant read/write permissions to.

---

##### `grantWriteBuckets`<sup>Optional</sup> <a name="grantWriteBuckets" id="@awslabs/data-transformation-pipeline-cdk-constructs.LambdaInvokeSfnChainConstructProps.property.grantWriteBuckets"></a>

```typescript
public readonly grantWriteBuckets: Bucket[];
```

- *Type:* aws-cdk-lib.aws_s3.Bucket[]
- *Default:* undefined

The S3 buckets to grant write permissions to.

---

### StateMachineWithLogGroupFromChainConstructProps <a name="StateMachineWithLogGroupFromChainConstructProps" id="@awslabs/data-transformation-pipeline-cdk-constructs.StateMachineWithLogGroupFromChainConstructProps"></a>

Props for the StateMachineWithLogGroupFromChainConstruct construct.

#### Initializer <a name="Initializer" id="@awslabs/data-transformation-pipeline-cdk-constructs.StateMachineWithLogGroupFromChainConstructProps.Initializer"></a>

```typescript
import { StateMachineWithLogGroupFromChainConstructProps } from '@awslabs/data-transformation-pipeline-cdk-constructs'

const stateMachineWithLogGroupFromChainConstructProps: StateMachineWithLogGroupFromChainConstructProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.StateMachineWithLogGroupFromChainConstructProps.property.analyticsReporting">analyticsReporting</a></code> | <code>boolean</code> | Include runtime versioning information in this Stack. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.StateMachineWithLogGroupFromChainConstructProps.property.crossRegionReferences">crossRegionReferences</a></code> | <code>boolean</code> | Enable this flag to allow native cross region stack references. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.StateMachineWithLogGroupFromChainConstructProps.property.description">description</a></code> | <code>string</code> | A description of the stack. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.StateMachineWithLogGroupFromChainConstructProps.property.env">env</a></code> | <code>aws-cdk-lib.Environment</code> | The AWS environment (account/region) where this stack will be deployed. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.StateMachineWithLogGroupFromChainConstructProps.property.notificationArns">notificationArns</a></code> | <code>string[]</code> | SNS Topic ARNs that will receive stack events. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.StateMachineWithLogGroupFromChainConstructProps.property.permissionsBoundary">permissionsBoundary</a></code> | <code>aws-cdk-lib.PermissionsBoundary</code> | Options for applying a permissions boundary to all IAM Roles and Users created within this Stage. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.StateMachineWithLogGroupFromChainConstructProps.property.stackName">stackName</a></code> | <code>string</code> | Name to deploy the stack with. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.StateMachineWithLogGroupFromChainConstructProps.property.suppressTemplateIndentation">suppressTemplateIndentation</a></code> | <code>boolean</code> | Enable this flag to suppress indentation in generated CloudFormation templates. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.StateMachineWithLogGroupFromChainConstructProps.property.synthesizer">synthesizer</a></code> | <code>aws-cdk-lib.IStackSynthesizer</code> | Synthesis method to use while deploying this stack. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.StateMachineWithLogGroupFromChainConstructProps.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Stack tags that will be applied to all the taggable resources and the stack itself. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.StateMachineWithLogGroupFromChainConstructProps.property.terminationProtection">terminationProtection</a></code> | <code>boolean</code> | Whether to enable termination protection for this stack. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.StateMachineWithLogGroupFromChainConstructProps.property.chain">chain</a></code> | <code>aws-cdk-lib.aws_stepfunctions.Chain</code> | Chain used to create the State Machine definition body. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.StateMachineWithLogGroupFromChainConstructProps.property.stateMachineName">stateMachineName</a></code> | <code>string</code> | State Machine name that will be appended by '-StateMachine'. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.StateMachineWithLogGroupFromChainConstructProps.property.timeout">timeout</a></code> | <code>aws-cdk-lib.Duration</code> | Maximum run time for this state machine. |

---

##### `analyticsReporting`<sup>Optional</sup> <a name="analyticsReporting" id="@awslabs/data-transformation-pipeline-cdk-constructs.StateMachineWithLogGroupFromChainConstructProps.property.analyticsReporting"></a>

```typescript
public readonly analyticsReporting: boolean;
```

- *Type:* boolean
- *Default:* `analyticsReporting` setting of containing `App`, or value of 'aws:cdk:version-reporting' context key

Include runtime versioning information in this Stack.

---

##### `crossRegionReferences`<sup>Optional</sup> <a name="crossRegionReferences" id="@awslabs/data-transformation-pipeline-cdk-constructs.StateMachineWithLogGroupFromChainConstructProps.property.crossRegionReferences"></a>

```typescript
public readonly crossRegionReferences: boolean;
```

- *Type:* boolean
- *Default:* false

Enable this flag to allow native cross region stack references.

Enabling this will create a CloudFormation custom resource
in both the producing stack and consuming stack in order to perform the export/import

This feature is currently experimental

---

##### `description`<sup>Optional</sup> <a name="description" id="@awslabs/data-transformation-pipeline-cdk-constructs.StateMachineWithLogGroupFromChainConstructProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* No description.

A description of the stack.

---

##### `env`<sup>Optional</sup> <a name="env" id="@awslabs/data-transformation-pipeline-cdk-constructs.StateMachineWithLogGroupFromChainConstructProps.property.env"></a>

```typescript
public readonly env: Environment;
```

- *Type:* aws-cdk-lib.Environment
- *Default:* The environment of the containing `Stage` if available, otherwise create the stack will be environment-agnostic.

The AWS environment (account/region) where this stack will be deployed.

Set the `region`/`account` fields of `env` to either a concrete value to
select the indicated environment (recommended for production stacks), or to
the values of environment variables
`CDK_DEFAULT_REGION`/`CDK_DEFAULT_ACCOUNT` to let the target environment
depend on the AWS credentials/configuration that the CDK CLI is executed
under (recommended for development stacks).

If the `Stack` is instantiated inside a `Stage`, any undefined
`region`/`account` fields from `env` will default to the same field on the
encompassing `Stage`, if configured there.

If either `region` or `account` are not set nor inherited from `Stage`, the
Stack will be considered "*environment-agnostic*"". Environment-agnostic
stacks can be deployed to any environment but may not be able to take
advantage of all features of the CDK. For example, they will not be able to
use environmental context lookups such as `ec2.Vpc.fromLookup` and will not
automatically translate Service Principals to the right format based on the
environment's AWS partition, and other such enhancements.

---

*Example*

```typescript
// Use a concrete account and region to deploy this stack to:
// `.account` and `.region` will simply return these values.
new Stack(app, 'Stack1', {
  env: {
    account: '123456789012',
    region: 'us-east-1'
  },
});

// Use the CLI's current credentials to determine the target environment:
// `.account` and `.region` will reflect the account+region the CLI
// is configured to use (based on the user CLI credentials)
new Stack(app, 'Stack2', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION
  },
});

// Define multiple stacks stage associated with an environment
const myStage = new Stage(app, 'MyStage', {
  env: {
    account: '123456789012',
    region: 'us-east-1'
  }
});

// both of these stacks will use the stage's account/region:
// `.account` and `.region` will resolve to the concrete values as above
new MyStack(myStage, 'Stack1');
new YourStack(myStage, 'Stack2');

// Define an environment-agnostic stack:
// `.account` and `.region` will resolve to `{ "Ref": "AWS::AccountId" }` and `{ "Ref": "AWS::Region" }` respectively.
// which will only resolve to actual values by CloudFormation during deployment.
new MyStack(app, 'Stack1');
```


##### `notificationArns`<sup>Optional</sup> <a name="notificationArns" id="@awslabs/data-transformation-pipeline-cdk-constructs.StateMachineWithLogGroupFromChainConstructProps.property.notificationArns"></a>

```typescript
public readonly notificationArns: string[];
```

- *Type:* string[]
- *Default:* no notfication arns.

SNS Topic ARNs that will receive stack events.

---

##### `permissionsBoundary`<sup>Optional</sup> <a name="permissionsBoundary" id="@awslabs/data-transformation-pipeline-cdk-constructs.StateMachineWithLogGroupFromChainConstructProps.property.permissionsBoundary"></a>

```typescript
public readonly permissionsBoundary: PermissionsBoundary;
```

- *Type:* aws-cdk-lib.PermissionsBoundary
- *Default:* no permissions boundary is applied

Options for applying a permissions boundary to all IAM Roles and Users created within this Stage.

---

##### `stackName`<sup>Optional</sup> <a name="stackName" id="@awslabs/data-transformation-pipeline-cdk-constructs.StateMachineWithLogGroupFromChainConstructProps.property.stackName"></a>

```typescript
public readonly stackName: string;
```

- *Type:* string
- *Default:* Derived from construct path.

Name to deploy the stack with.

---

##### `suppressTemplateIndentation`<sup>Optional</sup> <a name="suppressTemplateIndentation" id="@awslabs/data-transformation-pipeline-cdk-constructs.StateMachineWithLogGroupFromChainConstructProps.property.suppressTemplateIndentation"></a>

```typescript
public readonly suppressTemplateIndentation: boolean;
```

- *Type:* boolean
- *Default:* the value of `@aws-cdk/core:suppressTemplateIndentation`, or `false` if that is not set.

Enable this flag to suppress indentation in generated CloudFormation templates.

If not specified, the value of the `@aws-cdk/core:suppressTemplateIndentation`
context key will be used. If that is not specified, then the
default value `false` will be used.

---

##### `synthesizer`<sup>Optional</sup> <a name="synthesizer" id="@awslabs/data-transformation-pipeline-cdk-constructs.StateMachineWithLogGroupFromChainConstructProps.property.synthesizer"></a>

```typescript
public readonly synthesizer: IStackSynthesizer;
```

- *Type:* aws-cdk-lib.IStackSynthesizer
- *Default:* The synthesizer specified on `App`, or `DefaultStackSynthesizer` otherwise.

Synthesis method to use while deploying this stack.

The Stack Synthesizer controls aspects of synthesis and deployment,
like how assets are referenced and what IAM roles to use. For more
information, see the README of the main CDK package.

If not specified, the `defaultStackSynthesizer` from `App` will be used.
If that is not specified, `DefaultStackSynthesizer` is used if
`@aws-cdk/core:newStyleStackSynthesis` is set to `true` or the CDK major
version is v2. In CDK v1 `LegacyStackSynthesizer` is the default if no
other synthesizer is specified.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@awslabs/data-transformation-pipeline-cdk-constructs.StateMachineWithLogGroupFromChainConstructProps.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* {}

Stack tags that will be applied to all the taggable resources and the stack itself.

---

##### `terminationProtection`<sup>Optional</sup> <a name="terminationProtection" id="@awslabs/data-transformation-pipeline-cdk-constructs.StateMachineWithLogGroupFromChainConstructProps.property.terminationProtection"></a>

```typescript
public readonly terminationProtection: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to enable termination protection for this stack.

---

##### `chain`<sup>Required</sup> <a name="chain" id="@awslabs/data-transformation-pipeline-cdk-constructs.StateMachineWithLogGroupFromChainConstructProps.property.chain"></a>

```typescript
public readonly chain: Chain;
```

- *Type:* aws-cdk-lib.aws_stepfunctions.Chain

Chain used to create the State Machine definition body.

---

##### `stateMachineName`<sup>Required</sup> <a name="stateMachineName" id="@awslabs/data-transformation-pipeline-cdk-constructs.StateMachineWithLogGroupFromChainConstructProps.property.stateMachineName"></a>

```typescript
public readonly stateMachineName: string;
```

- *Type:* string

State Machine name that will be appended by '-StateMachine'.

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@awslabs/data-transformation-pipeline-cdk-constructs.StateMachineWithLogGroupFromChainConstructProps.property.timeout"></a>

```typescript
public readonly timeout: Duration;
```

- *Type:* aws-cdk-lib.Duration
- *Default:* 6 hours (Duration.hours(6))

Maximum run time for this state machine.

---

### VpcBatchFargateConstructProps <a name="VpcBatchFargateConstructProps" id="@awslabs/data-transformation-pipeline-cdk-constructs.VpcBatchFargateConstructProps"></a>

Props for the VpcBatchFargateConstruct construct.

#### Initializer <a name="Initializer" id="@awslabs/data-transformation-pipeline-cdk-constructs.VpcBatchFargateConstructProps.Initializer"></a>

```typescript
import { VpcBatchFargateConstructProps } from '@awslabs/data-transformation-pipeline-cdk-constructs'

const vpcBatchFargateConstructProps: VpcBatchFargateConstructProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.VpcBatchFargateConstructProps.property.analyticsReporting">analyticsReporting</a></code> | <code>boolean</code> | Include runtime versioning information in this Stack. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.VpcBatchFargateConstructProps.property.crossRegionReferences">crossRegionReferences</a></code> | <code>boolean</code> | Enable this flag to allow native cross region stack references. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.VpcBatchFargateConstructProps.property.description">description</a></code> | <code>string</code> | A description of the stack. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.VpcBatchFargateConstructProps.property.env">env</a></code> | <code>aws-cdk-lib.Environment</code> | The AWS environment (account/region) where this stack will be deployed. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.VpcBatchFargateConstructProps.property.notificationArns">notificationArns</a></code> | <code>string[]</code> | SNS Topic ARNs that will receive stack events. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.VpcBatchFargateConstructProps.property.permissionsBoundary">permissionsBoundary</a></code> | <code>aws-cdk-lib.PermissionsBoundary</code> | Options for applying a permissions boundary to all IAM Roles and Users created within this Stage. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.VpcBatchFargateConstructProps.property.stackName">stackName</a></code> | <code>string</code> | Name to deploy the stack with. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.VpcBatchFargateConstructProps.property.suppressTemplateIndentation">suppressTemplateIndentation</a></code> | <code>boolean</code> | Enable this flag to suppress indentation in generated CloudFormation templates. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.VpcBatchFargateConstructProps.property.synthesizer">synthesizer</a></code> | <code>aws-cdk-lib.IStackSynthesizer</code> | Synthesis method to use while deploying this stack. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.VpcBatchFargateConstructProps.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Stack tags that will be applied to all the taggable resources and the stack itself. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.VpcBatchFargateConstructProps.property.terminationProtection">terminationProtection</a></code> | <code>boolean</code> | Whether to enable termination protection for this stack. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.VpcBatchFargateConstructProps.property.cidrRange">cidrRange</a></code> | <code>string</code> | The CIDR range for the VPC. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.VpcBatchFargateConstructProps.property.gatewayVpcEndpointServices">gatewayVpcEndpointServices</a></code> | <code>aws-cdk-lib.aws_ec2.GatewayVpcEndpointAwsService[]</code> | The Gateway VPC Endpoints for the VPC. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.VpcBatchFargateConstructProps.property.interfaceVpcEndpointServices">interfaceVpcEndpointServices</a></code> | <code>aws-cdk-lib.aws_ec2.InterfaceVpcEndpointAwsService[]</code> | The Interface VPC Endpoints for the VPC. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.VpcBatchFargateConstructProps.property.pipelineSubnetConfig">pipelineSubnetConfig</a></code> | <code>aws-cdk-lib.aws_ec2.SubnetConfiguration</code> | The subnet configuration for the VPC. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.VpcBatchFargateConstructProps.property.securityGroup">securityGroup</a></code> | <code>aws-cdk-lib.aws_ec2.SecurityGroup</code> | The security group for the VPC. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.VpcBatchFargateConstructProps.property.vpcLogGroup">vpcLogGroup</a></code> | <code>aws-cdk-lib.aws_logs.LogGroup</code> | The VPC Log Group. |

---

##### `analyticsReporting`<sup>Optional</sup> <a name="analyticsReporting" id="@awslabs/data-transformation-pipeline-cdk-constructs.VpcBatchFargateConstructProps.property.analyticsReporting"></a>

```typescript
public readonly analyticsReporting: boolean;
```

- *Type:* boolean
- *Default:* `analyticsReporting` setting of containing `App`, or value of 'aws:cdk:version-reporting' context key

Include runtime versioning information in this Stack.

---

##### `crossRegionReferences`<sup>Optional</sup> <a name="crossRegionReferences" id="@awslabs/data-transformation-pipeline-cdk-constructs.VpcBatchFargateConstructProps.property.crossRegionReferences"></a>

```typescript
public readonly crossRegionReferences: boolean;
```

- *Type:* boolean
- *Default:* false

Enable this flag to allow native cross region stack references.

Enabling this will create a CloudFormation custom resource
in both the producing stack and consuming stack in order to perform the export/import

This feature is currently experimental

---

##### `description`<sup>Optional</sup> <a name="description" id="@awslabs/data-transformation-pipeline-cdk-constructs.VpcBatchFargateConstructProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* No description.

A description of the stack.

---

##### `env`<sup>Optional</sup> <a name="env" id="@awslabs/data-transformation-pipeline-cdk-constructs.VpcBatchFargateConstructProps.property.env"></a>

```typescript
public readonly env: Environment;
```

- *Type:* aws-cdk-lib.Environment
- *Default:* The environment of the containing `Stage` if available, otherwise create the stack will be environment-agnostic.

The AWS environment (account/region) where this stack will be deployed.

Set the `region`/`account` fields of `env` to either a concrete value to
select the indicated environment (recommended for production stacks), or to
the values of environment variables
`CDK_DEFAULT_REGION`/`CDK_DEFAULT_ACCOUNT` to let the target environment
depend on the AWS credentials/configuration that the CDK CLI is executed
under (recommended for development stacks).

If the `Stack` is instantiated inside a `Stage`, any undefined
`region`/`account` fields from `env` will default to the same field on the
encompassing `Stage`, if configured there.

If either `region` or `account` are not set nor inherited from `Stage`, the
Stack will be considered "*environment-agnostic*"". Environment-agnostic
stacks can be deployed to any environment but may not be able to take
advantage of all features of the CDK. For example, they will not be able to
use environmental context lookups such as `ec2.Vpc.fromLookup` and will not
automatically translate Service Principals to the right format based on the
environment's AWS partition, and other such enhancements.

---

*Example*

```typescript
// Use a concrete account and region to deploy this stack to:
// `.account` and `.region` will simply return these values.
new Stack(app, 'Stack1', {
  env: {
    account: '123456789012',
    region: 'us-east-1'
  },
});

// Use the CLI's current credentials to determine the target environment:
// `.account` and `.region` will reflect the account+region the CLI
// is configured to use (based on the user CLI credentials)
new Stack(app, 'Stack2', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION
  },
});

// Define multiple stacks stage associated with an environment
const myStage = new Stage(app, 'MyStage', {
  env: {
    account: '123456789012',
    region: 'us-east-1'
  }
});

// both of these stacks will use the stage's account/region:
// `.account` and `.region` will resolve to the concrete values as above
new MyStack(myStage, 'Stack1');
new YourStack(myStage, 'Stack2');

// Define an environment-agnostic stack:
// `.account` and `.region` will resolve to `{ "Ref": "AWS::AccountId" }` and `{ "Ref": "AWS::Region" }` respectively.
// which will only resolve to actual values by CloudFormation during deployment.
new MyStack(app, 'Stack1');
```


##### `notificationArns`<sup>Optional</sup> <a name="notificationArns" id="@awslabs/data-transformation-pipeline-cdk-constructs.VpcBatchFargateConstructProps.property.notificationArns"></a>

```typescript
public readonly notificationArns: string[];
```

- *Type:* string[]
- *Default:* no notfication arns.

SNS Topic ARNs that will receive stack events.

---

##### `permissionsBoundary`<sup>Optional</sup> <a name="permissionsBoundary" id="@awslabs/data-transformation-pipeline-cdk-constructs.VpcBatchFargateConstructProps.property.permissionsBoundary"></a>

```typescript
public readonly permissionsBoundary: PermissionsBoundary;
```

- *Type:* aws-cdk-lib.PermissionsBoundary
- *Default:* no permissions boundary is applied

Options for applying a permissions boundary to all IAM Roles and Users created within this Stage.

---

##### `stackName`<sup>Optional</sup> <a name="stackName" id="@awslabs/data-transformation-pipeline-cdk-constructs.VpcBatchFargateConstructProps.property.stackName"></a>

```typescript
public readonly stackName: string;
```

- *Type:* string
- *Default:* Derived from construct path.

Name to deploy the stack with.

---

##### `suppressTemplateIndentation`<sup>Optional</sup> <a name="suppressTemplateIndentation" id="@awslabs/data-transformation-pipeline-cdk-constructs.VpcBatchFargateConstructProps.property.suppressTemplateIndentation"></a>

```typescript
public readonly suppressTemplateIndentation: boolean;
```

- *Type:* boolean
- *Default:* the value of `@aws-cdk/core:suppressTemplateIndentation`, or `false` if that is not set.

Enable this flag to suppress indentation in generated CloudFormation templates.

If not specified, the value of the `@aws-cdk/core:suppressTemplateIndentation`
context key will be used. If that is not specified, then the
default value `false` will be used.

---

##### `synthesizer`<sup>Optional</sup> <a name="synthesizer" id="@awslabs/data-transformation-pipeline-cdk-constructs.VpcBatchFargateConstructProps.property.synthesizer"></a>

```typescript
public readonly synthesizer: IStackSynthesizer;
```

- *Type:* aws-cdk-lib.IStackSynthesizer
- *Default:* The synthesizer specified on `App`, or `DefaultStackSynthesizer` otherwise.

Synthesis method to use while deploying this stack.

The Stack Synthesizer controls aspects of synthesis and deployment,
like how assets are referenced and what IAM roles to use. For more
information, see the README of the main CDK package.

If not specified, the `defaultStackSynthesizer` from `App` will be used.
If that is not specified, `DefaultStackSynthesizer` is used if
`@aws-cdk/core:newStyleStackSynthesis` is set to `true` or the CDK major
version is v2. In CDK v1 `LegacyStackSynthesizer` is the default if no
other synthesizer is specified.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@awslabs/data-transformation-pipeline-cdk-constructs.VpcBatchFargateConstructProps.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* {}

Stack tags that will be applied to all the taggable resources and the stack itself.

---

##### `terminationProtection`<sup>Optional</sup> <a name="terminationProtection" id="@awslabs/data-transformation-pipeline-cdk-constructs.VpcBatchFargateConstructProps.property.terminationProtection"></a>

```typescript
public readonly terminationProtection: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to enable termination protection for this stack.

---

##### `cidrRange`<sup>Optional</sup> <a name="cidrRange" id="@awslabs/data-transformation-pipeline-cdk-constructs.VpcBatchFargateConstructProps.property.cidrRange"></a>

```typescript
public readonly cidrRange: string;
```

- *Type:* string

The CIDR range for the VPC.

---

##### `gatewayVpcEndpointServices`<sup>Optional</sup> <a name="gatewayVpcEndpointServices" id="@awslabs/data-transformation-pipeline-cdk-constructs.VpcBatchFargateConstructProps.property.gatewayVpcEndpointServices"></a>

```typescript
public readonly gatewayVpcEndpointServices: GatewayVpcEndpointAwsService[];
```

- *Type:* aws-cdk-lib.aws_ec2.GatewayVpcEndpointAwsService[]

The Gateway VPC Endpoints for the VPC.

---

##### `interfaceVpcEndpointServices`<sup>Optional</sup> <a name="interfaceVpcEndpointServices" id="@awslabs/data-transformation-pipeline-cdk-constructs.VpcBatchFargateConstructProps.property.interfaceVpcEndpointServices"></a>

```typescript
public readonly interfaceVpcEndpointServices: InterfaceVpcEndpointAwsService[];
```

- *Type:* aws-cdk-lib.aws_ec2.InterfaceVpcEndpointAwsService[]

The Interface VPC Endpoints for the VPC.

---

##### `pipelineSubnetConfig`<sup>Optional</sup> <a name="pipelineSubnetConfig" id="@awslabs/data-transformation-pipeline-cdk-constructs.VpcBatchFargateConstructProps.property.pipelineSubnetConfig"></a>

```typescript
public readonly pipelineSubnetConfig: SubnetConfiguration;
```

- *Type:* aws-cdk-lib.aws_ec2.SubnetConfiguration

The subnet configuration for the VPC.

---

##### `securityGroup`<sup>Optional</sup> <a name="securityGroup" id="@awslabs/data-transformation-pipeline-cdk-constructs.VpcBatchFargateConstructProps.property.securityGroup"></a>

```typescript
public readonly securityGroup: SecurityGroup;
```

- *Type:* aws-cdk-lib.aws_ec2.SecurityGroup

The security group for the VPC.

---

##### `vpcLogGroup`<sup>Optional</sup> <a name="vpcLogGroup" id="@awslabs/data-transformation-pipeline-cdk-constructs.VpcBatchFargateConstructProps.property.vpcLogGroup"></a>

```typescript
public readonly vpcLogGroup: LogGroup;
```

- *Type:* aws-cdk-lib.aws_logs.LogGroup

The VPC Log Group.

---

## Classes <a name="Classes" id="Classes"></a>

### StepConfig <a name="StepConfig" id="@awslabs/data-transformation-pipeline-cdk-constructs.StepConfig"></a>

#### Initializers <a name="Initializers" id="@awslabs/data-transformation-pipeline-cdk-constructs.StepConfig.Initializer"></a>

```typescript
import { StepConfig } from '@awslabs/data-transformation-pipeline-cdk-constructs'

new StepConfig(type: StepType, schema: JobSchema)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.StepConfig.Initializer.parameter.type">type</a></code> | <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.StepType">StepType</a></code> | *No description.* |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.StepConfig.Initializer.parameter.schema">schema</a></code> | <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.JobSchema">JobSchema</a></code> | *No description.* |

---

##### `type`<sup>Required</sup> <a name="type" id="@awslabs/data-transformation-pipeline-cdk-constructs.StepConfig.Initializer.parameter.type"></a>

- *Type:* <a href="#@awslabs/data-transformation-pipeline-cdk-constructs.StepType">StepType</a>

---

##### `schema`<sup>Required</sup> <a name="schema" id="@awslabs/data-transformation-pipeline-cdk-constructs.StepConfig.Initializer.parameter.schema"></a>

- *Type:* <a href="#@awslabs/data-transformation-pipeline-cdk-constructs.JobSchema">JobSchema</a>

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.StepConfig.property.schema">schema</a></code> | <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.JobSchema">JobSchema</a></code> | *No description.* |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.StepConfig.property.type">type</a></code> | <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.StepType">StepType</a></code> | *No description.* |

---

##### `schema`<sup>Required</sup> <a name="schema" id="@awslabs/data-transformation-pipeline-cdk-constructs.StepConfig.property.schema"></a>

```typescript
public readonly schema: JobSchema;
```

- *Type:* <a href="#@awslabs/data-transformation-pipeline-cdk-constructs.JobSchema">JobSchema</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@awslabs/data-transformation-pipeline-cdk-constructs.StepConfig.property.type"></a>

```typescript
public readonly type: StepType;
```

- *Type:* <a href="#@awslabs/data-transformation-pipeline-cdk-constructs.StepType">StepType</a>

---



## Enums <a name="Enums" id="Enums"></a>

### JobSchema <a name="JobSchema" id="@awslabs/data-transformation-pipeline-cdk-constructs.JobSchema"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.JobSchema.INPUT_OUTPUT_PREFIX">INPUT_OUTPUT_PREFIX</a></code> | Input and output come from S3 prefixes. |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.JobSchema.INPUT_SINGLE_FILE_OUTPUT_PREFIX">INPUT_SINGLE_FILE_OUTPUT_PREFIX</a></code> | Input is from a single file and output is from an S3 prefix. |

---

##### `INPUT_OUTPUT_PREFIX` <a name="INPUT_OUTPUT_PREFIX" id="@awslabs/data-transformation-pipeline-cdk-constructs.JobSchema.INPUT_OUTPUT_PREFIX"></a>

Input and output come from S3 prefixes.

Input: S3 prefix
Output: S3 prefix

---


##### `INPUT_SINGLE_FILE_OUTPUT_PREFIX` <a name="INPUT_SINGLE_FILE_OUTPUT_PREFIX" id="@awslabs/data-transformation-pipeline-cdk-constructs.JobSchema.INPUT_SINGLE_FILE_OUTPUT_PREFIX"></a>

Input is from a single file and output is from an S3 prefix.

Input: S3 prefix, object key
Output: S3 prefix

---


### StepType <a name="StepType" id="@awslabs/data-transformation-pipeline-cdk-constructs.StepType"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.StepType.JOIN">JOIN</a></code> | *No description.* |
| <code><a href="#@awslabs/data-transformation-pipeline-cdk-constructs.StepType.BOUNDINGBOX">BOUNDINGBOX</a></code> | *No description.* |

---

##### `JOIN` <a name="JOIN" id="@awslabs/data-transformation-pipeline-cdk-constructs.StepType.JOIN"></a>

---


##### `BOUNDINGBOX` <a name="BOUNDINGBOX" id="@awslabs/data-transformation-pipeline-cdk-constructs.StepType.BOUNDINGBOX"></a>

---

