import { useState, useRef } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/Union.svg";
import Popover from "./Popover";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDesktopPopoverOpen, setIsDesktopPopoverOpen] = useState(false);
  const [isMobilePopoverOpen, setIsMobilePopoverOpen] = useState(false);
  
  const desktopButtonRef = useRef(null);
  const mobileButtonRef = useRef(null);

  return (
    <nav className="border-b bg-white sticky top-0 z-50 border-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <img src={logo} alt="delivereaze.ai logo" className="w-10 h-10" />
            <span className="text-xl text-dark font-medium">delivereaze.ai</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/stats" className="text-gray-600 hover:text-gray-900 transition-colors">Research</Link>
            <Link to="/demo" className="text-gray-600 hover:text-gray-900 transition-colors">Demo</Link>
            <div className="relative">
              <button 
                ref={desktopButtonRef}
                onClick={() => setIsDesktopPopoverOpen(!isDesktopPopoverOpen)}
                className="px-6 py-2 rounded-lg transition-all hover:opacity-90 btn-primary"
              >
                Get Started
              </button>
              <Popover 
                isOpen={isDesktopPopoverOpen} 
                onClose={() => setIsDesktopPopoverOpen(false)} 
                anchorRef={desktopButtonRef}
              />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-white border-light">
          <div className="px-4 py-4 space-y-3">
            <Link to="/stats" className="block text-gray-600 hover:text-gray-900">Research</Link>
            <Link to="/demo" className="block text-gray-600 hover:text-gray-900">Demo</Link>
            <div className="relative">
              <button 
                ref={mobileButtonRef}
                onClick={() => setIsMobilePopoverOpen(!isMobilePopoverOpen)}
                className="w-full px-6 py-2 rounded-lg btn-primary"
              >
                Get Started
              </button>
              <Popover 
                isOpen={isMobilePopoverOpen} 
                onClose={() => setIsMobilePopoverOpen(false)} 
                anchorRef={mobileButtonRef}
              />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
