import { SecretValue, Stack, StackProps } from 'aws-cdk-lib';
import { CodePipeline, CodePipelineSource, ShellStep } from 'aws-cdk-lib/pipelines';
import { Construct } from 'constructs';
import { BucketTestStage } from './stage';

export class BucketPipeline extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const pipeline = new CodePipeline(this, 'Pipeline', {
      synth: new ShellStep('Synth', {
        input: CodePipelineSource.gitHub('bcgalvin/cdk-pipelines', 'main', {
          authentication: SecretValue.secretsManager('github-token', {
            jsonField: 'access-token',
          }),
        }),
        commands: ['yarn', 'yarn build', 'npx cdk synth'],
      }),
    });

    pipeline.addStage(new BucketTestStage(this, 'test-stage', {}));
  }
}