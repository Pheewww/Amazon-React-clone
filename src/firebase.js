// import firebase from "./firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional



const firebaseConfig = {
    apiKey: "AIzaSyCT9fXq02O0fCi7C7tBWTFNCND0sKJJBNA",
    authDomain: "clone-b5811.firebaseapp.com",
    projectId: "clone-b5811",
    storageBucket: "clone-b5811.appspot.com",
    messagingSenderId: "397847835639",
    appId: "1:397847835639:web:7f039a38eecc64cc6ef4f2",
    // measurementId: "G-T3QLDK8FKX"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };