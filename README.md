# Element 43 Website

[![CircleCI](https://circleci.com/gh/kieranroneill/element-43-website/tree/master.svg?style=shield&circle-token=aeaee34d69c54a1eb5d30ad5ccc9903e448bcbef)](https://circleci.com/gh/kieranroneill/element-43-website/tree/master)  [![Codecov private](https://img.shields.io/codecov/c/token/YwRjUTJRVb/github/kieranroneill/element-43-website/master.svg?style=flat-square)](https://codecov.io/gh/kieranroneill/element-43-website)

# Development

## Local

* Install [Node.js v6.10.2+](https://nodejs.org/en/)
* Install [MongoDB v2.4+](http://www.mongodb.org/downloads)
* Install [Yarn](https://yarnpkg.com/lang/en/docs/install)
* Install dependencies `yarn install`
* Start the application `yarn start`
* Navigate to [http://localhost:1337](http://localhost:1337)
    * To access the admin UI navigate to [http://localhost:1337/keystone](http://localhost:1337/keystone)

## Docker

* Build and run docker: `docker-compose up -d`
* Build and run docker with watcher: `docker-compose up`
* Build and run docker with another configuration: `docker-compose -f docker-compose.staging.yml up -d`
* Update only Nginx? `docker-compose build nginx && docker-compose up nginx -d`

# Testing

# Deployment
    
## CircleCI

* Save the Codecov API key as the CircleCI environment variable: `CODECOV_KEY`
    
## AWS ECS

1. Go to the IAM service and create a User with the permissions `AmazonEC2ContainerServiceFullAccess` & `AmazonEC2ContainerRegistryFullAccess`.
    * Save the access key ID as the CircleCI environment variable: `AWS_ACCESS_KEY_ID`.
    * Save the secret access key as the CircleCI environment variable: `AWS_SECRET_ACCESS_KEY`.
2. Go to the IAM service and create a Role as type `AmazonEC2ContainerServiceforEC2Role`.
3. Go to the ECS service and create a new cluster with 1 EC2 instance and set the IAM role to the role previously created.
    * Save the cluster name as the CircleCI environment variable: `AWS_ECS_CLUSTER_NAME`.
2. Create 2 ECR repositories:
    * `webserver` and save the generated ID prefix as the CircleCI environment variable: `AWS_ECR_WEBSERVER_ID`.
    * `app` and save the generated ID prefix as the CircleCI environment variable: `AWS_ECR_APP_ID`.
