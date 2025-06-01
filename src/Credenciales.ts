// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABqtwO9MgPyL9KNl9NuEWTpW_Fjrn5X2I",
  authDomain: "gestor-de-archivos-4dd17.firebaseapp.com",
  projectId: "gestor-de-archivos-4dd17",
  storageBucket: "gestor-de-archivos-4dd17.firebasestorage.app",
  messagingSenderId: "26667530239",
  appId: "1:26667530239:web:18cf5915d492c5e70a99ca",
  measurementId: "G-59QTXBLMX1",
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

export default appFirebase;
