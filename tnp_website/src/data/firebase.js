import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAd2J6lK2gJKt0cGPXfpR5i6Rlwe8Kd78I",
  authDomain: "login-form-b55d4.firebaseapp.com",
  projectId: "login-form-b55d4",
  storageBucket: "login-form-b55d4.firebasestorage.app",
  messagingSenderId: "126426639544",
  appId: "1:126426639544:web:b7e3efd2760ba4b3c9d84d",
  measurementId: "G-WDLB9EB2DT"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };