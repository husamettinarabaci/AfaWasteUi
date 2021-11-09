module.exports = {
    // The region where your identity pool exists (e.g. us-east-1).
    region: 'us-east-1',
    // The identity pool ID in your Amazon Cognito identity pool.
    identityPoolId: 'us-east-1:c8f9f8f9-f9f9-f9f9-f9f9-f9f9f9f9f9f9',
    // The AWS Lambda function to invoke for custom workflows.
    lambda: {
        // The region where your Lambda function is located (e.g. us-east-1).
        region: 'us-east-1',
        // The name of your Lambda function.
        functionName: '',
        // The ARN of your Lambda function.
        functionArn: ''
    },
    // The Amazon Cognito user pool ID.
    userPoolId: 'us-east-1_c8f9f8f9-f9f9-f9f9-f9f9-f9f9f9f9f9f9',
    // The client ID of your Amazon Cognito user pool.
    userPoolWebClientId: '',
    // The AWS Lambda function to invoke for custom workflows.
    customWorkflows: {
        // The region where your Lambda function is located (e.g. us-east-1).
        region: 'us-east-1',
        // The name of your Lambda function.
        functionName: '',
        // The ARN of your Lambda function.
        functionArn: ''
    },
    // The AWS Lambda function to invoke for custom workflows.
    // This function is used to send a verification code to a user.
    customMessage: {}
}