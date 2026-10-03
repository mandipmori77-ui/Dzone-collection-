import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore';

// Default Firebase Configuration template (Store owner can customize via Admin Panel)
const firebaseConfig = {
  apiKey: "",
  authDomain: "dzone-collection.firebaseapp.com",
  projectId: "dzone-collection",
  storageBucket: "dzone-collection.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef123456"
};

let app;
let db;

try {
  if (firebaseConfig.apiKey) {
    app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
    db = getFirestore(app);
  }
} catch (err) {
  console.warn("Firebase initialized with Local Data persistence fallback:", err);
}

export { app, db, collection, addDoc, getDocs, doc, updateDoc, deleteDoc };
