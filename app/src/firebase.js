// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import * as fbauth from "firebase/auth";
import { useAuthState } from 'react-firebase-hooks/auth';
import { getFirestore } from "firebase/firestore"
import { getFunctions, httpsCallable} from "firebase/functions";

// SETUP REQUIRED: Add your config object here vvv

const firebaseConfig = {
  apiKey: "AIzaSyBJ9hWonjDhkw_7MeDWaxyPHtZk8PkVZkA",
  authDomain: "indiestack-dev.firebaseapp.com",
  projectId: "indiestack-dev",
  storageBucket: "indiestack-dev.appspot.com",
  messagingSenderId: "213569585896",
  appId: "1:213569585896:web:1b632480f82921841ebf5d"
};
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const functions = getFunctions(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = fbauth.getAuth(app);

export const useAuth = () => useAuthState(auth)

const provider = new fbauth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => fbauth.signInWithPopup(auth, provider);
export const signInWithEmailAndPassword = (email, password) => fbauth.signInWithEmailAndPassword(auth, email, password);
export const createUserWithEmailAndPassword = (email, password) => fbauth.createUserWithEmailAndPassword(auth, email, password);
export const signOut = () => fbauth.signOut(auth);

export const helloWorld = httpsCallable(functions, 'helloWorld');
export default app;