'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import NewItem from '../shopping-list/new-item';
import ItemList from '../shopping-list/item-list';
import MealIdeas from '../shopping-list/meal-ideas';
import { useUserAuth } from '../_utils/auth-context';
import { useRouter } from 'next/navigation';
import { getItems, addItem, deleteItem } from '../_services/shopping-list-service';
import SignInRequired from '../sign-in-required';

export default function Page() {
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState('');
  const { user } = useUserAuth();
  const router = useRouter();

  useEffect(() => {
    const loadItems = async () => {
      if (user) {
        const items = await getItems(user.uid);
        setItems(items);
      }
    };

    if (user) {
      loadItems();
    } else {
      router.push('/week-10/sign-in-required');
    }
  }, [user, router]);

  if (user === undefined || user === null) {
    return null;
  }

  const handleAddItem = async (newItem) => {
    const itemId = await addItem(user.uid, newItem);
    setItems([...items, { id: itemId, ...newItem }]);
  };

  const handleItemSelect = (item) => {
    const itemName = item.name.split(',')[0].trim();
    setSelectedItemName(itemName);
  };

  const handleDeleteItem = async (itemId) => {
    await deleteItem(user.uid, itemId);
    setItems(items.filter(item => item.id !== itemId));
  };

  return (
    <main className="min-h-screen p-4 flex flex-col items-center bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-4">Shopping List</h1>
      <div className="flex flex-col md:flex-row gap-8 w-full">
        <div className="w-full md:w-1/2">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} onDeleteItem={handleDeleteItem} />
        </div>
        <div className="w-full md:w-1/2">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
      <Link href="/" legacyBehavior>
        <a className="absolute top-4 left-4 text-lg text-blue-500 hover:underline">Back</a>
      </Link>
    </main>
  );
}
