import { getApps, initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
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
