export default function Item({ name, quantity, category }) {
  return (
    <li className="p-4 mb-4 bg-gray-800 rounded-lg shadow-lg border border-gray-700">
      <div className="font-semibold text-xl text-white">{name}</div>
      <div className="text-gray-400">Buy {quantity} in {category}</div>
    </li>
  );
}

