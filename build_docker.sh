docker build -t ${DOCKER_IMAGE_TAG} .
docker push ${DOCKER_IMAGE_TAG}
docker image rm ${DOCKER_IMAGE_TAG}