import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-900 text-white p-4">
      <div className="border border-gray-700 p-10 rounded-lg shadow-lg text-center">
        <h1 className="text-5xl font-bold mb-4">CPRG 306: Web Development 2 - Assignments</h1>
        <p className="text-xl mb-8">by Guilherme de Andrade Martinez Marques</p>
        <nav>
          <ul className="space-y-4">
            <li>
              <Link href="/week-2" className="text-xl text-blue-400 hover:text-blue-600">Week 2 Assignment</Link>
            </li>
            <li>
              <Link href="/week-3" className="text-xl text-blue-400 hover:text-blue-600">Week 3 Assignment</Link>
            </li>
            <li>
              <Link href="/week-4" className="text-xl text-blue-400 hover:text-blue-600">Week 4 Assignment</Link>
            </li>
            <li>
              <Link href="/week-5" className="text-xl text-blue-400 hover:text-blue-600">Week 5 Assignment</Link>
            </li>
            <li>
              <Link href="/week-6" className="text-xl text-blue-400 hover:text-blue-600">Week 6 Assignment</Link>
            </li>
          </ul>
        </nav>
      </div>
    </main>
  );
}
