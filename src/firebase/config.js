// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// Para tomar la parte de la autenticacion
import { getAuth } from "firebase/auth";
// Acceso a la BD FireStore
import { getFirestore } from "firebase/firestore/lite";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBq_MIsnp6Wfkc1j9ciYp1vf4dS6BfE6NU",
    authDomain: "react-2022-d0e9b.firebaseapp.com",
    projectId: "react-2022-d0e9b",
    storageBucket: "react-2022-d0e9b.appspot.com",
    messagingSenderId: "150293255493",
    appId: "1:150293255493:web:d728b4b24b45ef11109a2c"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);

export const FirebaseDB = getFirestore(FirebaseApp);