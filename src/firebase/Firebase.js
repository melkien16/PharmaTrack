import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDgmRarIKPtT0XE6-ZfDOYCH7Pc4yUo9-o",
  authDomain: "pharmacy-locator-47a14.firebaseapp.com",
  projectId: "pharmacy-locator-47a14",
  storageBucket: "pharmacy-locator-47a14.firebasestorage.app",
  messagingSenderId: "1027228699830",
  appId: "1:1027228699830:web:1a77f41bd663af52156a17"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {app, auth};