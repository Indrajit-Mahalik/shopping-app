import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAFxceYjrEv1jPwNEoUwXaAsyOLOiRMISw",
  apiKey: "AIzaSyAFxceYjrEv1jPwNEoUwXaAsyOLOiRMISw",
  authDomain: "productmarket-99f56.firebaseapp.com",
  projectId: "productmarket-99f56",
  storageBucket: "productmarket-99f56.appspot.com", 
  messagingSenderId: "940996223132",
  appId: "1:940996223132:web:181dbe2901dfb4dfdacd59",
  measurementId: "G-XEP1MZB9XF"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup, signOut, onAuthStateChanged };
