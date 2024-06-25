"use client";

export default function Item({ name, quantity, category, onSelect }) {
  return (
    <li
      onClick={onSelect}
      className="cursor-pointer p-4 bg-gray-800 rounded hover:bg-gray-700"
    >
      <h3 className="text-lg font-bold">{name}</h3>
      <p className="text-gray-400">Buy {quantity} in {category}</p>
    </li>
  );
}
