import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBKjJBsmJU6PoM3fzuNsj4NiP7heY_G800",
  authDomain: "mts-miftahul-ulum.firebaseapp.com",
  projectId: "mts-miftahul-ulum",
  storageBucket: "mts-miftahul-ulum.appspot.com",
  messagingSenderId: "31990203419",
  appId: "1:31990203419:web:adeb87695c70acae6aa4be",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);

export const storage = getStorage(app);
