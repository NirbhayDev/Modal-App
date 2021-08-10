import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import "firebase/functions"

const prodConfig = {
  apiKey: "AIzaSyDWaZ3s_TtFHbNl0yZqVRFrpJsZXXwd2hU",
  authDomain: "flavvless-e8b7c.firebaseapp.com",
  databaseURL: "https://flavvless-e8b7c-default-rtdb.firebaseio.com",
  projectId: "flavvless-e8b7c",
  storageBucket: "flavvless-e8b7c.appspot.com",
  messagingSenderId: "29931536919",
  appId: "1:29931536919:web:8bc2946c0becf8d1d99252",
  measurementId: "G-PF2EDLG158"
};

const devConfig = {
  apiKey: "AIzaSyDWaZ3s_TtFHbNl0yZqVRFrpJsZXXwd2hU",
  authDomain: "flavvless-e8b7c.firebaseapp.com",
  databaseURL: "https://flavvless-e8b7c-default-rtdb.firebaseio.com",
  projectId: "flavvless-e8b7c",
  storageBucket: "flavvless-e8b7c.appspot.com",
  messagingSenderId: "29931536919",
  appId: "1:29931536919:web:8bc2946c0becf8d1d99252",
  measurementId: "G-PF2EDLG158"
};

const config = process.env.NODE_ENV === "production" ? prodConfig : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config)
  // To enable analytics. https://firebase.google.com/docs/analytics/get-started
}

const db = firebase.firestore()
const auth = firebase.auth()
const storage = firebase.storage();
const functions = firebase.functions();
db.settings({experimentalForceLongPolling: true});

export { db, auth, storage, functions };