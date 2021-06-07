import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCCxrtiB-v8vf8CuBO3cAWU7QMRxbT_ShY",
    authDomain: "clone-6a210.firebaseapp.com",
    projectId: "clone-6a210",
    storageBucket: "clone-6a210.appspot.com",
    messagingSenderId: "572505294330",
    appId: "1:572505294330:web:a4f90b9dae4b8025b29043",
    measurementId: "G-HLZJ88XFMR"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };