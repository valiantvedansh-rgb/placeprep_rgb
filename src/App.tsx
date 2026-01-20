import { Routes, Route, Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-32">
        <h1 className="text-5xl font-bold mb-6">
          Welcome to <span className="text-blue-500">PlacePrep</span>
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mb-8">
          Your all-in-one platform to prepare, practice, and perform better.
          Build skills, track progress, and get placement-ready.
        </p>

        {/* Button now routes */}
        <Link
          to="/get-started"
          className="px-8 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition"
        >
          Get Started
        </Link>
      </section>

      {/* Features */}
      <section className="grid md:grid-cols-3 gap-8 px-10 pb-32">
        <div className="bg-gray-900 p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-2">Smart Preparation</h3>
          <p className="text-gray-400">
            Curated resources and structured learning paths.
          </p>
        </div>
        <div className="bg-gray-900 p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-2">Practice & Track</h3>
          <p className="text-gray-400">
            Practice questions and track your improvement.
          </p>
        </div>
        <div className="bg-gray-900 p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-2">Placement Ready</h3>
          <p className="text-gray-400">
            Prepare confidently for interviews and placements.
          </p>
        </div>
      </section>

      <footer className="text-center text-gray-500 pb-10">
        © {new Date().getFullYear()} PlacePrep. All rights reserved.
      </footer>
    </div>
  );
}

function GetStarted() {
  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center text-center px-6">
      <h2 className="text-4xl font-bold mb-4">Get Started</h2>
      <p className="text-gray-400 mb-6">
        This is where signup, login, or onboarding will go.
      </p>

      <Link
        to="/"
        className="px-6 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition"
      >
        Back to Home
      </Link>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/get-started" element={<GetStarted />} />
    </Routes>
  );
}
