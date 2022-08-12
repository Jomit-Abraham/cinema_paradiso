import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from '@firebase/firestore'

const firebaseConfig = {

    apiKey: "AIzaSyAwEJ8P7evVlMeW04h0Qx6DXxdmnfKnHCo",

    authDomain: "cinema-paradiso-80f27.firebaseapp.com",

    projectId: "cinema-paradiso-80f27",

    storageBucket: "cinema-paradiso-80f27.appspot.com",

    messagingSenderId: "537526377347",

    appId: "1:537526377347:web:dd1d666faaae63680534b6",

    measurementId: "G-GN4FGD7V58"

};



const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app)