import { initializeApp, getApps } from 'firebase/app';
import {
  getAuth,
  signInWithEmailAndPassword,
  onIdTokenChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  applyActionCode,
  sendPasswordResetEmail,
  deleteUser,
} from 'firebase/auth';

if (!getApps().length) {
  initializeApp({
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_APP_ID,
  });
}

const GoogleProvider = new GoogleAuthProvider();

export const Auth = {
  auth: getAuth(),
  signInWithEmailAndPassword,
  onIdTokenChanged,
  GoogleProvider,
  signInWithPopup,
  signOut,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  applyActionCode,
  sendPasswordResetEmail,
  deleteUser,
};
