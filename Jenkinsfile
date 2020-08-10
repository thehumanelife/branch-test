pipeline {
    agent { label 'master' }
    environment{
        cc = sh(  returnStdout: true,
                script: "node get_props.js val $BRANCH_NAME"
            ).trim()
        DOCKER_REPO_URL = sh(  returnStdout: true,
                script: "node get_props.js DOCKER_REPO_URL $BRANCH_NAME"
            ).trim()
        DOCKER_REPO=sh(  returnStdout: true,
                script: "node get_props.js DOCKER_REPO $BRANCH_NAME"
            ).trim()
    }
    stages {
        stage('build') {
            steps {
                sh "echo $DOCKER_REPO"
            }
        }
    }
}