// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCL4H0Fnlqe7lduW_bct3GwnQ_GTWvL0WI",
  authDomain: "fir-test-69d11.firebaseapp.com",
  projectId: "fir-test-69d11",
  storageBucket: "fir-test-69d11.appspot.com",
  messagingSenderId: "214523017009",
  appId: "1:214523017009:web:5d575685522a70d1d7e210"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)