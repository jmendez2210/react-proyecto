
import { initializeApp } from "firebase/app";
import { collection, getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD9SLATmaZpQKWPjeMr5keoicqc6e4xjo0",
  authDomain: "react-proyecto-b36ed.firebaseapp.com",
  projectId: "react-proyecto-b36ed",
  storageBucket: "react-proyecto-b36ed.appspot.com",
  messagingSenderId: "422401412823",
  appId: "1:422401412823:web:a17c09e51d8377cde92a92"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const collectionVh = collection(db, 'productos')
