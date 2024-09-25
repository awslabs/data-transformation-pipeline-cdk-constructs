/**
 *  Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance
 *  with the License. A copy of the License is located at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  or in the 'license' file accompanying this file. This file is distributed on an 'AS IS' BASIS, WITHOUT WARRANTIES
 *  OR CONDITIONS OF ANY KIND, express or implied. See the License for the specific language governing permissions
 *  and limitations under the License.
 */
import * as cdk from 'aws-cdk-lib';
import { CfnOutput } from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import { LogGroup, RetentionDays } from 'aws-cdk-lib/aws-logs';
import { Construct } from 'constructs';

/**
 * Props for the VpcBatchFargateConstruct construct
 */
export interface VpcBatchFargateConstructProps extends cdk.StackProps {
  /**
   * The subnet configuration for the VPC
   */
  readonly pipelineSubnetConfig?: ec2.SubnetConfiguration;

  /**
   * The VPC Log Group
   */
  readonly vpcLogGroup?: LogGroup;

  /**
   * The CIDR range for the VPC
   */
  readonly cidrRange?: string;

  /**
   * The security group for the VPC
   */
  readonly securityGroup?: ec2.SecurityGroup;

  /**
   * The Gateway VPC Endpoints for the VPC
   */
  readonly gatewayVpcEndpointServices?: ec2.GatewayVpcEndpointAwsService[];

  /**
   * The Interface VPC Endpoints for the VPC
   */
  readonly interfaceVpcEndpointServices?: ec2.InterfaceVpcEndpointAwsService[];
}

const defaultProps: Partial<VpcBatchFargateConstructProps> = {
  stackName: '',
  env: {},
};

/**
 * This construct creates a VPC with a private subnet and a security group.
 */
export class VpcBatchFargateConstruct extends Construct {
  /**
   * The VPC
   */
  readonly vpc: ec2.Vpc;

  /**
   * The VPC subnets
   */
  readonly subnets:ec2.ISubnet[];

  /**
   * The VPC security groups
   */
  readonly securityGroups: ec2.SecurityGroup[];

  constructor(parent: Construct, name: string, props: VpcBatchFargateConstructProps) {
    super(parent, name);

    props = { ...defaultProps, ...props };

    /**
         * Subnets
         */
    const pipelineSubnetConfig: ec2.SubnetConfiguration = props.pipelineSubnetConfig || {
      name: 'pipeline-private-subnet',
      subnetType: ec2.SubnetType.PRIVATE_ISOLATED,
      cidrMask: 22, // 1022
    };


    /**
         * VPC
         */
    const vpcLogsGroup = props.vpcLogGroup || new LogGroup(this, 'CloudWatchVPCLogs', {
      retention: RetentionDays.ONE_WEEK,
      removalPolicy: cdk.RemovalPolicy.RETAIN,
    });

    const cidrRange: string = props.cidrRange || '10.0.0.0/16'; // 4096

    this.vpc = new ec2.Vpc(this, 'Vpc', {
      ipAddresses: ec2.IpAddresses.cidr(cidrRange),
      subnetConfiguration: [
        pipelineSubnetConfig,
      ],
      maxAzs: 1, //One 1AZ as VPC is for a pipeline that can re-generate temporary files
      enableDnsHostnames: true,
      enableDnsSupport: true,
      flowLogs: {
        'vpc-logs': {
          destination: ec2.FlowLogDestination.toCloudWatchLogs(vpcLogsGroup),
          trafficType: ec2.FlowLogTrafficType.ALL,
        },
      },
    });

    this.subnets = this.vpc.selectSubnets({
      subnetGroupName: pipelineSubnetConfig.name,
    }).subnets;

    /**
         * Security Groups
         */
    const pipelineSecurityGroup = props.securityGroup || new ec2.SecurityGroup(this, 'PipelineSecurityGroup', {
      vpc: this.vpc,
      allowAllOutbound: true,
      description: 'Pipeline Security Group',
    });

    if (!props.securityGroup) {

      // add ingress rules to allow Fargate to pull from ECR
      pipelineSecurityGroup.addIngressRule(
        ec2.Peer.ipv4(this.vpc.vpcCidrBlock),
        ec2.Port.tcp(443),
        'Allow HTTPS for ECR Access',
      );
      pipelineSecurityGroup.addIngressRule(
        ec2.Peer.ipv4(this.vpc.vpcCidrBlock),
        ec2.Port.tcp(53),
        'Allow TCP for ECR Access',
      );
      pipelineSecurityGroup.addIngressRule(
        ec2.Peer.ipv4(this.vpc.vpcCidrBlock),
        ec2.Port.udp(53),
        'Allow UDP for ECR Access',
      );
    }

    this.securityGroups = [pipelineSecurityGroup];

    // Create VPC Gateway endpoints
    if (props.gatewayVpcEndpointServices != undefined) {
      for (let service of props.gatewayVpcEndpointServices) {
        this.vpc.addGatewayEndpoint('S3Endpoint', {
          service: service,
        });
      }
    }

    // Create VPC Interface endpoints
    if (props.interfaceVpcEndpointServices != undefined) {
      for (let service of props.interfaceVpcEndpointServices) {
        new ec2.InterfaceVpcEndpoint(this, service.shortName + 'Endpoint', {
          vpc: this.vpc,
          privateDnsEnabled: true,
          service: service,
          subnets: { subnetType: ec2.SubnetType.PRIVATE_ISOLATED },
          securityGroups: [pipelineSecurityGroup],
        });
      }
    }

    /**
         * Outputs
         */
    new CfnOutput(this, 'BatchFargatePipelineVpcId', {
      value: this.vpc.vpcId,
    });
  }
}