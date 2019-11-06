# Element 43 Website

The frontend for the Element 43 website.

#### Table of contents

* [Getting started](#getting-started)
    * [1. Prerequisites](#1-prerequisites)
    * [2. Running the server](#2-running-the-server)
* [Development](#development)
    * [1. Setting up the dev environment](#1-setting-up-the-dev-environment)
    * [2. Running locally](#2-running-locally)
    * [3. Testing](#3-testing)

## Getting started

These are the instructions that tell you how to get up and running.

### 1. Prerequisites

* Install [Docker](https://docs.docker.com/install/)
* Install [Docker Compose](https://docs.docker.com/compose/install/)

### 2. Running the server

1. Build the image and start the container:

```shell script
docker-compose up
```

2. Once the container is up it will be running on: [http://localhost:1337](http://localhost:1337)

## Development

### 1. Setting up the dev environment

* Install [Node.js v10.0.0+](https://nodejs.org/en/)
* Install [MongoDB](https://www.mongodb.com/download-center/community)
* Install [Yarn](https://yarnpkg.com/lang/en/docs/install)

### 2. Running locally

1. Install the `node_modules`:
```shell script
yarn task install
```

2. Start the server:
```shell script
yarn task start
```

### 3. Testing

* You can run the tests using:
```shell script
yarn task test
```
