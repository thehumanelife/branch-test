docker build -t ${DOCKER_IMAGE_TAG} .
aws ecr get-login-password --region ap-south-1 | docker login --username AWS --password-stdin ${DOCKER_REPO_URL}
docker push ${DOCKER_IMAGE_TAG}
docker image rm ${DOCKER_IMAGE_TAG}