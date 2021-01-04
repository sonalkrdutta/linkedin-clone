import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBsYeG7uoFg2_YdxPb3LltME3fmLymOEqU",
    authDomain: "linkedin-clone-6ed1b.firebaseapp.com",
    projectId: "linkedin-clone-6ed1b",
    storageBucket: "linkedin-clone-6ed1b.appspot.com",
    messagingSenderId: "108224136937",
    appId: "1:108224136937:web:b3346641ab66bc51fbd278",
    measurementId: "G-C2LTS503H3"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth};