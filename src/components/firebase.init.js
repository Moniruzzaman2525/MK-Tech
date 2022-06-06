// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC4xczNk_p2uiWj9lS0gFVaJb4e9BNiJTc",
    authDomain: "job-task-1-74889.firebaseapp.com",
    projectId: "job-task-1-74889",
    storageBucket: "job-task-1-74889.appspot.com",
    messagingSenderId: "123777227404",
    appId: "1:123777227404:web:0126c0dc4ddde3c51af9a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;