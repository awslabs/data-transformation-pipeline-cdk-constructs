#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { BlenderBoundingBoxMeshesStack } from '../../src/use-cases/blender/blender-boundingbox-meshes-parallel'
import { BlenderJoinMeshesStack } from '../../src/use-cases/blender/blender-join-meshes-series'

import { AwsSolutionsChecks } from 'cdk-nag';

const env = {
  region: process.env.CDK_DEFAULT_REGION,
  account: process.env.CDK_DEFAULT_ACCOUNT
}

enum DeployStack {
  BlenderBoundingBoxMeshesStack,
  BlenderJoinMeshesStack
}

// Set the stack type to deploy here
var deployStack = DeployStack.BlenderJoinMeshesStack;

const app = new cdk.App();

cdk.Tags.of(app).add("app", "data-transformation-pipeline-cdk-constructs-samples");
cdk.Aspects.of(app).add(new AwsSolutionsChecks({ verbose: true }));

switch (+deployStack) {
  case DeployStack.BlenderBoundingBoxMeshesStack: 
    new BlenderBoundingBoxMeshesStack(app, 'BlenderBoundingBoxMeshesStack', {
      env: env
    });
    break;
  case DeployStack.BlenderJoinMeshesStack: 
    new BlenderJoinMeshesStack(app, 'BlenderJoinMeshesStack', {
      env: env
    });
    break;
  default: 
    break;
}
