# Ubuntu LTS (16.10)
FROM ubuntu:16.10

MAINTAINER Kieran O\'Neill

# Declare the build arguments passed in.
ARG CONTENTFUL_ACCESS_TOKEN
ARG CONTENTFUL_SPACE_ID
ARG NODE_ENV
ARG PORT

# Use bash shell
RUN rm /bin/sh && ln -s /bin/bash /bin/sh

# Update and install dependencies
RUN apt-get update --fix-missing
RUN apt-get install -y curl
RUN apt-get install -qq -y bzip2

ENV CONTENTFUL_ACCESS_TOKEN $CONTENTFUL_ACCESS_TOKEN
ENV CONTENTFUL_SPACE_ID $CONTENTFUL_SPACE_ID
ENV NODE_VERSION 6.11.0
ENV NODE_ENV $NODE_ENV
ENV NVM_DIR /usr/local/nvm
ENV PORT $PORT

# Install node & npm with nvm
RUN curl https://raw.githubusercontent.com/creationix/nvm/v0.31.2/install.sh | bash \
    && source $NVM_DIR/nvm.sh \
    && nvm install $NODE_VERSION \
    && nvm alias default $NODE_VERSION \
    && nvm use default

# Set up our PATH correctly, so we don't have to long-reference npm, node, e.t.c.
ENV NODE_PATH $NVM_DIR/versions/node/v$NODE_VERSION/lib/node_modules
ENV PATH $NVM_DIR/versions/node/v$NODE_VERSION/bin:$PATH

# Install global modules.
RUN npm install pm2 yarn@0.22.0 -g

# Install dependencies using yarn.
ADD package.json /tmp/package.json
RUN cd /tmp && yarn install --production=false

# Create directories and copy node_modules.
RUN mkdir -p /usr/app \
    && cd /usr/app \
    && ln -s /tmp/node_modules

# Set working directory.
WORKDIR /usr/app

# Copy source files.
ADD . /usr/app

# Build app.
RUN yarn run build

# Open up the port
EXPOSE $PORT

# Fly my pretties!!
CMD ["sh", "-c", "pm2 start processes.config.js --no-daemon"]
