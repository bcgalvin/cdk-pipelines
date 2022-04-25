import { Stack, StackProps } from 'aws-cdk-lib';
import { Bucket } from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';

export class BucketStack extends Stack {
  public readonly bucket: Bucket;

  constructor(scope: Construct, id: string, props: StackProps = {}) {
    super(scope, id, props);

    this.bucket = new Bucket(this, 'bucket', {});
  }
}
