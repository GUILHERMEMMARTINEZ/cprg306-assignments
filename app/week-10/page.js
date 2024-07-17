"use client";
import { useUserAuth } from "./_utils/auth-context";
import Link from 'next/link';

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white p-4">
      <div className="border border-gray-700 p-10 rounded-lg shadow-lg text-center">
        {user ? (
          <>
            <p>Welcome, {user.displayName} ({user.email})</p>
            <button onClick={firebaseSignOut} className="mt-4 px-4 py-2 bg-red-600 rounded-lg">Log Out</button>
            <Link href="/week-10/shopping-list" className="mt-4 block text-blue-400 hover:text-blue-600">Go to Shopping List</Link>
          </>
        ) : (
          <>
            <h1 className="text-5xl font-bold mb-4">Welcome to Shopping List App</h1>
            <button onClick={gitHubSignIn} className="px-4 py-2 bg-blue-600 rounded-lg">Log in with GitHub</button>
          </>
        )}
      </div>
    </div>
  );
}
