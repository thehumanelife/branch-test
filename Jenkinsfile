pipeline {
  agent {
    label 'master'
  }
  environment {
    SLACK_CHANNEL = 'build-status'
    DOCKER_REPO_URL = sh(returnStdout: true, script: "node get_props.js DOCKER_REPO_URL $BRANCH_NAME").trim()
    DOCKER_REPO = sh(returnStdout: true, script: "node get_props.js DOCKER_REPO $BRANCH_NAME").trim()
    DEPLOY_LOC = sh(returnStdout: true, script: "node get_props.js LABEL $BRANCH_NAME").trim()
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
        // sh 'npm test'
          sh 'echo hai'
      }
    }
    stage('docker build') {
      when {
        anyOf {
          branch 'release';
          branch 'dev';
        }
      }
      steps {
        sh 'sh ./deployment/build_docker.sh'
      }
    }
    stage('docker run') {
       when {
        anyOf {
          branch 'release';
          branch 'dev';
        }
      }
     agent {
        label env.DEPLOY_LOC
      }
      steps {
        sh 'sh ./deployment/deploy_docker.sh'
      }
    }
  }
  post {
    success {
      script {
        if (['release','dev'].contains(env.BRANCH_NAME) ) {
          slackSend(channel: "${SLACK_CHANNEL}", message: "Job ${JOB_NAME} ( build: ${BUILD_NUMBER}) is successfully deployed", color: 'good')
        }
      }
    }
    failure {
      script {
        if (['release','dev'].contains(env.BRANCH_NAME)) {
          slackSend(channel: "${SLACK_CHANNEL}", message: "Job ${JOB_NAME} is failed", color: '#FF0000')
        }
      }
    }
  }
}