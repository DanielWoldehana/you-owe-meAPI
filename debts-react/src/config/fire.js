import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCJVvBZmQNh1Eo0tlZJz9_gBOzJ3wajqr4",
  authDomain: "trips-api.firebaseapp.com",
  databaseURL: "https://trips-api.firebaseio.com",
  projectId: "trips-api",
  storageBucket: "trips-api.appspot.com",
  messagingSenderId: "671816341719",
  appId: "1:671816341719:web:525e9c74efe194e0"
};

const fire = firebase.initializeApp(firebaseConfig);
export default fire;
