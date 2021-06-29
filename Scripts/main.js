"use strict";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyA8Oaj-yFL0fYNyCP6ySFjQ5l27W_3y0wA",
    authDomain: "muso-f6441.firebaseapp.com",
    databaseURL: "https://muso-f6441-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "muso-f6441",
    storageBucket: "muso-f6441.appspot.com",
    messagingSenderId: "654485189064",
    appId: "1:654485189064:web:cefb4a12c602ec3661d0fd",
    measurementId: "G-MB4DHR4N5Y"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
//make auth and firestore reference
let auth = firebase.auth();
let db = firebase.firestore();
//update firestore settings
db.settings({ timestampsInSnapshots: true });
//# sourceMappingURL=main.js.map