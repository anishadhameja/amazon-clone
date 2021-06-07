import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsskAtA1olI5MNKlm8dxQvgtot-qeM2RU",
  authDomain: "clone2-f0a7a.firebaseapp.com",
  projectId: "clone2-f0a7a",
  storageBucket: "clone2-f0a7a.appspot.com",
  messagingSenderId: "155346382111",
  appId: "1:155346382111:web:0746e45aea3e856997d42a",
  measurementId: "G-HXR0KZBWMY"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };