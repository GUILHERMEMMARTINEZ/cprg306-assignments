"use client";

import { useState } from 'react';
import Item from './item';

export default function ItemList({ items, onItemSelect, onDeleteItem }) {
  const [sortBy, setSortBy] = useState('name');

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  const groupedItems = sortedItems.reduce((groups, item) => {
    const category = item.category;
    if (!groups[category]) {
      groups[category] = [];
    }
    groups[category].push(item);
    return groups;
  }, {});

  return (
    <div>
      <div className="mb-4">
        <span className="text-xl mr-2">Sort by:</span>
        <button
          onClick={() => setSortBy('name')}
          className={`mr-2 px-4 py-2 rounded ${sortBy === 'name' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}`}
        >
          Name
        </button>
        <button
          onClick={() => setSortBy('category')}
          className={`px-4 py-2 rounded ${sortBy === 'category' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}`}
        >
          Category
        </button>
        <button
          onClick={() => setSortBy('grouped')}
          className={`ml-2 px-4 py-2 rounded ${sortBy === 'grouped' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}`}
        >
          Grouped Category
        </button>
      </div>
      {sortBy === 'grouped' ? (
        Object.keys(groupedItems).map((category) => (
          <div key={category} className="mb-6">
            <h3 className="text-xl font-bold mb-2">{category}</h3>
            {groupedItems[category].map((item) => (
              <Item key={item.id} {...item} onSelect={() => onItemSelect(item)} onDelete={onDeleteItem} />
            ))}
          </div>
        ))
      ) : (
        <ul className="space-y-2">
          {sortedItems.map((item) => (
            <Item key={item.id} {...item} onSelect={() => onItemSelect(item)} onDelete={onDeleteItem} />
          ))}
        </ul>
      )}
    </div>
  );
}
