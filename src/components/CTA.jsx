export default function CTA() {
  return (
    <section className="py-16 md:py-24 bg-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl lg:text-5xl mb-6 text-white">
            Ready to Transform Your Customer Experience?
          </h2>
          <p className="text-xl text-white opacity-90">
            Start your free 14-day trial. No credit card required.
          </p>
        </div>
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
  );
}
