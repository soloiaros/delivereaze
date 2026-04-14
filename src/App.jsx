import { Routes, Route, useLocation } from "react-router-dom";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Benefits from "./components/Benefits";
import Statistics from "./components/Statistics";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import DetailedStats from "./components/DetailedStats";
import Demo from "./components/Demo";
import "./App.scss";

function Home() {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <Benefits />
      <Statistics />
      <CTA />
    </>
  );
}

export default function App() {
  const location = useLocation();
  const isDemoPage = location.pathname === "/demo";

  return (
    <div className="min-h-screen page-container">
      {!isDemoPage && <Navigation />}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stats" element={<DetailedStats />} />
          <Route path="/demo" element={<Demo />} />
        </Routes>
      </main>
      {!isDemoPage && <Footer />}
    </div>
  );
}
