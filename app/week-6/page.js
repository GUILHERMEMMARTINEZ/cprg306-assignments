"use client";

import { useState } from 'react';
import Link from 'next/link'; 
import NewItem from './new-item';
import ItemList from './item-list';
import itemsData from './items.json';

export default function Page() {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-4">
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} />
      <Link href="/" legacyBehavior>
        <a className="absolute top-4 left-4 text-lg text-blue-500 hover:underline">Back</a>
      </Link>
    </main>
  );
}
