pipeline {
  agent any
    
  tools {nodejs "node"}

    stages {
            
        stage('Git') {
            steps {
                git 'https://github.com/Smit2010/Demo-Next-App.git'
            }
        }
        
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }  
        
                
        stage('Test') {
            steps {
                sh 'npm run cy:run'
            }
        }
    }
}