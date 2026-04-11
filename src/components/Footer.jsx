import logo from "../assets/Union.svg";

export default function Footer() {
  return (
    <footer className="text-alt py-12 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 md:gap-12 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="delivereaze.ai logo" className="w-8 h-8 logo-alt-filter" />
              <span className="text-alt font-medium">delivereaze.ai</span>
            </div>
            <p className="text-sm opacity-80">
              Proactive customer care for modern restaurants
            </p>
          </div>
          <div>
            <h4 className="text-alt font-bold mb-4">Product</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-alt font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-alt font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t pt-8 text-sm text-center border-primary opacity-60">
          © 2026 delivereaze.ai. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
