pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh 'docker build -t shopping-website:latest .'
            }
        }
        stage('Deploy') {
            steps {
                sh 'docker stop shopping-site || true'
                sh 'docker rm shopping-site || true'
                sh 'docker run -d --name shopping-site -p 80:80 shopping-website:latest'
            }
        }
    }
}
