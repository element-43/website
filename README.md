https://github.com/element-43/website/workflows/Deploy%20to%20GitHub%20Pages/badge.svg

# Element 43 Website

The portfolio site for Element 43.

#### Table of contents

* [Development](#development)
    * [1. Setting up the dev environment](#1-setting-up-the-dev-environment)
    * [2. Setting the environment variables](#2-setting-the-environment-variables)
    * [3. Running locally](#3-running-locally)

## Development

### 1. Setting up the dev environment

* Install [Node.js](https://nodejs.org/en/)

1. Install the dependencies:
```shell script
npm install
```

### 2. Setting the environment variables

1. Copy the `.env.example` into a `.env` file using:
```shell script
cp -n .env.example .env
```

2. Edit the values in the newly created `.env` file.

### 3. Running locally

1. Start the web server:
```shell script
npm start
```

2. Navigate to `http://localhost:${PORT}` - replacing the `${PORT}` value with the value from your `.env` file.
