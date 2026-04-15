import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Popover from "./Popover";

export default function CTA() {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const buttonRef = useRef(null);

  return (
    <section className="py-16 md:py-24 bg-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl lg:text-5xl mb-6 text-white">
            Ready to Transform Your Customer Experience?
          </h2>
          <p className="text-xl text-white opacity-90">
            Join our waitlist for early access to our platform.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <div className="relative">
            <button 
              ref={buttonRef}
              onClick={() => setIsPopoverOpen(!isPopoverOpen)}
              className="px-8 py-4 rounded-lg border-2 border-transparent hover:border-white text-lg btn-primary btn-hover-effect"
            >
              Get on the waitlist
            </button>
            <Popover 
              isOpen={isPopoverOpen} 
              onClose={() => setIsPopoverOpen(false)} 
              anchorRef={buttonRef}
            />
          </div>
          <Link 
            to="/demo"
            className="px-8 py-4 rounded-lg border-2 border-white text-white text-lg btn-hover-effect flex items-center justify-center"
            style={{ '--hover-bg': 'white', '--hover-text': 'var(--color-primary)' }}
          >
            Watch Demo
          </Link>
        </div>
      </div>
    </section>
  );
}
