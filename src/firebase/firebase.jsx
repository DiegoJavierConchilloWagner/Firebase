import firebase from "firebase/app";
import "firebase/firestore";
const firebaseConfig = {
  //OBJETO DE FIREBASE
    apiKey: "AIzaSyAQTxYYAo3pj1nHG0V4MWuIukhb4B9x_I4",
    authDomain: "react-animales.firebaseapp.com",
    projectId: "react-animales",
    storageBucket: "react-animales.appspot.com",
    messagingSenderId: "28343288262",
    appId: "1:28343288262:web:3cdd8b05e63bef7e4672c7"
};
const app = firebase.initializeApp(firebaseConfig);
export function getFirebase() {
  return app;
}
export const database = firebase.firestore();