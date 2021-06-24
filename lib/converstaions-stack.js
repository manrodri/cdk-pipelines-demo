"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConverstaionsStack = void 0;
const apigw = require("@aws-cdk/aws-apigateway");
const lambda = require("@aws-cdk/aws-lambda");
const core_1 = require("@aws-cdk/core");
const path = require("path");
/**
 * A stack for our simple Lambda-powered web service
 */
class ConverstaionsStack extends core_1.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        // The Lambda function that contains the functionality
        const handler = new lambda.Function(this, 'Lambda', {
            runtime: lambda.Runtime.NODEJS_12_X,
            handler: 'handler.handler',
            code: lambda.Code.fromAsset(path.resolve(__dirname, 'lambda')),
        });
        // An API Gateway to make the Lambda web-accessible
        const gw = new apigw.LambdaRestApi(this, 'Gateway', {
            description: 'Endpoint for a simple Lambda-powered web service',
            handler,
        });
        this.urlOutput = new core_1.CfnOutput(this, 'Url', {
            value: gw.url,
        });
    }
}
exports.ConverstaionsStack = ConverstaionsStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udmVyc3RhaW9ucy1zdGFjay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbnZlcnN0YWlvbnMtc3RhY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsaURBQWlEO0FBQ2pELDhDQUE4QztBQUM5Qyx3Q0FBd0U7QUFDeEUsNkJBQTZCO0FBRTdCOztHQUVHO0FBQ0gsTUFBYSxrQkFBbUIsU0FBUSxZQUFLO0lBTTNDLFlBQVksS0FBZ0IsRUFBRSxFQUFVLEVBQUUsS0FBa0I7UUFDMUQsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFeEIsc0RBQXNEO1FBQ3RELE1BQU0sT0FBTyxHQUFHLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFO1lBQ2xELE9BQU8sRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVc7WUFDbkMsT0FBTyxFQUFFLGlCQUFpQjtZQUMxQixJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDL0QsQ0FBQyxDQUFDO1FBRUgsbURBQW1EO1FBQ25ELE1BQU0sRUFBRSxHQUFHLElBQUksS0FBSyxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsU0FBUyxFQUFFO1lBQ2xELFdBQVcsRUFBRSxrREFBa0Q7WUFDL0QsT0FBTztTQUNSLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxnQkFBUyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUU7WUFDMUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxHQUFHO1NBQ2QsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGO0FBMUJELGdEQTBCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGFwaWd3IGZyb20gJ0Bhd3MtY2RrL2F3cy1hcGlnYXRld2F5JztcbmltcG9ydCAqIGFzIGxhbWJkYSBmcm9tICdAYXdzLWNkay9hd3MtbGFtYmRhJztcbmltcG9ydCB7IENmbk91dHB1dCwgQ29uc3RydWN0LCBTdGFjaywgU3RhY2tQcm9wcyB9IGZyb20gJ0Bhd3MtY2RrL2NvcmUnO1xuaW1wb3J0ICogYXMgcGF0aCBmcm9tICdwYXRoJztcblxuLyoqXG4gKiBBIHN0YWNrIGZvciBvdXIgc2ltcGxlIExhbWJkYS1wb3dlcmVkIHdlYiBzZXJ2aWNlXG4gKi9cbmV4cG9ydCBjbGFzcyBDb252ZXJzdGFpb25zU3RhY2sgZXh0ZW5kcyBTdGFjayB7XG4gIC8qKlxuICAgKiBUaGUgVVJMIG9mIHRoZSBBUEkgR2F0ZXdheSBlbmRwb2ludCwgZm9yIHVzZSBpbiB0aGUgaW50ZWcgdGVzdHNcbiAgICovXG4gIHB1YmxpYyByZWFkb25seSB1cmxPdXRwdXQ6IENmbk91dHB1dDtcblxuICBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wcz86IFN0YWNrUHJvcHMpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHByb3BzKTtcblxuICAgIC8vIFRoZSBMYW1iZGEgZnVuY3Rpb24gdGhhdCBjb250YWlucyB0aGUgZnVuY3Rpb25hbGl0eVxuICAgIGNvbnN0IGhhbmRsZXIgPSBuZXcgbGFtYmRhLkZ1bmN0aW9uKHRoaXMsICdMYW1iZGEnLCB7XG4gICAgICBydW50aW1lOiBsYW1iZGEuUnVudGltZS5OT0RFSlNfMTJfWCxcbiAgICAgIGhhbmRsZXI6ICdoYW5kbGVyLmhhbmRsZXInLFxuICAgICAgY29kZTogbGFtYmRhLkNvZGUuZnJvbUFzc2V0KHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdsYW1iZGEnKSksXG4gICAgfSk7XG5cbiAgICAvLyBBbiBBUEkgR2F0ZXdheSB0byBtYWtlIHRoZSBMYW1iZGEgd2ViLWFjY2Vzc2libGVcbiAgICBjb25zdCBndyA9IG5ldyBhcGlndy5MYW1iZGFSZXN0QXBpKHRoaXMsICdHYXRld2F5Jywge1xuICAgICAgZGVzY3JpcHRpb246ICdFbmRwb2ludCBmb3IgYSBzaW1wbGUgTGFtYmRhLXBvd2VyZWQgd2ViIHNlcnZpY2UnLFxuICAgICAgaGFuZGxlcixcbiAgICB9KTtcblxuICAgIHRoaXMudXJsT3V0cHV0ID0gbmV3IENmbk91dHB1dCh0aGlzLCAnVXJsJywge1xuICAgICAgdmFsdWU6IGd3LnVybCxcbiAgICB9KTtcbiAgfVxufVxuIl19