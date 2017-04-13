# Ubuntu LTS (16.04)
FROM ubuntu:16.04

MAINTAINER Kieran O\'Neill

# Use bash shell
RUN rm /bin/sh && ln -s /bin/bash /bin/sh

# Update and install dependencies
RUN apt-get update --fix-missing
RUN apt-get install -y curl
RUN apt-get install -y build-essential libssl-dev

ENV NVM_DIR /usr/local/nvm
ENV NODE_VERSION 6.10.2
# Environment variables used in app.
ENV COOKIE_SECRET $COOKIE_SECRET
ENV MONGO_URI mongodb://db:27017/element-43

# Install node & npm with nvm
RUN curl https://raw.githubusercontent.com/creationix/nvm/v0.31.2/install.sh | bash \
    && source $NVM_DIR/nvm.sh \
    && nvm install $NODE_VERSION \
    && nvm alias default $NODE_VERSION \
    && nvm use default

# Set up our PATH correctly, so we don't have to long-reference npm, node, e.t.c.
ENV NODE_PATH $NVM_DIR/versions/node/v$NODE_VERSION/lib/node_modules
ENV PATH $NVM_DIR/versions/node/v$NODE_VERSION/bin:$PATH

# Create app directory
RUN mkdir -p /usr/app
WORKDIR /usr/app
ADD . /usr/app

# Install PM2 globally via npm.
RUN npm install -g pm2

# Install the dependencies and build the app.
RUN npm install --production
RUN npm run build

# Open up the l33t port
EXPOSE 1337

CMD ["pm2", "start", "processes.json", "--no-daemon"]
