// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBX6w-qBxlDlS0Ztfe5BlrLMvXVotpAS6k",
  authDomain: "zoo-land-client.firebaseapp.com",
  projectId: "zoo-land-client",
  storageBucket: "zoo-land-client.appspot.com",
  messagingSenderId: "772361923825",
  appId: "1:772361923825:web:4a27067da3c382a0bbcd50"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;