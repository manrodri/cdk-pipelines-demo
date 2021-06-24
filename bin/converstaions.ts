#!/usr/bin/env node
import { App } from '@aws-cdk/core';
import { CdkpipelinesBackendPipelineStack } from "../lib/cdkpipeline-backend-stack";

const app = new App();

new CdkpipelinesBackendPipelineStack(app, 'CdkpipelinesDemoPipelineStack', {
  env: { account: '423754860743', region: 'eu-west-1' },
});

app.synth();