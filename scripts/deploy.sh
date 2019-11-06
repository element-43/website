#!/usr/bin/env bash

###
# Pulls the latest git changes and rebuilds the docker images.
#
# This file requires the following environment variables:
# COOKIE_SECRET                     : A random guid to set to check cookies are valid.
# PORT                              : The port to run the webserver on.
###

##
# Main function
##
function main() {
    # Checkout the new code.
    git pull

    # Install any new dependencies.
    yarn install

    # Build the app.
    yarn task build

    # Start the app.
    pm2 stop all
    pm2 start processes.config.js --no-daemon
}

# And so, it begins...
main
exit 0
