import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyANvJ68MnXG47Oh5R_1PhkHCGC4VkmlfFQ",
  authDomain: "linkedin-satya-clone.firebaseapp.com",
  projectId: "linkedin-satya-clone",
  storageBucket: "linkedin-satya-clone.appspot.com",
  messagingSenderId: "523938646739",
  appId: "1:523938646739:web:a6bc942d7919d2b90de226",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
