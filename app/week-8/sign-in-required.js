export default function SignInRequired() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white p-4">
      <div className="border border-gray-700 p-10 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold mb-4">Sign In Required</h1>
        <p className="text-xl mb-8">You need to be signed in to view this page.</p>
        <a href="/week-8" className="text-blue-400 hover:text-blue-600">
          Go to Login Page
        </a>
      </div>
    </div>
  );
}
