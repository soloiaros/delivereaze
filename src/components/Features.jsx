import { MessageSquare, Zap, BarChart3, Shield } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: MessageSquare,
      title: "Proactive Outreach",
      description: "AI automatically detects order issues and reaches out to customers before they complain.",
    },
    {
      icon: Zap,
      title: "Instant Resolution",
      description: "Resolve customer concerns in seconds with intelligent, personalized responses.",
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Track satisfaction scores, resolution rates, and identify recurring issues.",
    },
    {
      icon: Shield,
      title: "Brand Protection",
      description: "Turn potential negative reviews into positive experiences automatically.",
    },
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl lg:text-5xl mb-6 text-dark">
            Powerful Features for Modern Restaurants
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to deliver exceptional customer service at scale
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 md:p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-6 icon-box-accent">
                <feature.icon className="w-7 h-7 text-dark" />
              </div>
              <h3 className="text-xl mb-4 text-dark">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
