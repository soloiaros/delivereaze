export default function HowItWorks() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl lg:text-5xl mb-6 text-dark">
            How It Works
          </h2>
          <p className="text-xl text-gray-600">
            Simple integration, powerful results
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
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
  );
}
