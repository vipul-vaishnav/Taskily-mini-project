// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA20-OGxZjzTtVAE3kRe25mlg_Yqz9vCxE',
  authDomain: 'taskily-35b43.firebaseapp.com',
  projectId: 'taskily-35b43',
  storageBucket: 'taskily-35b43.appspot.com',
  messagingSenderId: '953331620687',
  appId: '1:953331620687:web:60749a0c2ca83b5424c33a',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
