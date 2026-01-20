pipeline {
    agent any

    tools {
        jdk 'JDK-17'
        maven 'Maven-3.9'
    }

    stages {

        stage('Checkout Code') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/Sipu-kumar/calculator-springboot.git'
            }
        }

        stage('Build Maven Project') {
            steps {
                sh 'mvn clean package'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t calculator-app .'
            }
        }

        stage('Run Docker Container') {
            steps {
                sh '''
                docker stop calculator-container || true
                docker rm calculator-container || true
                docker run -d -p 8080:8080 --name calculator-container calculator-app
                '''
            }
        }
    }

    post {
        success {
            echo '✅ Calculator App deployed successfully using Docker'
        }
        failure {
            echo '❌ Jenkins Pipeline failed'
        }
    }
}
