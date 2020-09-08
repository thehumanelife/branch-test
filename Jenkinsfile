pipeline {
  agent {
    label 'master'
  }
  environment {
    cc = sh(returnStdout: true, script: "node get_props.js val $BRANCH_NAME").trim()
    DOCKER_REPO_URL = sh(returnStdout: true, script: "node get_props.js DOCKER_REPO_URL $BRANCH_NAME").trim()
    DOCKER_REPO = sh(returnStdout: true, script: "node get_props.js DOCKER_REPO $BRANCH_NAME").trim()
    DEPLOY_LOC = sh(returnStdout: true, script: "node get_props.js DEPLOY_LOC $BRANCH_NAME").trim()
    DOCKER_IMAGE_TAG = "${DOCKER_REPO}:${BUILD_NUMBER}"
  }
    stages {
    stage('npm install') {
      steps {
        sh 'npm i'
      }
    }
    stage('Unit Test') {
      steps {
        sh 'npm test'
      }
    }
    stage('docker build') {
      when {
        anyOf {
          branch 'master';
          branch 'test';
        }
      }
      steps {
        sh 'sh build_docker.sh'
      }
    }
    stage('docker run') {
      when {
        anyOf {
          branch 'master';
          branch 'test';
        }
      }
      agent {
        label env.DEPLOY_LOC
      }
      steps {
        sh 'deploy_docker.sh'
      }
    }
  }
}