[![CircleCI](https://circleci.com/gh/kieranroneill/element-43-website/tree/master.svg?style=shield&circle-token=0021905716662964e22a628a542aa1067666b16b)](https://circleci.com/gh/kieranroneill/element-43-website/tree/master)  [![Codecov private](https://img.shields.io/codecov/c/token/VTbUoel0V2/github/kieranroneill/element-43-website/master.svg?style=flat-square)](https://codecov.io/gh/kieranroneill/element-43-website)

# Element 43 Website

The frontend for the Element 43 website.

## Development

* Install [Node.js v6.11.0+](https://nodejs.org/en/)
* Install [Yarn](https://yarnpkg.com/lang/en/docs/install)
* Install dependencies `yarn install`
* Start the application `yarn start`
* Navigate to [http://localhost:1337](http://localhost:1337)

The development environment is setup using `webpack-dev-server` with hot-reloading implemented, therefore, changes in the code should be auto-refreshed on the browser.

## Testing

Testing is composed of:
* [Mocha](https://mochajs.org/) as the test runner.
* [Chai](http://chaijs.com/) for assertions.
* [SinonJS](http://sinonjs.org/) for spys, stubs and mocks.
* [Enzyme](https://github.com/airbnb/enzyme) for testing React components.
* [Istanbul](https://github.com/gotwarlost/istanbul) for code coverage reporting.
``
Testing is triggered by a single npm script: `yarn test`.

Once the tests have completed, coverage reports can be found in the `coverage/` directory and mocha will also convert the test results into a JUnit style `test-results.xml` at the root level.

## Continuous Integration/Deployment

A CI build is triggered upon every branch push, and will perform linting and run tests.

The deployment script is triggered whenever a the `master` branch is pushed to.

### 1. AWS ECS

1. Go to the IAM service and create a User:
    * Name it `circleci`.
    * Give it the permissions `AmazonEC2ContainerServiceFullAccess` & `AmazonEC2ContainerRegistryFullAccess`.
2. Go to the IAM service and create a Role:
    * Name it `ecs-instance-role`.
    * Give it the type `AmazonEC2ContainerServiceforEC2Role`.
3. Go to the ECS service and create a new cluster with 1 EC2 instance and set the IAM role to the role previously created.
2. Create an ECR repository:
    * `app` this is where the Node.JS app image will be uploaded.

### 2. CircleCI

To setup CircleCI, the following environment variables are needed for deployment:

| Name | Description |
| :--- | :--- |
| `APP_PORT` | The port to use for the Node.js app |
| `AWS_ACCESS_KEY_ID` | The access key ID for the AWS IAM user |
| `AWS_ECR_APP_REPO` | The name of the app ECR repository. Example: `XXXXXXX.dkr.ecr.eu-west-2.amazonaws.com/app` |
| `AWS_ECS_CLUSTER_NAME` | The name of the cluster |
| `AWS_REGION` | The region of the EC2 instance |
| `AWS_SECRET_ACCESS_KEY` | The secret access key for the AWS IAM user |
| `CODECOV_KEY` | Codecov API key, used to upload coverage reports |
| `CONTENTFUL_SPACE_ID` | The ID of the Contentful space  |
| `CONTENTFUL_ACCESS_TOKEN` | A Contentful access token |
