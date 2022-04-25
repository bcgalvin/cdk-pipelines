const { awscdk } = require('projen');

const cdkVersion = '2.20.1';
const commonIgnore = ['.idea', '.Rproj', '.vscode', 'cdk.context.json', '.DS_Store', '.envrc'];
const deps = [
  `aws-cdk-lib@${cdkVersion}`,
  'constructs@10.0.5',
  'source-map-support',
  'aws-lambda',
  '@types/aws-lambda',
];

const project = new awscdk.AwsCdkTypeScriptApp({
  cdkVersion: cdkVersion,
  name: 'cdk-pipelines',
  description: 'A CDK app demonstrating cdk pipelines',
  // Dependencies
  deps: deps,
  devDeps: ['eslint-config-prettier', 'eslint-plugin-prettier', 'prettier'],
  // Testing & Linting
  codeCov: true,
  eslint: true,
  eslintOptions: {
    prettier: true,
  },
  prettier: true,
  prettierOptions: {
    settings: {
      printWidth: 120,
      trailingComma: 'all',
      arrowParens: 'always',
      singleQuote: true,
    },
  },
  // Ignore files
  gitignore: commonIgnore,
  npmignore: commonIgnore,
  // Release
  defaultReleaseBranch: 'main',
  release: false,
  releaseToNpm: false,
});

project.addTask('format', {
  description: 'Format with prettier',
  exec: 'prettier --write src/{**/,}*.ts test/{**/,}*.ts .projenrc.js README.md',
});

project.synth();
