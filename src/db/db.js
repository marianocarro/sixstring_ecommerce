// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore" //para importar y usar getFirestore. Antes debo instalar firestore en el proyecto, en consola  npm install firebase

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDQc6onGRkEQ_467fUIlyRcMYPUAHYbL0",
  authDomain: "sixstrings-ecommerce.firebaseapp.com",
  projectId: "sixstrings-ecommerce",
  storageBucket: "sixstrings-ecommerce.appspot.com",
  messagingSenderId: "889060994848",
  appId: "1:889060994848:web:dcf2fbd9da3b1ece543145"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore ()

export default db 