import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAZrlso3sl2fkPau8u-MC22duPfGDvLKxQ",
  authDomain: "alldebts-api.firebaseapp.com",
  databaseURL: "https://alldebts-api.firebaseio.com",
  projectId: "alldebts-api",
  storageBucket: "alldebts-api.appspot.com",
  messagingSenderId: "905212713418",
  appId: "1:905212713418:web:d0c8aaf2ac6caf7e"
};

const fire = firebase.initializeApp(firebaseConfig);
export default fire;
