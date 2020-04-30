import firebase from "@react-native-firebase/app";
import firestore from '@react-native-firebase/firestore';
import auth from "@react-native-firebase/auth"; //yeh use ho rahay hain
 import storage from "@react-native-firebase/storage"; //yeh use ho rahay hain

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCd6qCIUx3SOw6iJegsVEprJ5u0hlPIpBo",
  authDomain: "hope-accelerated.firebaseapp.com",
  databaseURL: "https://hope-accelerated.firebaseio.com",
  projectId: "hope-accelerated",
  storageBucket: "hope-accelerated.appspot.com",
  messagingSenderId: "244862065242",
  appId: "1:244862065242:web:dcdee7a6f3123b59ea5663",
  measurementId: "G-TC824B5Y86"
};
// firebase.initializeApp(config);
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export const f = firebase;
export const db = firebase.firestore();  //firestore database
export const authh=firebase.auth();  
export const storagee = firebase.storage(); //storage use hoti ha images videos audios store kay liay
