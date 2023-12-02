// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

//import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEHXKYmdMFB1-__23Om_uvIGGlD-0h17w",
  authDomain: "auth-6971e.firebaseapp.com",
  projectId: "auth-6971e",
  storageBucket: "auth-6971e.appspot.com",
  messagingSenderId: "1087208018998",
  appId: "1:1087208018998:web:f026d6e85f84830377f497",
  measurementId: "G-GC365DT5MB"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

// export const analytics = getAnalytics(app);


