#!/usr/bin/env bash

###
# Pulls the latest git changes and rebuilds the docker images.
#
# This file requires the following environment variables:
# COOKIE_SECRET                     : A random guid to set to check cookies are valid.
# HOST                              : A comma separated list of hosts that will be used for Let's Encrypt, e.g. "loarg.art,www.loarg.art".
# LETSENCRYPT_EMAIL                 : An email to use to register the domains with Let's Encrypt.
# PORT                              : The port to run the webserver on.
###

##
# Main function
##
function main() {
    # Checkout the new code.
    git pull

    # Rebuild the Docker images and run in the background.
    docker-compose up -d --build
}

# And so, it begins...
main
exit 0
