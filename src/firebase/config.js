import firebase from 'firebase/app'
import 'firebase/firestore'
// Import any other required services

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAL21YO4jJ9mmy7k1MvC7p3CSn2nZDyptg",
    authDomain: "cooking-ninja-site-cc665.firebaseapp.com",
    projectId: "cooking-ninja-site-cc665",
    storageBucket: "cooking-ninja-site-cc665.appspot.com",
    messagingSenderId: "625186034472",
    appId: "1:625186034472:web:24c492a20e23a26407b61d",
    measurementId: "G-1YQ8LEXSHF"
};

// Initialise Firebase
firebase.initializeApp(firebaseConfig)

// Initialise Services
const projectFirestore = firebase.firestore()

export { projectFirestore }