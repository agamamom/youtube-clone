
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAOzgHpxtmeGdlC-dPGq0mRfI6ct69mESk",
    authDomain: "yoube-clone-bbfa3.firebaseapp.com",
    projectId: "yoube-clone-bbfa3",
    storageBucket: "yoube-clone-bbfa3.appspot.com",
    messagingSenderId: "799023610952",
    appId: "1:799023610952:web:1cebaea55843da79d62c7d"
};


firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();


export default auth;