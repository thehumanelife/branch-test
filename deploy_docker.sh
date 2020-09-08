docker-compose down
aws ecr get-login-password --region ap-south-1 | docker login --username AWS --password-stdin ${DOCKER_REPO_URL}
docker-compose up -d