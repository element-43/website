#!/usr/bin/env bash

##
# Logs in to the ECR and pushes the new webserver and app docker images.
#
# @param string $1  the AWS region.
# @param string $2  the name:tag of the webserver docker image.
# @param string $3  the name:tag of the app docker image.
##
function push_docker_images() {
	eval $(aws ecr get-login --region $1) # Runs `docker login` with the AWS credentials.
	docker push $2 # Push the webserver image.
	docker push $3 # Push the app image.
}
