import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, set} from "firebase/database"; // Import Firebase Realtime Database

// Firebase config Anda
const firebaseConfig = {
  apiKey: "AIzaSyCp6Vs0BUxYDiJ-eq1jqC-RR1bpFjf3gQM",
  authDomain: "telcomsendthesong.firebaseapp.com",
  projectId: "telcomsendthesong",
  storageBucket: "telcomsendthesong.firebasestorage.app",
  messagingSenderId: "1072353060039",
  appId: "1:1072353060039:web:3b687251856f20822c0ae2",
  measurementId: "G-LLHLNXWWF6"
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);

// Mendapatkan referensi Firebase Realtime Database
const database = getDatabase(app);

export { database, ref, get, set };
