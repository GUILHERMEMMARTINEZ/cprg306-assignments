"use client";

export default function Item({ id, name, quantity, category, onSelect, onDelete }) {
  return (
    <li
      className="cursor-pointer p-4 bg-gray-800 rounded hover:bg-gray-700 flex justify-between items-center"
    >
      <div onClick={onSelect}>
        <h3 className="text-lg font-bold">{name}</h3>
        <p className="text-gray-400">Buy {quantity} in {category}</p>
      </div>
      <button
        onClick={(e) => {
          e.stopPropagation(); 
          onDelete(id);
        }}
        className="ml-4 px-2 py-1 bg-red-600 text-white rounded-lg"
      >
        Delete
      </button>
    </li>
  );
}
