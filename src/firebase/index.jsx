import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDY7MdB_6iJVNwhRtW8okjFbhLTJG09SPg",
  authDomain: "fast-india-alerts.firebaseapp.com",
  projectId: "fast-india-alerts",
  storageBucket:"fast-india-alerts.appspot.com",
  messagingSenderId:"958782819928",
  appId: "1:958782819928:web:eadede853d153491ec842d",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
