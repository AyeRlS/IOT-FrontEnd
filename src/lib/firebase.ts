// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyAx-RQpOlFeNXjhJZ2RUi4QYne-wAONhso",
  authDomain: "iot-sante.firebaseapp.com",
  projectId: "iot-sante",
  storageBucket: "iot-sante.appspot.com",
  messagingSenderId: "751927098314",
  appId: "1:751927098314:web:285506113c933dfcdead33",
  measurementId: "${config.measurementId}",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
