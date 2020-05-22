pipeline {
    agent {
        docker { image 'node:14-buster' }
    }
    stages {
        stage('Test') {
            steps {
                sh 'node --version'
            }
        }
    }
}