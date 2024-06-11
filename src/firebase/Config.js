import  firebase  from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCmfjisyPhwYQUM7qrvaX8PMzV_3vMkXzM",
  authDomain: "quizzapp-7bcf4.firebaseapp.com",
  projectId: "quizzapp-7bcf4",
  storageBucket: "quizzapp-7bcf4.appspot.com",
  messagingSenderId: "673773374945",
  appId: "1:673773374945:web:52b8e3773c8622e769d6a0",
  measurementId: "G-L0TXW3F0X5"
};

firebase.initializeApp(firebaseConfig);
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

export { projectFirestore, projectAuth };
