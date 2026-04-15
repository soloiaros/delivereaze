import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ImageWithFallback from "./ImageWithFallback";
import Popover from "./Popover";
import scooter from "../assets/scooter.svg";
import motionLines from "../assets/motion-lines.svg";
import mockup from "../assets/mockup.png";

export default function Hero() {
  const scooterRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const buttonRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (scooterRef.current) {
      observer.observe(scooterRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative z-10 bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <div className="relative inline-block mb-6">
              <div 
                ref={scooterRef}
                className={`absolute -top-7 left-4 flex items-end gap-1 ${isVisible ? "scooter-container-entry" : "opacity-0"}`}
              >
                <img 
                  src={motionLines} 
                  alt="" 
                  className="w-[38px] h-[19px] motion-lines-animation mb-1"
                />
                <img 
                  src={scooter} 
                  alt="Delivery Scooter" 
                  className="w-[29px] h-[29px] scooter-animation"
                />
              </div>
              <div className="inline-block px-4 py-2 rounded-full text-sm badge">
                AI-Powered Customer Care
              </div>
            </div>
            <h1 className="text-4xl lg:text-6xl mb-6 text-dark">
              Turn Order Issues Into Customer Loyalty
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Our AI detects potential order problems and proactively reaches out to customers, 
              resolving issues before frustration sets in. Built specifically for fast food chains.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative">
                <button 
                  ref={buttonRef}
                  onClick={() => setIsPopoverOpen(!isPopoverOpen)}
                  className="px-8 py-4 rounded-lg text-lg flex items-center justify-center gap-2 btn-primary btn-hover-effect"
                >
                  Get on the waitlist
                  <ArrowRight className="w-5 h-5" />
                </button>
                <Popover 
                  isOpen={isPopoverOpen} 
                  onClose={() => setIsPopoverOpen(false)} 
                  anchorRef={buttonRef}
                />
              </div>
              <Link to="/demo" className="px-8 py-4 rounded-lg border-2 text-lg flex items-center justify-center gap-2 btn-outline btn-hover-effect">
                Watch Demo
              </Link>
            </div>
          </div>
          <div className="relative">
            <ImageWithFallback
              src={mockup}
              alt="AI Interface Dashboard"
              className="rounded-2xl shadow-2xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
