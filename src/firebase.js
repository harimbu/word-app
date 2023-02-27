import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCQumgngMIzMNj3iGO4Z18GSNlVyZqkYsg',
  authDomain: 'yarn-word.firebaseapp.com',
  projectId: 'yarn-word',
  storageBucket: 'yarn-word.appspot.com',
  messagingSenderId: '428821984859',
  appId: '1:428821984859:web:2ad0b99659f331726a717e',
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
