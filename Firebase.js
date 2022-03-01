// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBof8pWlIU0JOVrYj0Tc-PJKWSuILUzh7Q",
  authDomain: "sawo-tasks.firebaseapp.com",
  projectId: "sawo-tasks",
  storageBucket: "sawo-tasks.appspot.com",
  messagingSenderId: "1099441410805",
  appId: "1:1099441410805:web:78fe5fce3bf4ceee0cabbc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db, app };
