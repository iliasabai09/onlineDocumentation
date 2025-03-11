import { initializeApp } from "firebase/app";
import { initializeFirestore, persistentLocalCache, persistentMultipleTabManager } from "firebase/firestore";

// 🔹 Твой Firebase-конфиг (замени на свой)
const firebaseConfig = {
    apiKey: "AIzaSyDPejrrUhfePCCrcF3TKCd2y8Tjg4T_RLI",
    authDomain: "onlinedocumentation-60d63.firebaseapp.com",
    databaseURL: "https://onlinedocumentation-60d63-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "onlinedocumentation-60d63",
    storageBucket: "onlinedocumentation-60d63.firebasestorage.app",
    messagingSenderId: "143390531168",
    appId: "1:143390531168:web:873770f193ed2367ba6d05"
};

// Инициализация Firebase
const app = initializeApp(firebaseConfig);

// 🔹 Включаем кэширование в IndexedDB
const db = initializeFirestore(app, {
    localCache: persistentLocalCache({ tabManager: persistentMultipleTabManager() })
});

export { db };
