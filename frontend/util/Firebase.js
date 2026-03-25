import {getAuth , GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "login-438bb.firebaseapp.com",
  projectId: "login-438bb",
  storageBucket: "login-438bb.firebasestorage.app",
  messagingSenderId: "801354921929",
  appId: "1:801354921929:web:a4fa6f17224ea86099da18"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()


export { auth, provider };