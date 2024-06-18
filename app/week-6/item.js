export default function Item({ name, quantity, category }) {
    return (
      <li className="bg-purple-800 p-4 rounded-md shadow-md mb-6">
        <h2 className="text-lg font-bold text-green-300">{name}</h2>
        <p className="text-green-200">Buy {quantity} in {category}</p>
      </li>
    );
  }
  