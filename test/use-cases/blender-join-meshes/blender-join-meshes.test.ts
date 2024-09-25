import * as cdk from 'aws-cdk-lib';
import { Template, Match } from 'aws-cdk-lib/assertions';
import { BlenderJoinMeshesStack } from '../../../src/use-cases/blender-join-meshes';

describe('Blender join meshes stack test', () => {
  const app = new cdk.App();
  const stack = new BlenderJoinMeshesStack(app, 'BlenderJoinMeshesStack', {
    env: {
      account: '123456789012',
      region: 'us-east-1',
    },
  });
  const template = Template.fromStack(stack);

});