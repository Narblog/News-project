import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBygNqv40mk78d107a5WqlaicGhnJdrYSk",
  authDomain: "type-news.firebaseapp.com",
  projectId: "type-news",
  storageBucket: "type-news.appspot.com",
  messagingSenderId: "115412089885",
  appId: "1:115412089885:web:a49a2d0d6040b4c0621af4"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, app }