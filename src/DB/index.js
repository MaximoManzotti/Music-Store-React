import firebase from 'firebase/app';
import '@firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyBwzmpMEg40EOu3yuIDsR_fmNay1492oxU",
    authDomain: "music-store-ecommerse.firebaseapp.com",
    projectId: "music-store-ecommerse",
    storageBucket: "music-store-ecommerse.appspot.com",
    messagingSenderId: "472901458793",
    appId: "1:472901458793:web:652480d151b5c863163bf8"
})

export function getFirebase() {
    return app;
}

export function getFirestore() {
    return firebase.firestore(app);
}