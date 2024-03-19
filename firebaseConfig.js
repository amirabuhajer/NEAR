// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_OJHOwk1oFeQi5rg3GXjNU1pAwiRZE8M",
  authDomain: "near-ea9b8.firebaseapp.com",
  projectId: "near-ea9b8",
  storageBucket: "near-ea9b8.appspot.com",
  messagingSenderId: "320306544731",
  appId: "1:320306544731:web:1dd7eedcb7c3979788bf7e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

export {db, auth};














// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth, indexedDBLocalPersistence } from "firebase/auth";
// import AsyncStorage from '@react-native-async-storage/async-storage';

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyA_OJHOwk1oFeQi5rg3GXjNU1pAwiRZE8M",
//   authDomain: "near-ea9b8.firebaseapp.com",
//   projectId: "near-ea9b8",
//   storageBucket: "near-ea9b8.appspot.com",
//   messagingSenderId: "320306544731",
//   appId: "1:320306544731:web:1dd7eedcb7c3979788bf7e"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// const auth = getAuth(app);
// auth.setPersistence(indexedDBLocalPersistence);

// export default auth;