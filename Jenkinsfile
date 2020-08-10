def sayHai(String property,String branch) {
    return sh(  returnStdout: true,
                script: "node get_props.js $propery $branch"
            )}
}
pipeline {
    agent { label 'master' }
    environment{
        cc = sayHai('val',$BRANCH_NAME)
        DOCKER_REPO_URL = sayHai('DOCKER_REPO_URL',$BRANCH_NAME)
        DOCKER_REPO=sayHai('DOCKER_REPO',$BRANCH_NAME)
    }
    stages {
        stage('build') {
            steps {
                sh "echo $DOCKER_REPO"
            }
        }
    }
}