import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCaGxtP92osBZZkk8DlqVb8Nghc_eTuhes",
  authDomain: "instagram-clone20.firebaseapp.com",
  databaseURL: "https://instagram-clone20.firebaseio.com",
  projectId: "instagram-clone20",
  storageBucket: "instagram-clone20.appspot.com",
  messagingSenderId: "710075844590",
  appId: "1:710075844590:web:ab52e3f1f9196e7570f0ff",
  measurementId: "G-PVLDFEW1SP",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
