import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, deleteDoc, query, doc } from "firebase/firestore";

export const getItems = async (userId) => {
  const items = [];
  const q = query(collection(db, "users", userId, "items"));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    items.push({ id: doc.id, ...doc.data() });
  });
  return items;
};

export const addItem = async (userId, item) => {
  const docRef = await addDoc(collection(db, "users", userId, "items"), item);
  return docRef.id;
};

export const deleteItem = async (userId, itemId) => {
  const itemDocRef = doc(db, "users", userId, "items", itemId);
  console.log(`Deleting item with ID: ${itemId} for user: ${userId}`);
  try {
    await deleteDoc(itemDocRef);
    console.log(`Item with ID: ${itemId} deleted`);
  } catch (error) {
    console.error(`Failed to delete item with ID: ${itemId}:`, error);
  }
};
