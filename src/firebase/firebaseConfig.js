import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDqDaR5k7NMsrFt3BOdfyGI1YafMNO_GV8",
  authDomain: "proyecto-react-11e07.firebaseapp.com",
  projectId: "proyecto-react-11e07",
  storageBucket: "proyecto-react-11e07.firebasestorage.app",
  messagingSenderId: "217304974110",
  appId: "1:217304974110:web:3584e3787f8476661e7f0f",
  measurementId: "G-NN2E3NC78E"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
