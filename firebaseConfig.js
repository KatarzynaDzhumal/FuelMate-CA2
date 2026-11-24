import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDzR-6OIyPHIwXH5Y9xSqFFsTYfGx2VXDo",
  authDomain: "fuelmate-ca2.firebaseapp.com",
  projectId: "fuelmate-ca2",
  storageBucket: "fuelmate-ca2.firebasestorage.app",
  messagingSenderId: "254646754466",
  appId: "1:254646754466:web:72d581ec8e8b8860070bfb",
  measurementId: "G-528ZRTHX2V"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };