#!/usr/bin/env bash

##
# Attempts to first update the service, but if no service exists, it attempts to create a new service.
#
# @param string $1  the ARN of the task definition (full ARN).
# @param string $2  the name of the AWS cluster.
# @param string $3  the name of the ECS service (inside the cluster).
# @reads string $JQ to handle json responses.
##
function update_ecs_service() {
    # First try to update the service.
    if [[ $(aws ecs update-service --cluster $2 --service $3 --desired-count 1 --task-definition $1 | ${JQ} '.service.taskDefinition') != $1 ]]; then
        echo -e "\n$(date "+%Y-%m-%d %H:%M:%S") Error updating service, attempting to create service..."

        # Attempt to create the service.
        if [[ $(aws ecs create-service --cluster $2 --service-name $3 --desired-count 1 --task-definition $1 --deployment-configuration maximumPercent=100,minimumHealthyPercent=0 | ${JQ} '.service.taskDefinition') != $1 ]]; then
            echo -e "\n$(date "+%Y-%m-%d %H:%M:%S") Error creating service."
            exit 1
        fi
    fi
}

##
# Push/Update the task definition to ECS and set the newly created task revision full arn ($CURRENT_TASK_REVISION)
#
# @param string $1                      the family, i.e. the task definition name.
# @param string $2                      the container definitions (JSON).
# @param string $2                      the volumes (JSON).
# @reads string $JQ                     to handle json responses.
# @sets string $CURRENT_TASK_REVISION   the ARN of the task definition (full ARN).
##
function update_task_definition() {
    if CURRENT_TASK_REVISION=$(aws ecs register-task-definition --family $1 --container-definitions "$2" --volumes "$3" | ${JQ} '.taskDefinition.taskDefinitionArn'); then
        echo -e "\n$(date "+%Y-%m-%d %H:%M:%S") Successfully registered task definition :\n\tfamily: $2\n\tRevision : $CURRENT_TASK_REVISION\n"
        return 0
    fi

    echo -e "\n$(date "+%Y-%m-%d %H:%M:%S") Failed to register task definition :\n\tfamily: $2"
    exit 1
}

##
# Wait for all stale task to disappear.
#
# Stale task = Task of not the current version/revision
#
# @param string $1  the current task revision
# @param string $2  the name of the AWS cluster.
# @reads string $JQ to handle json responses.
##
function wait_ecs_no_stale_task() {
    # Wait for older revisions to disappear.
    for attempt in {1..30}; do
        if stale=$(aws ecs describe-services --cluster $2 --services $2 | ${JQ} ".services[0].deployments | .[] | select(.taskDefinition != \"$1\") | .taskDefinition"); then
            echo "Waiting for stale deployments:"
            echo "$stale"
            sleep 5
        else
            return 0
        fi
    done

    echo "\n\nService update took too long.\n\n"
    exit 4
}