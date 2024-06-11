"use client";

import { useState } from 'react';
import Item from './item';
import items from './items.json';

export default function ItemList() {
  const [sortBy, setSortBy] = useState('name');

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }
    return 0; // default case, should not occur
  });

  const groupedItems = items.reduce((groups, item) => {
    const category = item.category;
    if (!groups[category]) {
      groups[category] = [];
    }
    groups[category].push(item);
    return groups;
  }, {});

  return (
    <div>
      <div className="flex space-x-4 mb-6">
        <span className="text-lg">Sort by:</span>
        <button
          className={`p-2 ${sortBy === 'name' ? 'bg-green-500' : 'bg-purple-700'} text-white rounded-md`}
          onClick={() => setSortBy('name')}
        >
          Name
        </button>
        <button
          className={`p-2 ${sortBy === 'category' ? 'bg-green-500' : 'bg-purple-700'} text-white rounded-md`}
          onClick={() => setSortBy('category')}
        >
          Category
        </button>
        <button
          className={`p-2 ${sortBy === 'grouped' ? 'bg-green-500' : 'bg-purple-700'} text-white rounded-md`}
          onClick={() => setSortBy('grouped')}
        >
          Grouped Category
        </button>
      </div>
      {sortBy === 'grouped' ? (
        Object.keys(groupedItems).sort().map(category => (
          <div key={category} className="mb-8">
            <h2 className="text-2xl font-bold capitalize mb-4 text-green-400">{category}</h2>
            <ul className="space-y-4">
              {groupedItems[category].map(item => (
                <Item key={item.id} {...item} />
              ))}
            </ul>
          </div>
        ))
      ) : (
        <ul className="space-y-4">
          {sortedItems.map(item => (
            <Item key={item.id} {...item} />
          ))}
        </ul>
      )}
    </div>
  );
}
