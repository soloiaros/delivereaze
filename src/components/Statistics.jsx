import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { TrendingUp, ArrowRight } from "lucide-react";

export default function Statistics() {
  const [activeCard, setActiveCard] = useState(null);
  const cardRefs = useRef([]);

  const statistics = [
    {
      percentage: "58%",
      metric: "Willingness to Wait",
      description: "58% of consumers are willing to wait 10+ minutes longer if the wait is explained and managed proactively.",
      source: "Retail Insider, 2025",
    },
    {
      percentage: "93%",
      metric: "Quick Resolution Expectation",
      description: "When a delivery goes wrong, 93% of consumers expect the issue to be resolved in under 10 minutes.",
      source: "ZipDo Customer Experience Statistics, 2024",
    },
    {
      percentage: "92%",
      metric: "Brand Loyalty through Recovery",
      description: "92% of customers are likely to buy from a brand again if they get a quick, empathetic resolution to a problem.",
      source: "ZipDo Customer Experience Statistics, 2024",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveCard(Number(entry.target.getAttribute("data-index")));
          }
        });
      },
      {
        rootMargin: "-40% 0% -40% 0%",
        threshold: 0,
      }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="statistics" className="py-16 md:py-24 bg-white text-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl lg:text-5xl mb-6 text-dark">
            Proven Statistics
          </h2>
          <p className="text-xl text-gray-600">
            Research-backed data from global restaurant and delivery studies
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-12 group">
          {statistics.map((stat, index) => (
            <div 
              key={index} 
              ref={(el) => (cardRefs.current[index] = el)}
              data-index={index}
              className={`p-6 md:p-8 rounded-xl bg-white border-2 border-light transition-all duration-300 ease-out 
                ${activeCard === index 
                  ? "max-md:scale-110 max-md:opacity-100 max-md:shadow-2xl max-md:z-10" 
                  : "max-md:scale-95 max-md:opacity-60"
                } 
                md:group-hover:scale-95 md:group-hover:opacity-60 md:hover:!scale-110 md:hover:!opacity-100 md:hover:shadow-2xl md:hover:z-10`}
            >
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp className="w-8 h-8 text-accent" />
                <div className="text-5xl text-primary font-bold">
                  {stat.percentage}
                </div>
              </div>
              <h3 className="text-2xl mb-4 text-dark font-semibold">
                {stat.metric}
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                {stat.description}
              </p>
              <p className="text-sm text-gray-500 italic">
                Source: {stat.source}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link 
            to="/stats" 
            className="px-8 py-4 rounded-lg text-lg inline-flex items-center gap-2 btn-secondary btn-hover-effect"
          >
            View Detailed Statistics
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
