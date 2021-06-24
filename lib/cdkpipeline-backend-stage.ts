import { CfnOutput, Construct, Stage, StageProps } from '@aws-cdk/core';
import { ConverstaionsStack } from "./converstaions-stack";

/**
 * Deployable unit of web service app
 */
export class CdkpipelinesBackendStage extends Stage {
  public readonly urlOutput: CfnOutput;

  constructor(scope: Construct, id: string, props?: StageProps) {
    super(scope, id, props);

    const service = new ConverstaionsStack(this, 'WebService');

    // Expose CdkpipelinesDemoStack's output one level higher
    this.urlOutput = service.urlOutput;
  }
}