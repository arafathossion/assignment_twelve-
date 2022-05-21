// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMG5bPtnpLLZGUYcT2APsipiAnLdCJ1EE",
  authDomain: "halda-screwdriver.firebaseapp.com",
  projectId: "halda-screwdriver",
  storageBucket: "halda-screwdriver.appspot.com",
  messagingSenderId: "890283864684",
  appId: "1:890283864684:web:1f01828b062ab760499e49"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;