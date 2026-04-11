import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import ImageWithFallback from "./ImageWithFallback";
import scooter from "../assets/scooter.svg";
import motionLines from "../assets/motion-lines.svg";

export default function Hero() {
  const scooterRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

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
    <section className="relative overflow-hidden bg-white py-16 md:py-24">
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
              <button className="px-8 py-4 rounded-lg text-lg flex items-center justify-center gap-2 btn-primary btn-hover-effect">
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 rounded-lg border-2 text-lg flex items-center justify-center gap-2 btn-outline btn-hover-effect">
                Watch Demo
              </button>
            </div>
          </div>
          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1758626052247-79003b45f802?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwdGVjaG5vbG9neSUyMGludGVyZmFjZXxlbnwxfHx8fDE3NzU4NDk0NDV8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="AI Interface Dashboard"
              className="rounded-2xl shadow-2xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
