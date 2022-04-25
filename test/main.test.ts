import { App } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { BucketStack } from '../src/stack';

test('Snapshot', () => {
  const app = new App();
  const stack = new BucketStack(app, 'test');

  const template = Template.fromStack(stack);
  expect(template.toJSON()).toMatchSnapshot();
});
