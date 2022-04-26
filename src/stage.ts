import { Stage, StageProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { BucketStack } from './stack';

export class BucketTestStage extends Stage {
  constructor(scope: Construct, id: string, props?: StageProps) {
    super(scope, id, props);

    new BucketStack(this, 'BucketStack');
  }
}
