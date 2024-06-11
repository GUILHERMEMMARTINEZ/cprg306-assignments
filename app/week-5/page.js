import Link from 'next/link';
import ItemList from './item-list';

export default function Week5Page() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-4 relative">
      <Link href="/" legacyBehavior>
        <a className="absolute top-4 left-4 text-lg text-blue-500 hover:underline">Back</a>
      </Link>
      <h1 className="text-4xl font-bold mb-8">Shopping List</h1>
      <ItemList />
    </main>
  );
}
