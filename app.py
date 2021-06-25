#!/usr/bin/env python3

from aws_cdk import core

from pipelines_webinar.pipeline_stack import PipelineStack
from pipelines_webinar.pipelines_webinar_stack import PipelinesWebinarStack

PIPELINE_ACCOUNT = '423754860743'
environment = {
    'account': PIPELINE_ACCOUNT,
    'region': 'eu-west-1',
}

app = core.App()

PipelinesWebinarStack(app, "pipelines-webinar", env=environment)
PipelineStack(app, 'PipelineStack', env=environment)

app.synth()
