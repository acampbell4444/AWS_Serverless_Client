export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-2",
    BUCKET: "notes-app-api-prod-serverlessdeploymentbucket-1bo94kfstrrs4"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://e5ydlfnyt3.execute-api.us-east-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_riM2paFE7",
    APP_CLIENT_ID: "6f4739rsocus5t995dk9hckn80",
    IDENTITY_POOL_ID: "us-east-2:c8d62139-067e-45f9-a0d8-cfc2a427bc1d"
  }
};
