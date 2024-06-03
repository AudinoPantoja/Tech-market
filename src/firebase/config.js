import { getApps, initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAXYJP_vMG-XViKYJQgVY-O6hJWkyEVDf4",
  authDomain: "techmarket-91227.firebaseapp.com",
  projectId: "techmarket-91227",
  storageBucket: "techmarket-91227.appspot.com",
  messagingSenderId: "37451316726",
  appId: "1:37451316726:web:55afdf21f134a5f051dbd7",
  measurementId: "G-GTYGNLKM5C"
};
let firebase_app;

try {
  if (!getApps().length) {
    firebase_app = initializeApp(firebaseConfig);
    console.log("Firebase app initialized successfully");
  } else {
    firebase_app = getApps()[0];
    console.log("Firebase app already initialized");
  }
} catch (error) {
  console.error("Error initializing Firebase app:", error);
}

export default firebase_app;
