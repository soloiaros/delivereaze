import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function DetailedStats() {
  return (
    <div className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
        </div>
        <div className="text-center">
          <h1 className="text-4xl lg:text-6xl mb-6 text-dark">
            Detailed Statistics
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Comprehensive analysis and metrics will be displayed here.
          </p>
          <div className="h-64 border-2 border-dashed border-gray-300 rounded-xl flex items-center justify-center text-gray-400">
            [Detailed Stats Placeholder]
          </div>
        </div>
      </div>
    </div>
  );
}
