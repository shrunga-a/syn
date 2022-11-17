
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAl6n_cIGZItQQlsGMHD0QuDkD8J28vvy4",
  authDomain: "synbasket.firebaseapp.com",
  projectId: "synbasket",
  storageBucket: "synbasket.appspot.com",
  messagingSenderId: "933664889941",
  appId: "1:933664889941:web:31ea23f782eef0624c48dc",
  measurementId: "G-D65CXJJP3M"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };