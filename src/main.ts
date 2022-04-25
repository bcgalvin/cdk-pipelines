import { App } from 'aws-cdk-lib';
import { BucketPipeline } from './pipeline';

const devEnv = {
  account: process.env.CDK_DEFAULT_ACCOUNT,
  region: process.env.CDK_DEFAULT_REGION,
};

const app = new App();

new BucketPipeline(app, 'BucketPipeline', {
  env: devEnv,
});

app.synth();
