import { awscdk } from 'projen';

// Constants
const GITHUB_USER = 'awslabs';
const PUBLICATION_NAMESPACE = 'awslabs';
const PROJECT_NAME = 'data-transformation-pipeline-cdk-constructs';
const CDK_VERSION: string = '2.184.0';

const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Amazon Web Services - Prototyping and Cloud Engineering',
  authorAddress: 'https://aws.amazon.com',
  authorOrganization: true,
  cdkVersion: CDK_VERSION,
  constructsVersion: '10.3.0',
  defaultReleaseBranch: 'main',
  description: 'AWS Data Transformation Pipeline Construct Library',
  jsiiVersion: '~5.5.15',
  name: '@' + PUBLICATION_NAMESPACE + '/' + PROJECT_NAME,
  projenrcTs: true,
  projenVersion: '~0.84.5',
  repositoryUrl: 'https://github.com/' + GITHUB_USER + '/' + PROJECT_NAME,
  gitignore: [
    '*.DS_STORE',
    '!.node-version',
    '*.pyc',
    '__pycache__/',
    '!.ort.yml',
    '.idea',
    '.vscode',
  ],
  deps: [
    'cdk-nag',
  ],
  peerDeps: [
    `@aws-cdk/aws-lambda-python-alpha@${CDK_VERSION}-alpha.0`,
  ],
  devDeps: [
    'aws-cdk-lib',
    'constructs',
  ],
  // Custom license consisting of Apache 2.0 & GPLv3
  licensed: false,
  release: false,
  depsUpgrade: false,
  sampleCode: false,
});

project.synth();