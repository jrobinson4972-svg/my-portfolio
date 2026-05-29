import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCl2nD0gtfETlu6DsanrZJix8U4zRAzDHw",
  authDomain: "robinson-portfolio.firebaseapp.com",
  projectId: "robinson-portfolio",
  storageBucket: "robinson-portfolio.firebasestorage.app",
  messagingSenderId: "590958868993",
  appId: "1:590958868993:web:e741a324ca263162f59e00"
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)