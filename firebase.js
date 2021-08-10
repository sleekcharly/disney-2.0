import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCAnmbi9QNUoDEg2PszH3bMSzdaYB0uhnU",
  authDomain: "disney-v2.firebaseapp.com",
  projectId: "disney-v2",
  storageBucket: "disney-v2.appspot.com",
  messagingSenderId: "416468064369",
  appId: "1:416468064369:web:5b6536d8c4c611b79463d0"
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export { db };
