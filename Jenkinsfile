pipeline {
    agent any

    tools {
        nodejs 'NodeJS-22'
    }

    options {
        timestamps()
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
                echo 'Code source récupéré depuis GitHub.'
            }
        }

        stage('Installation') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Archive') {
            steps {
                archiveArtifacts artifacts: 'dist/**',
                                 fingerprint: true
            }
        }
    }

    post {
        success {
            echo 'CI SUCCESS : compilation réussie.'
        }

        failure {
            echo 'CI FAILURE : vérifier les erreurs du pipeline.'
        }
    }
}
