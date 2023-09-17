// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDw61dMa92kvEnAzeNL3yFW9dA7HYeGm9Y",
  authDomain: "mozok-1fa76.firebaseapp.com",
  projectId: "mozok-1fa76",
  storageBucket: "mozok-1fa76.appspot.com",
  messagingSenderId: "298596522159",
  appId: "1:298596522159:web:73b63d7a5af1fe60d9dc5a",
  measurementId: "G-MQ36MTXJTH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//init firebase auth
export const auth = getAuth(app);
