import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Benefits from "./components/Benefits";
import Economics from "./components/Economics";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import "./App.scss";

export default function App() {
  return (
    <div className="min-h-screen page-container">
      <Navigation />
      <Hero />
      <Features />
      <HowItWorks />
      <Benefits />
      <Economics />
      <CTA />
      <Footer />
    </div>
  );
}
