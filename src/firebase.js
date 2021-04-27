import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7FYCfBjbYE5kwY61UmPYTCakS7Qu3Xpk",
  authDomain: "imessage-clone-d5199.firebaseapp.com",
  projectId: "imessage-clone-d5199",
  storageBucket: "imessage-clone-d5199.appspot.com",
  messagingSenderId: "998267141120",
  appId: "1:998267141120:web:4e52a81ba20c4c9cf42ce5",
  measurementId: "G-7YQ1LDZBRH"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

export default db;