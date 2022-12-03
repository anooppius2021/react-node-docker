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
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}
