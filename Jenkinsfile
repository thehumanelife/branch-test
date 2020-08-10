def sayHai(String property) {
    return """${sh(
                returnStdout: true,
                script: 'node get_props.js'
            )}"""
}
pipeline {
    agent { label 'master' }
    environment{
        cc = sayHai 'Raja'
    }
    stages {
        stage('build') {
            steps {
                sh "echo $cc"
            }
        }
    }
}