#!/usr/bin/env python3

from aws_cdk import core

from pipelines_webinar.pipeline_stack import PipelineStack
from pipelines_webinar.pipelines_webinar_stack import PipelinesWebinarStack

PIPELINE_ACCOUNT = '458962998840'

app = core.App()
#
# PipelinesWebinarStack(app, 'PipelinesWebinarStack', env={
#   'account': PIPELINE_ACCOUNT,
#   'region': 'us-east-1'
# })

PipelineStack(app, 'PipelineStack', env={
  'account': PIPELINE_ACCOUNT,
  'region': 'us-east-1',
})

app.synth()
