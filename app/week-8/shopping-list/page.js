'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import NewItem from './new-item';
import ItemList from './item-list';
import MealIdeas from './meal-ideas';
import itemsData from './items.json';
import { useUserAuth } from '../_utils/auth-context';
import { useRouter } from 'next/navigation';
import SignInRequired from '../sign-in-required';

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState('');
  const { user } = useUserAuth();
  const router = useRouter();

  useEffect(() => {
    if (user === undefined) {
      return;
    }

    if (user === null) {
      router.push('/week-8/sign-in-required');
    }
  }, [user, router]);

  if (user === undefined || user === null) {
    return null;
  }

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const handleItemSelect = (item) => {
    const itemName = item.name.split(',')[0].trim();
    setSelectedItemName(itemName);
  };

  return (
    <main className="min-h-screen p-4 flex flex-col items-center bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-4">Shopping List</h1>
      <div className="flex flex-col md:flex-row gap-8 w-full">
        <div className="w-full md:w-1/2">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
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
