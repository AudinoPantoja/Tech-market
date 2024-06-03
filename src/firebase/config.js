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

let firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export default firebase_app;
