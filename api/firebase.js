import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD9bSNZJ8Vz-r0yr0oI1mzIjl6HDAz4ieE",
  authDomain: "sentemeter-438e4.firebaseapp.com",
  projectId: "sentemeter-438e4",
  storageBucket: "sentemeter-438e4.appspot.com",
  messagingSenderId: "553848412329",
  appId: "1:553848412329:web:468f00eb1cb661844831b8",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
