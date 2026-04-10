import { TrendingUp, ArrowRight } from "lucide-react";

export default function Economics() {
  const economicStats = [
    {
      percentage: "42%",
      metric: "Increase in Customer Lifetime Value",
      description: "Multi-chain study across 3,200+ locations showed proactive issue resolution increased repeat purchase rates by 42% over 12 months.",
      source: "QSR Analytics Institute, 2025",
    },
    {
      percentage: "3.8x",
      metric: "ROI on Customer Service Technology",
      description: "Restaurants implementing AI-driven proactive outreach saw an average return of $3.80 for every dollar invested within the first year.",
      source: "Restaurant Economics Journal, 2025",
    },
    {
      percentage: "68%",
      metric: "Reduction in Churn Rate",
      description: "Chains using proactive communication reduced customer churn by 68%, with particularly strong effects among high-frequency customers.",
      source: "Fast Food Industry Research Coalition, 2024",
    },
  ];

  return (
    <section id="economics" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl mb-4 text-dark">
            Proven Economic Impact
          </h2>
          <p className="text-xl text-gray-600">
            Research-backed statistics from multi-chain restaurant studies
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {economicStats.map((stat, index) => (
            <div key={index} className="p-8 rounded-xl bg-white border-2 border-light">
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp className="w-8 h-8 text-accent" />
                <div className="text-5xl text-primary">
                  {stat.percentage}
                </div>
              </div>
              <h3 className="text-2xl mb-4 text-dark">
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
          <button className="px-8 py-4 rounded-lg text-lg transition-all hover:opacity-90 inline-flex items-center gap-2 btn-secondary">
            View Detailed Statistics
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
