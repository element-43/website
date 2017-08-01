#!/usr/bin/env bash

###
# Updates a pre-configured Amazon EC2 Container Service (ECS) cluster.
#
# That file must set the following Environment variables
# APP_PORT               : The port to use for the Node.js app.
# AWS_ACCESS_KEY_ID      : The access key ID given when you created a User on IAM.
# AWS_ECR_APP_REPO       : The URI of the app ECR repository. Example: `XXXXXXX.dkr.ecr.eu-west-2.amazonaws.com/app`
# AWS_ECS_CLUSTER_NAME   : The name of the cluster.
# AWS_REGION             : The AWS region.
# AWS_SECRET_ACCESS_KEY  : The secret access key given when you created a User on IAM.
#
# NOTE: ECS Deploys strategy requires that the cluster is able to run one task during an update to a newer version of the task.
# In order for ECS to successfully deploy you will need an extra EC2 instance running.
#
# This script was based on: https://github.com/circleci/circle-ecs/blob/master/deploy.sh
###

# Bash-friendly output for jq
JQ="jq --raw-output --exit-status"

SCRIPT_DIR=$(dirname "${BASH_SOURCE[0]}")
FAMILY_NAME="$AWS_ECS_CLUSTER_NAME-tasks"
SERVICE_NAME="$AWS_ECS_CLUSTER_NAME-service"
APP_IMAGE=${AWS_ECR_APP_REPO}:latest

# Import the utility scripts.
source "$SCRIPT_DIR/_configure_aws_cli.sh"
source "$SCRIPT_DIR/_aws_ecr.sh"
source "$SCRIPT_DIR/_aws_ecs.sh"

##
# Main function
##
function main() {
    local container_definitions_template
    local volumes_template

    # Get the task definition configuration.
    container_definitions_template=$(cat ./bin/task-definition/container-definitions.json | ${JQ} .)
    volumes_template=$(cat ./bin/task-definition/volumes.json | ${JQ} .)

    CONTAINER_DEFINITIONS=$(printf "$container_definitions_template" ${APP_IMAGE} ${APP_PORT})
    VOLUMES=$(printf "$volumes_template")

    echo "$(date "+%Y-%m-%d %H:%M:%S") Configuring AWS CLI."
    configure_aws_cli ${AWS_ACCESS_KEY_ID} ${AWS_SECRET_ACCESS_KEY} ${AWS_REGION}

    echo "$(date "+%Y-%m-%d %H:%M:%S") Pushing docker images."
    push_docker_images ${AWS_REGION} ${APP_IMAGE}

    echo "$(date "+%Y-%m-%d %H:%M:%S") Updating task definitions with new images."
    update_task_definition ${FAMILY_NAME} "$CONTAINER_DEFINITIONS" "$VOLUMES"

    echo "$(date "+%Y-%m-%d %H:%M:%S") Updating service with new task definitions."
    update_ecs_service "$CURRENT_TASK_REVISION" ${AWS_ECS_CLUSTER_NAME} ${SERVICE_NAME}

    echo "$(date "+%Y-%m-%d %H:%M:%S") Waiting for stale task to be replaced by their new revision"
    wait_ecs_no_stale_task "$CURRENT_TASK_REVISION" ${AWS_ECS_CLUSTER_NAME}

    echo "$(date "+%Y-%m-%d %H:%M:%S") Deployed successfully."
}

# And so, it begins...
main
exit 0
