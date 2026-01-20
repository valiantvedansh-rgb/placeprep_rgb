import { Routes, Route } from "react-router-dom";

// Landing components
import Hero from "./components/hero";
import Features from "./components/features";

// Prep app page (logic lives here)
import PrepApp from "./pages/PrepApp";

/* ---------------- HOME (Landing Page) ---------------- */

function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Hero />
      <Features />

      <footer className="text-center text-gray-500 pb-10">
        © {new Date().getFullYear()} PlacePrep. All rights reserved.
      </footer>
    </div>
  );
}

/* ---------------- GET STARTED ---------------- */

function GetStarted() {
  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center text-center px-6">
      <h2 className="text-4xl font-bold mb-4">Get Started</h2>
      <p className="text-gray-400 mb-6">
        This is where signup, login, or onboarding will go.
      </p>
    </div>
  );
}

/* ---------------- APP ROUTES ---------------- */

export default function App() {
  return (
    <Routes>
      {/* Landing */}
      <Route path="/" element={<Home />} />

      {/* Onboarding */}
      <Route path="/get-started" element={<GetStarted />} />

      {/* Core Prep App */}
      <Route path="/app" element={<PrepApp />} />
    </Routes>
  );
}
