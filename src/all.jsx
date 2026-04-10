import { useState } from "react";
import { MessageSquare, Zap, BarChart3, Shield, ArrowRight, CheckCircle, Menu, X, TrendingUp } from "lucide-react";
import "./all.scss";

function ImageWithFallback(props) {
  const [didError, setDidError] = useState(false);
  const { src, alt, style, className, ...rest } = props;

  return didError ? (
    <div
      className={`inline-block bg-gray-100 text-center align-middle ${className ?? ""}`}
      style={style}
    >
      <div className="flex items-center justify-center w-full h-full">
        <img
          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg=="
          alt="Error loading image"
          {...rest}
          data-original-url={src}
        />
      </div>
    </div>
  ) : (
    <img
      src={src}
      alt={alt}
      className={className}
      style={style}
      {...rest}
      onError={() => setDidError(true)}
    />
  );
}

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const benefits = [
    "Reduce customer complaints by up to 70%",
    "Increase customer retention and loyalty",
    "Save hours on manual customer service",
    "Improve online ratings and reviews",
    "Gain actionable insights from order data",
    "Scale support without hiring more staff",
  ];

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
    <div className="min-h-screen page-container">
      {/* Navigation */}
      <nav className="border-b bg-white sticky top-0 z-50 border-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-primary">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl text-dark">OrderCare AI</span>
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

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 rounded-full text-sm mb-6 badge">
                AI-Powered Customer Care
              </div>
              <h1 className="text-4xl lg:text-6xl mb-6 text-dark">
                Turn Order Issues Into Customer Loyalty
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Our AI detects potential order problems and proactively reaches out to customers, 
                resolving issues before frustration sets in. Built specifically for fast food chains.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 rounded-lg text-lg flex items-center justify-center gap-2 transition-all hover:opacity-90 btn-primary">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="px-8 py-4 rounded-lg border-2 text-lg transition-all hover:opacity-80 btn-outline">
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

      {/* Features Section */}
      <section id="features" className="py-20 bg-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl mb-4 text-dark">
              Powerful Features for Modern Restaurants
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to deliver exceptional customer service at scale
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-6 icon-box-accent">
                  <feature.icon className="w-7 h-7 text-dark" />
                </div>
                <h3 className="text-xl mb-3 text-dark">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl mb-4 text-dark">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Simple integration, powerful results
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl step-circle">
                1
              </div>
              <h3 className="text-2xl mb-4 text-dark">Connect Your System</h3>
              <p className="text-gray-600">
                Integrate with your existing POS and order management systems in minutes.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl step-circle">
                2
              </div>
              <h3 className="text-2xl mb-4 text-dark">AI Monitors Orders</h3>
              <p className="text-gray-600">
                Our AI analyzes every order in real-time to detect potential issues or delays.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl step-circle">
                3
              </div>
              <h3 className="text-2xl mb-4 text-dark">Automatic Outreach</h3>
              <p className="text-gray-600">
                Customers receive proactive, personalized messages addressing their concerns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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

      {/* Economics Section */}
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

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-5xl mb-6 text-white">
            Ready to Transform Your Customer Experience?
          </h2>
          <p className="text-xl mb-8 text-white opacity-90">
            Start your free 14-day trial. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 rounded-lg text-lg hover:opacity-90 transition-opacity btn-primary">
              Start Free Trial
            </button>
            <button className="px-8 py-4 rounded-lg border-2 border-white text-white text-lg hover:bg-white/10 transition-colors">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-gray-400 py-12 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-primary">
                  <MessageSquare className="w-5 h-5 text-white" />
                </div>
                <span className="text-white">OrderCare AI</span>
              </div>
              <p className="text-sm">
                Proactive customer care for modern restaurants
              </p>
            </div>
            <div>
              <h4 className="text-white mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t pt-8 text-sm text-center border-primary">
            © 2026 OrderCare AI. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
