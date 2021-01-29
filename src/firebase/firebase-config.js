import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCaQgaksStNk181pTlMJQER4k7bwav6Cog",
    authDomain: "journal-app-12760.firebaseapp.com",
    projectId: "journal-app-12760",
    storageBucket: "journal-app-12760.appspot.com",
    messagingSenderId: "63704710462",
    appId: "1:63704710462:web:73710bd5a03f128ffac06f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db=firebase.firestore();

  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export {
      db,
      googleAuthProvider,
      firebase
  }