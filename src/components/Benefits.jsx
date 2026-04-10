import { CheckCircle } from "lucide-react";
import ImageWithFallback from "./ImageWithFallback";

export default function Benefits() {
  const benefits = [
    "Reduce customer complaints by up to 70%",
    "Increase customer retention and loyalty",
    "Save hours on manual customer service",
    "Improve online ratings and reviews",
    "Gain actionable insights from order data",
    "Scale support without hiring more staff",
  ];

  return (
    <section id="benefits" className="py-20 bg-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGRhc2hib2FyZCUyMGFuYWx5dGljc3xlbnwxfHx8fDE3NzU4MDU4NzF8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Analytics Dashboard"
              className="rounded-2xl shadow-xl w-full"
            />
          </div>
          <div>
            <h2 className="text-3xl lg:text-5xl mb-6 text-dark">
              Measurable Results From Day One
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join hundreds of restaurants already delivering exceptional experiences
            </p>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5 text-accent" />
                  <span className="text-lg text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
