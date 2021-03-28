// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from "firebase/app";

// Firebase services to be used
import "firebase/auth";
import "firebase/firestore";
import "firebase/functions";

const firebaseui = require("firebaseui");
require("dotenv").config()

const firebaseConfig = {
  apiKey: "AIzaSyC88_HrXsk8bPsYCc6F2hdDCyRpVZ0VEr4",
  authDomain: "coffee-shop-qvsspp.firebaseapp.com",
  databaseURL: "https://coffee-shop-qvsspp.firebaseio.com",
  projectId: "coffee-shop-qvsspp",
  storageBucket: "coffee-shop-qvsspp.appspot.com",
  messagingSenderId: "798569230078",
  appId: "1:798569230078:web:4a9937b53ce856df13bfaf",
  measurementId: "G-TGQD4E50HT",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// This is our firebaseui configuration object
const uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: function (authResult, redirectUrl) {
      // User successfully signed in.
      // Return type determines whether we continue the redirect automatically
      // or whether we leave that to developer to handle.
      return true;
    },
    uiShown: function () {
      // The widget is rendered.
      // Hide the loader.
      document.getElementById("loader").style.display = "none";
    },
  },
  signInFlow: "popup",
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ]
};

const AuthUI = new firebaseui.auth.AuthUI(firebase.auth());
const startAuthUI = function (elementId) {
  AuthUI.start(elementId, uiConfig);
};
const db = firebase.firestore()

export {firebase as app, db, startAuthUI};
