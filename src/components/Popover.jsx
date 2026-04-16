import React, { useEffect, useRef } from "react";
import { X } from "lucide-react";

export default function Popover({ isOpen, onClose, anchorRef }) {
  const popoverRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target) &&
        anchorRef.current &&
        !anchorRef.current.contains(event.target)
      ) {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      // Prevent scroll when popover is open on mobile
      if (window.innerWidth < 768) {
        document.body.style.overflow = "hidden";
      }
    } else {
      document.body.style.overflow = "unset";
    }
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose, anchorRef]);

  if (!isOpen) return null;

  return (
    <>
      {/* Mobile Backdrop */}
      <div 
        className="fixed inset-0 bg-black/20 z-[90] md:hidden backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      <div
        ref={popoverRef}
        className="absolute top-full mt-4 right-0 md:left-auto md:translate-x-0 z-[100] w-[280px] sm:w-[320px] bg-white rounded-2xl shadow-2xl border border-light p-6 transition-all duration-200 ease-out animate-popover-in"
      >
        {/* Arrow/Tip */}
        <div className="absolute -top-2 right-8 md:right-12 md:left-auto md:translate-x-0 w-4 h-4 bg-white border-t border-l border-light rotate-45" />

        <div className="relative">
          <button
            onClick={onClose}
            className="absolute -top-1 -right-1 p-1 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Close popover"
          >
            <X className="w-4 h-4" />
          </button>

          <p className="text-dark font-semibold text-lg mb-4 pr-4">
            Launching soon! Stay tuned:
          </p>

          <form 
            method="post" 
            action="https://sheetdb.io/api/v1/9s3vcl0blt3wy"
            onSubmit={async (e) => {
              e.preventDefault();
              const formData = new FormData(e.target);
              const data = Object.fromEntries(formData.entries());
              await fetch('https://sheetdb.io/api/v1/9s3vcl0blt3wy', {
                method: 'POST',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({ data: data })
              });
              onClose();
            }} 
            className="space-y-3"
          >
            <div className="relative">
              <input
                type="email"
                name="email"
                placeholder="email@example.com"
                className="w-full px-4 py-3 rounded-xl border border-light focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all text-sm bg-gray-50/50"
                required
              />
              <input
                name="date" 
                type="hidden" 
                value={new Date(Date.now())}
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-xl btn-primary text-sm font-bold transition-all hover:scale-[1.02] active:scale-[0.98] shadow-md"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      <style jsx>{`
        @keyframes popover-in {
          from {
            opacity: 0;
            transform: translateY(10px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .animate-popover-in {
          animation: popover-in 0.2s ease-out forwards;
        }
      `}</style>
    </>
  );
}
