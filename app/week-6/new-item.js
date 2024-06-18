"use client";

import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState('produce');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = { id: uuidv4(), name, quantity, category };
    onAddItem(newItem);
    setName('');
    setQuantity(1);
    setCategory('produce');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8 w-full max-w-md bg-gray-800 p-4 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">Add New Item</h2>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="name">Item Name</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required className="w-full p-2 bg-gray-700 rounded-md"/>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="quantity">Quantity</label>
        <input type="number" id="quantity" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} min="1" max="99" required className="w-full p-2 bg-gray-700 rounded-md"/>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="category">Category</label>
        <select id="category" value={category} onChange={(e) => setCategory(e.target.value)} required className="w-full p-2 bg-gray-700 rounded-md">
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="frozen foods">Frozen Foods</option>
          <option value="canned goods">Canned Goods</option>
          <option value="dry goods">Dry Goods</option>
          <option value="beverages">Beverages</option>
          <option value="snacks">Snacks</option>
          <option value="household">Household</option>
          <option value="other">Other</option>
        </select>
      </div>
      <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md">Add Item</button>
    </form>
  );
}
