// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD06-yTFs9qRI1CIkBn2ePFSVGAdz80B3g",
    authDomain: "react-3c32e.firebaseapp.com",
    projectId: "react-3c32e",
    storageBucket: "react-3c32e.appspot.com",
    messagingSenderId: "666175126905",
    appId: "1:666175126905:web:f04d390e9d47b5504843a8",
    measurementId: "G-CB8J6JM258"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };  