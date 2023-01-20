import { getFirestore } from "firebase/firestore"
import { initializeApp } from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyB9Z9ihwaXVRLz2Qe1sfOifM9bPUhYSpPY",
    authDomain: "formcrud-c5953.firebaseapp.com",
    projectId: "formcrud-c5953",
    storageBucket: "formcrud-c5953.appspot.com",
    messagingSenderId: "787142666269",
    appId: "1:787142666269:web:f1a095f1b8104b242bbef4",
    measurementId: "G-LEYMD5L2B5"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);