import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'
import { getAuth } from "firebase/auth"

// export const firebaseConfig = {
//   apiKey: "AIzaSyDE33C0d_zZhlJtmEtrO1qWBHOxaBgunTg",
//   authDomain: "gymstack-caeaf.firebaseapp.com",
//   projectId: "gymstack-caeaf",
//   storageBucket: "gymstack-caeaf.appspot.com",
//   messagingSenderId: "864620271061",
//   appId: "1:864620271061:web:82e9f8ece85f5e838c595c"
// };
export const firebaseConfig = {
  apiKey: process.env.API_KEY_SECRET,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGE_SENDER_ID,
  appId: process.env.APP_ID
};

export const FirebaseApp = initializeApp(firebaseConfig)
export const FirebaseDB = getFirestore(FirebaseApp)
export const FirebaseAuth = getAuth(FirebaseApp)
