import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCJ2iK9Qdz2i-jBfw3d6h6ACgRhRtj0IHs",
  authDomain: "note-nest-7e454.firebaseapp.com",
  projectId: "note-nest-7e454",
  storageBucket: "note-nest-7e454.firebasestorage.app",
  messagingSenderId: "911516772027",
  appId: "1:911516772027:web:a722bb1b50943614b56b9e",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup };
