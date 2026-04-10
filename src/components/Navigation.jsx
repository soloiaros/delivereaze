import { useState } from "react";
import { MessageSquare, Menu, X } from "lucide-react";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="border-b bg-white sticky top-0 z-50 border-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-primary">
              <MessageSquare className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl text-dark">delivereaze.ai</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
            <a href="#benefits" className="text-gray-600 hover:text-gray-900 transition-colors">Benefits</a>
            <a href="#economics" className="text-gray-600 hover:text-gray-900 transition-colors">Economics</a>
            <button className="px-6 py-2 rounded-lg transition-all hover:opacity-90 btn-primary">
              Get Started
            </button>
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
            <a href="#features" className="block text-gray-600 hover:text-gray-900">Features</a>
            <a href="#benefits" className="block text-gray-600 hover:text-gray-900">Benefits</a>
            <a href="#economics" className="block text-gray-600 hover:text-gray-900">Economics</a>
            <button className="w-full px-6 py-2 rounded-lg btn-primary">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
