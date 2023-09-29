import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDw61dMa92kvEnAzeNL3yFW9dA7HYeGm9Y",
  authDomain: "mozok-1fa76.firebaseapp.com",
  projectId: "mozok-1fa76",
  storageBucket: "mozok-1fa76.appspot.com",
  messagingSenderId: "298596522159",
  appId: "1:298596522159:web:73b63d7a5af1fe60d9dc5a",
  measurementId: "G-MQ36MTXJTH",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
