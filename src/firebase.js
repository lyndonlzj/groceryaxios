import firebase from 'firebase';

const firebaseConfig = {
    //Key in your database details
    apiKey: "AIzaSyAf2YLIkOaOo90NddR4a_T3S-zKaCmglgA",
    authDomain: "axios-28e7a.firebaseapp.com",
    databaseURL: "https://axios-28e7a.firebaseio.com",
    projectId: "axios-28e7a",
    storageBucket: "axios-28e7a.appspot.com",
    messagingSenderId: "1054766914453",
    appId: "1:1054766914453:web:180f2a6030ee1b1c9fb49c",
    measurementId: "G-H99NXMKHXY"

  };
  
  firebase.initializeApp(firebaseConfig);
  var database = firebase.firestore();
  export default database;