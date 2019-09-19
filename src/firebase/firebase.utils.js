import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBi-8ei6mFlO6OWreZ1dmabjHVpBN5S1oM",
    authDomain: "crwn-db-934e1.firebaseapp.com",
    databaseURL: "https://crwn-db-934e1.firebaseio.com",
    projectId: "crwn-db-934e1",
    storageBucket: "",
    messagingSenderId: "1054953434981",
    appId: "1:1054953434981:web:84914c8af6a7586a787b8c"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
  export default firebase;