import { App } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { PipelineStack } from '../src/pipeline';

function getTestAssets(app: App) {
  const stack = new PipelineStack(app, 'test-stack');
  const assert = Template.fromStack(stack);

  return {
    assert,
    stack,
    app,
  };
}

test('Snapshot', () => {
  const app = new App();
  const { assert } = getTestAssets(app);

  expect(assert.toJSON()).toMatchSnapshot();
});

describe('S3 Bucket Construct', () => {
  const app = new App();

  const { assert } = getTestAssets(app);

  test('construct should have a s3 bucket', () => {
    assert.resourceCountIs('AWS::S3::Bucket', 1);
  });
});
