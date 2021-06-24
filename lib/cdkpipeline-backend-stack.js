"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CdkpipelinesBackendPipelineStack = void 0;
const codepipeline = require("@aws-cdk/aws-codepipeline");
const codepipeline_actions = require("@aws-cdk/aws-codepipeline-actions");
const core_1 = require("@aws-cdk/core");
const pipelines_1 = require("@aws-cdk/pipelines");
/**
 * The stack that defines the application pipeline
 */
class CdkpipelinesBackendPipelineStack extends core_1.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        const sourceArtifact = new codepipeline.Artifact();
        const cloudAssemblyArtifact = new codepipeline.Artifact();
        const pipeline = new pipelines_1.CdkPipeline(this, 'Pipeline', {
            // The pipeline name
            pipelineName: 'backendPipeline',
            cloudAssemblyArtifact,
            // Where the source can be found
            sourceAction: new codepipeline_actions.GitHubSourceAction({
                actionName: 'GitHub',
                output: sourceArtifact,
                oauthToken: core_1.SecretValue.secretsManager('remoteRepositorieKeys', {
                    jsonField: "GitHub_key"
                }),
                owner: 'manrodri',
                repo: 'cdk-pipelines-demo',
                branch: "tutorial_ts"
            }),
            // How it will be built and synthesized
            synthAction: pipelines_1.SimpleSynthAction.standardNpmSynth({
                sourceArtifact,
                cloudAssemblyArtifact,
                // We need a build step to compile the TypeScript Lambda
                buildCommand: 'npm run build'
            }),
        });
        // This is where we add the application stages
        // ...
    }
}
exports.CdkpipelinesBackendPipelineStack = CdkpipelinesBackendPipelineStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrcGlwZWxpbmUtYmFja2VuZC1zdGFjay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNka3BpcGVsaW5lLWJhY2tlbmQtc3RhY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMERBQTBEO0FBQzFELDBFQUEwRTtBQUMxRSx3Q0FBd0U7QUFDeEUsa0RBQWtFO0FBRWxFOztHQUVHO0FBQ0gsTUFBYSxnQ0FBaUMsU0FBUSxZQUFLO0lBQ3ZELFlBQVksS0FBZ0IsRUFBRSxFQUFVLEVBQUUsS0FBa0I7UUFDeEQsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFeEIsTUFBTSxjQUFjLEdBQUcsSUFBSSxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDbkQsTUFBTSxxQkFBcUIsR0FBRyxJQUFJLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUUxRCxNQUFNLFFBQVEsR0FBRyxJQUFJLHVCQUFXLENBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRTtZQUMvQyxvQkFBb0I7WUFDcEIsWUFBWSxFQUFFLGlCQUFpQjtZQUMvQixxQkFBcUI7WUFFckIsZ0NBQWdDO1lBQ2hDLFlBQVksRUFBRSxJQUFJLG9CQUFvQixDQUFDLGtCQUFrQixDQUFDO2dCQUN0RCxVQUFVLEVBQUUsUUFBUTtnQkFDcEIsTUFBTSxFQUFFLGNBQWM7Z0JBQ3RCLFVBQVUsRUFBRSxrQkFBVyxDQUFDLGNBQWMsQ0FBQyx1QkFBdUIsRUFBRTtvQkFDNUQsU0FBUyxFQUFFLFlBQVk7aUJBQzFCLENBQUM7Z0JBQ0YsS0FBSyxFQUFFLFVBQVU7Z0JBQ2pCLElBQUksRUFBRSxvQkFBb0I7Z0JBQzFCLE1BQU0sRUFBRSxhQUFhO2FBQ3hCLENBQUM7WUFFRix1Q0FBdUM7WUFDdkMsV0FBVyxFQUFFLDZCQUFpQixDQUFDLGdCQUFnQixDQUFDO2dCQUM1QyxjQUFjO2dCQUNkLHFCQUFxQjtnQkFFckIsd0RBQXdEO2dCQUN4RCxZQUFZLEVBQUUsZUFBZTthQUNoQyxDQUFDO1NBQ0wsQ0FBQyxDQUFDO1FBRUgsOENBQThDO1FBQzlDLE1BQU07SUFDVixDQUFDO0NBQ0o7QUFyQ0QsNEVBcUNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgY29kZXBpcGVsaW5lIGZyb20gJ0Bhd3MtY2RrL2F3cy1jb2RlcGlwZWxpbmUnO1xuaW1wb3J0ICogYXMgY29kZXBpcGVsaW5lX2FjdGlvbnMgZnJvbSAnQGF3cy1jZGsvYXdzLWNvZGVwaXBlbGluZS1hY3Rpb25zJztcbmltcG9ydCB7Q29uc3RydWN0LCBTZWNyZXRWYWx1ZSwgU3RhY2ssIFN0YWNrUHJvcHN9IGZyb20gJ0Bhd3MtY2RrL2NvcmUnO1xuaW1wb3J0IHtDZGtQaXBlbGluZSwgU2ltcGxlU3ludGhBY3Rpb259IGZyb20gXCJAYXdzLWNkay9waXBlbGluZXNcIjtcblxuLyoqXG4gKiBUaGUgc3RhY2sgdGhhdCBkZWZpbmVzIHRoZSBhcHBsaWNhdGlvbiBwaXBlbGluZVxuICovXG5leHBvcnQgY2xhc3MgQ2RrcGlwZWxpbmVzQmFja2VuZFBpcGVsaW5lU3RhY2sgZXh0ZW5kcyBTdGFjayB7XG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM/OiBTdGFja1Byb3BzKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgcHJvcHMpO1xuXG4gICAgICAgIGNvbnN0IHNvdXJjZUFydGlmYWN0ID0gbmV3IGNvZGVwaXBlbGluZS5BcnRpZmFjdCgpO1xuICAgICAgICBjb25zdCBjbG91ZEFzc2VtYmx5QXJ0aWZhY3QgPSBuZXcgY29kZXBpcGVsaW5lLkFydGlmYWN0KCk7XG5cbiAgICAgICAgY29uc3QgcGlwZWxpbmUgPSBuZXcgQ2RrUGlwZWxpbmUodGhpcywgJ1BpcGVsaW5lJywge1xuICAgICAgICAgICAgLy8gVGhlIHBpcGVsaW5lIG5hbWVcbiAgICAgICAgICAgIHBpcGVsaW5lTmFtZTogJ2JhY2tlbmRQaXBlbGluZScsXG4gICAgICAgICAgICBjbG91ZEFzc2VtYmx5QXJ0aWZhY3QsXG5cbiAgICAgICAgICAgIC8vIFdoZXJlIHRoZSBzb3VyY2UgY2FuIGJlIGZvdW5kXG4gICAgICAgICAgICBzb3VyY2VBY3Rpb246IG5ldyBjb2RlcGlwZWxpbmVfYWN0aW9ucy5HaXRIdWJTb3VyY2VBY3Rpb24oe1xuICAgICAgICAgICAgICAgIGFjdGlvbk5hbWU6ICdHaXRIdWInLFxuICAgICAgICAgICAgICAgIG91dHB1dDogc291cmNlQXJ0aWZhY3QsXG4gICAgICAgICAgICAgICAgb2F1dGhUb2tlbjogU2VjcmV0VmFsdWUuc2VjcmV0c01hbmFnZXIoJ3JlbW90ZVJlcG9zaXRvcmllS2V5cycsIHtcbiAgICAgICAgICAgICAgICAgICAganNvbkZpZWxkOiBcIkdpdEh1Yl9rZXlcIlxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIG93bmVyOiAnbWFucm9kcmknLFxuICAgICAgICAgICAgICAgIHJlcG86ICdjZGstcGlwZWxpbmVzLWRlbW8nLFxuICAgICAgICAgICAgICAgIGJyYW5jaDogXCJ0dXRvcmlhbF90c1wiXG4gICAgICAgICAgICB9KSxcblxuICAgICAgICAgICAgLy8gSG93IGl0IHdpbGwgYmUgYnVpbHQgYW5kIHN5bnRoZXNpemVkXG4gICAgICAgICAgICBzeW50aEFjdGlvbjogU2ltcGxlU3ludGhBY3Rpb24uc3RhbmRhcmROcG1TeW50aCh7XG4gICAgICAgICAgICAgICAgc291cmNlQXJ0aWZhY3QsXG4gICAgICAgICAgICAgICAgY2xvdWRBc3NlbWJseUFydGlmYWN0LFxuXG4gICAgICAgICAgICAgICAgLy8gV2UgbmVlZCBhIGJ1aWxkIHN0ZXAgdG8gY29tcGlsZSB0aGUgVHlwZVNjcmlwdCBMYW1iZGFcbiAgICAgICAgICAgICAgICBidWlsZENvbW1hbmQ6ICducG0gcnVuIGJ1aWxkJ1xuICAgICAgICAgICAgfSksXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFRoaXMgaXMgd2hlcmUgd2UgYWRkIHRoZSBhcHBsaWNhdGlvbiBzdGFnZXNcbiAgICAgICAgLy8gLi4uXG4gICAgfVxufSJdfQ==