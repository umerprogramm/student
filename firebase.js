import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDfJgKnFqcDhAVI-mf2i_FXXMHRPYhM4tY",
  authDomain: "ourgpt-57af8.firebaseapp.com",
  projectId: "ourgpt-57af8",
  storageBucket: "ourgpt-57af8.firebasestorage.app",
  messagingSenderId: "516102291445",
  appId: "1:516102291445:web:8c0ecd6a637b6b1d302abc"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();