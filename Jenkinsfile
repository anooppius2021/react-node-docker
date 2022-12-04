pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh '''
                ./scripts/sample-script.sh
                '''
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Push') {
            steps {
                sh '''
                ./scripts/upload-docker-images.sh
                '''
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}
