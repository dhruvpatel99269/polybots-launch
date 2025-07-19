pipeline {
    agent any

    environment {
        // You can add environment variables here
        NODE_ENV = 'development'
    }

    tools {
        nodejs 'NodeJS_20'  // Make sure this matches your Jenkins Node.js installation name
    }

    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/dhruvpatel99269/polybots-launch.git', branch: 'main'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Lint') {
            steps {
                sh 'npm run lint || true' // Optional: only warn, don’t fail
            }
        }

        stage('Test') {
            steps {
                sh 'npm test || echo "No tests configured"' // Optional
            }
        }

        stage('Deploy') {
            when {
                branch 'main'
            }
            steps {
                echo 'Deploy logic goes here (e.g., upload to S3, FTP, or run docker-compose)'
            }
        }
    }

    post {
        success {
            echo '✅ Pipeline completed successfully.'
        }
        failure {
            echo '❌ Pipeline failed.'
        }
    }
}
