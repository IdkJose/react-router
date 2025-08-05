import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Configuración temporal para desarrollo
// IMPORTANTE: Reemplaza estos valores con tu configuración real de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDMKJAym7qQXtV9NUo2H8i_s7sazZgKYpo",
  authDomain: "login-app-885e7.firebaseapp.com",
  projectId: "login-app-885e7",
  storageBucket: "login-app-885e7.firebasestorage.app",
  messagingSenderId: "748827209209",
  appId: "1:748827209209:web:3b81a5ee232f00d7046128"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);