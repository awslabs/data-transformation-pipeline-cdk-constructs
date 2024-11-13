# AWS Data Transformation Pipeline CDK Constructs

![Stability: Experimental](https://img.shields.io/badge/stability-Experimental-important.svg?style=for-the-badge)

> All classes are under active development and subject to non-backward compatible changes or removal in any
> future version. These are not subject to the [Semantic Versioning](https://semver.org/) model.
> This means that while you may use them, you may need to update your source code when upgrading to a newer version of this package.

---
### Project Structure Notice
> Due to the experimental state of this project, it is not currently published to package managers (e.g. NPM, or PyPI).

---

## Table of contents

- [Introduction](#introduction)
- [CDK Versions](#cdk-versions)
- [Contributing](#contributing)
- [Design guidelines and Development guide](#design-guidelines-and-development-guide)
- [Getting Started](#getting-started)
- [Catalog](#catalog)
- [Sample Use Cases](#sample-use-cases)
- [Contributors](#contributors)
- [License](#license)
- [Legal Disclaimer](#legal-disclaimer)

# Introduction

The AWS Data Transformation Pipeline Constructs Library is an open-source extension of the [AWS Cloud Development Kit (AWS CDK)](https://docs.aws.amazon.com/cdk/v2/guide/home.html) that provides multi-service, well-architected patterns for quickly defining solutions in code to create predictable and repeatable infrastructure, called [constructs](https://docs.aws.amazon.com/cdk/v2/guide/constructs.html). The goal of AWS Data Transformation Pipeline CDK Constructs is to help developers build data transformation pipelines with pattern-based definitions for their architecture.

The patterns defined in AWS Data Transformation Pipeline CDK Constructs are high level, multi-service abstractions of AWS CDK constructs that have default configurations based on well-architected best practices. The library is organized into logical modules using object-oriented techniques to create each architectural pattern model.

# CDK Versions

AWS Data Transformation Pipeline CDK Constructs and the AWS CDK are independent teams and have different release schedules. Each release of AWS Data Transformation Pipeline CDK Constructs is built against a specific version of the AWS CDK. The [CHANGELOG.md](./CHANGELOG.md) file lists the CDK version associated with each AWS Data Transformation Pipeline CDK Constructs release. For instance, AWS Data Transformation Pipeline CDK Constructs v0.0.0 was built against AWS CDK v2.152.0. This means that to use AWS Data Transformation Pipeline CDK Constructs v0.0.0, your application must include AWS CDK v2.152.0 or later. You can continue to use the latest AWS CDK versions and upgrade the your AWS Data Transformation Pipeline CDK Constructs version when new releases become available.

# Contributing

Contributions of all kinds are welcome! Check out our [contributor guide](./CONTRIBUTING.md)

# Design guidelines and Development guide

If you want to add a new construct to the library, check out our [design guidelines](./DESIGN_GUIDELINES.md), then follow the [development guide](./DEVELOPER_GUIDE.md)

# Getting Started

#### For TypeScript:
- Clone this project locally
  - Run `git clone https://github.com/awslabs/data-transformation-pipeline-cdk-constructs.git`
- Navigate to the project directory
- Install all project dependencies
  - Run `npx projen install`
- Create a directory within the cloned project to host your CDK project
  - *Note:* There is a `cdk-sample` directory in the project with an [example CDK project](./cdk-sample/README.md)
- Create or use an existing CDK application in TypeScript.
  - `cdk init app --language typescript`
- When creating new stacks, import the 3D Data Transformation constructs by path
  - e.g. `import { BatchFargateConstruct } from '../../src/constructs/aws-batch-fargate'`

# Catalog

The following constructs are available in the library:

**L3 constructs**

| **Construct** |Description| AWS Services used |
|:-------------|:-------------|:-------------|
| [Batch Fargate Parallel Pipeline](./src/patterns/aws-batch-fargate-parallel-pipeline/README.md) | A fan-out pattern state machine pipeline. | AWS Batch, AWS Fargate, AWS Step Functions, AWS Lambda, Amazon S3, Amazon VPC | 
| [Batch Fargate Series Pipeline](./src/patterns/aws-batch-fargate-series-pipeline/README.md) | A series pattern state machine pipeline. | AWS Batch, AWS Fargate, AWS Step Functions, AWS Lambda, Amazon S3, Amazon VPC | 


**L2 Constructs**

| **Construct** |Description| AWS Services used |
|:-------------|:-------------|:-------------|
| [Batch Fargate](./src/constructs/aws-batch-fargate/index.ts) | AWS Batch Job Queue with a Fargate compute environment | AWS Batch, AWS Fargate | 
| [Batch Fargate Submit Job Step Function Chain](./src/constructs/aws-batch-fargate-submit-job-sfn-chain/index.ts) | A Step Function chain that creates a Submit Job task (Fargate compute) | AWS Batch, AWS Fargate, AWS Step Functions, AWS Lambda | 
| [Lambda Invoke Step Function Chain](./src/constructs/aws-lambda-invoke-sfn-chain/index.ts) | A Step Function chain that creates a Lambda Invoke task | AWS Step Functions, AWS Lambda |
| [State Machine with Log Group from Chain](./src/constructs/aws-state-machine-with-log-group-from-chain/index.ts) | A Step Function State Machine with CloudWatch Log Group created from a chain | AWS Step Functions, Amazon Cloudwatch |
| [VPC for Batch Fargate](./src/constructs/aws-vpc-batch-fargate/index.ts) | A Virtual Private Cloud (VPC) for running a Batch Fargate environment | Amazon Virtual Private Cloud |

# Sample Use Cases

| **Construct** |Description| AWS Services used |
|:-------------|:-------------|:-------------|
| [Mesh Bounding Box Calculation using Batch Fargate Parallel Pipeline](./src/use-cases/blender/blender-boundingbox-meshes-parallel/README.md) | Run a Blender container in parallel to calculate bounding boxes of 3D meshes | AWS Batch, AWS Fargate, AWS Step Functions, AWS Lambda, Amazon S3, Amazon VPC | 
| [Mesh Joining using Batch Fargate Series Pipeline](./src/use-cases/blender/blender-join-meshes-series/README.md) | Run a Blender container in series to join 3D meshes | AWS Batch, AWS Fargate, AWS Step Functions, AWS Lambda, Amazon S3, Amazon VPC |

# Contributors

[![contributors](https://contrib.rocks/image?repo=awslabs/data-transformation-pipeline-cdk-constructs)](https://github.com/awslabs/data-transformation-pipeline-cdk-constructs/graphs/contributors)

# License

This library is licensed under Apache License Version 2.0 and GNU General Public License Version 3. 

# Legal Disclaimer

You should consider doing your own independent assessment before using the content in this library for production purposes. This may include (amongst other things) testing, securing, and optimizing the CDK constructs and other content, provided in this library, based on your specific quality control practices and standards.

***
&copy; Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
