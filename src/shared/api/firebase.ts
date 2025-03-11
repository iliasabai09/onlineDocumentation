import {db} from "../../firebase.ts";
import {collection, addDoc, getDocs, getDoc, doc, updateDoc, deleteDoc} from "firebase/firestore";
import {get, set, del, keys} from "idb-keyval"; // Работа с IndexedDB

const col = "documents";
const itemsCollection = collection(db, col);

async function _getAllData() {
    const allKeys = await keys(); // Получаем все ключи
    const allData = await Promise.all(allKeys.map(key => get(key))); // Загружаем значения

    return allKeys.map((_key, index) => allData[index]);
}

// ✅ Чтение (Read) (Firestore сам использует IndexedDB)
export const getItems = async () => {
    const indexedDbData = await _getAllData();
    if (indexedDbData && indexedDbData.length) return indexedDbData;
    const snapshot = await getDocs(itemsCollection);
    const data = snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}));
    for (const doc1 of data) {
        await set(doc1.id, doc1); // Кэшируем результат
    }
    return data
};

// ✅ Создание (Create)
export const addItem = async (newItem: any) => {
    const docRef = await addDoc(itemsCollection, newItem);
    const data = {id: docRef.id, ...newItem};
    await set(docRef.id, data);
    return data;
};

// ✅ Обновление (Update)
export const updateItem = async (id: string, updatedData: any) => {
    await updateDoc(doc(db, col, id), updatedData);
    const data = {id, ...updatedData};
    await set(id, JSON.parse(JSON.stringify(data)));
    return data;
};

// ❌ Удаление (Delete)
export const deleteItem = async (id: string) => {
    try {
        await deleteDoc(doc(db, col, id));
        await del(id); // Очистка из IndexedDB
        console.log(`🗑️ Документ ${id} удалён`);
    } catch (error) {
        console.error("❌ Ошибка удаления документа:", error);
    }
};


export const getItemById = async (id: string) => {
    const fromCache = await get(id);
    console.log('fromCachefromCachefromCache', fromCache)
    if (fromCache) return fromCache;
    const docRef = doc(db, col, id); // Ссылаемся на конкретный документ
    const snapshot = await getDoc(docRef);

    if (!snapshot.exists()) {
        console.warn(`⚠️ Документ с id "${id}" не найден`);
        return null;
    }

    const data = {id: snapshot.id, ...snapshot.data()};
    console.log("✅ Получен документ:", data);
    await set(id, data);
    return data;
};


export const exportCollection = async () => {
    const colRef = collection(db, col);
    const snapshot = await getDocs(colRef);
    const data = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));

    // Конвертируем в JSON
    const jsonData = JSON.stringify(data, null, 2);
    console.log("✅ Экспорт JSON:", jsonData);

    // Создание Blob-объекта
    const blob = new Blob([jsonData], {type: "application/json"});
    const url = URL.createObjectURL(blob);

    // Создание и клик по ссылке для скачивания
    const a = document.createElement("a");
    a.href = url;
    a.download = `${col}_backup.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
};

export const restoreCollection = async (collectionName: string, jsonData: string) => {
    const data = JSON.parse(jsonData);
    const colRef = collection(db, collectionName);

    for (const docData of data) {
        const {id, ...fields} = docData;
        await addDoc(colRef, fields); // Firestore сам создаст новые ID
    }

    console.log(`✅ Коллекция "${collectionName}" восстановлена из JSON`);
};
