import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA7mlAcpcK6W2KEXVUQoVMH1GS-JT7eqTA",
    authDomain: "app-gerenciamento-de-projetos.firebaseapp.com",
    projectId: "app-gerenciamento-de-projetos",
    storageBucket: "app-gerenciamento-de-projetos.appspot.com",
    messagingSenderId: "718103626460",
    appId: "1:718103626460:web:a061bd4cc1519a373a6a19",
    measurementId: "G-TTLKC6V3J1"
};

const app = initializeApp(firebaseConfig);
export const auth =  getAuth(app);