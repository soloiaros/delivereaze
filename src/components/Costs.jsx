import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import "./Costs.scss";

const costsData = [
  {
    category: "LLM API (Gemini 3 Flash)",
    items: "Average scenario (39.2k calls/day, 400 in/50 out tokens)",
    monthly: "$14",
    yearly: "$168"
  },
  {
    category: "Tech & Infrastructure",
    items: "AWS/GCP hosting, DB, Twilio/Email APIs, SaaS tools (Workspace, GitHub)",
    monthly: "$250",
    yearly: "$3,000"
  },
  {
    category: "Labor (Founders)",
    items: "Minimal viable salary for 2 founders (living expenses)",
    monthly: "$2,000",
    yearly: "$24,000"
  },
  {
    category: "Labor (Outsourced)",
    items: "Occasional freelance design/dev/security work",
    monthly: "$500",
    yearly: "$6,000"
  },
  {
    category: "Legal, Admin & Workspace",
    items: "Mali Müşavir, Bağ-Kur (social security), legal, coworking",
    monthly: "$700",
    yearly: "$8,400"
  },
  {
    category: "Sales & Marketing",
    items: "CRM (HubSpot), LinkedIn Nav, B2B travel/meetings",
    monthly: "$250",
    yearly: "$3,000"
  },
  {
    category: "TOTAL",
    items: "",
    monthly: "$3,714",
    yearly: "$44,568",
    isTotal: true
  }
];

const sources = [
  "https://www.stgm.org.tr/sites/default/files/2024-02/2023-yemeksepeti-delivery-worker-rights-violations-report.pdf",
  "https://pemlak.com/en/blog/dostavka-edy-i-produktov-v-turtsii-kak-ustroen-onlayn-shoping-dlya-povsednevnoy-zhizni-b8aee048-e60e-4c5d-9641-7b8e0d089824",
  "https://www.globaltrademag.com/qsr-chains-reduce-delivery-times-by-35-using-ai-based-tech/",
  "https://powerdrill.ai/blog/why-your-food-always-comes-later-analysis",
  "https://foodondemand.com/09262024/doordash-tops-intouch-insight-report-on-delivery-performance/"
];

export default function Costs() {
  return (
    <div className="costs-page">
      <header className="costs-header">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
          <Link to="/" className="back-link">
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Overview</span>
          </Link>
          <div className="technical-label">SUSTAINABILITY_COSTS_v1.0</div>
        </div>
      </header>

      <main className="costs-content">
        <h1 className="text-4xl font-bold mb-12 tracking-tight">Sustainability Costs</h1>

        <div className="table-container">
          <div className="corner-dot top-left" />
          <div className="corner-dot top-right" />
          <div className="corner-dot bottom-left" />
          <div className="corner-dot bottom-right" />
          <div className="technical-marker">Operational_Expenditure_Breakdown</div>
          
          <table className="costs-table">
            <thead>
              <tr>
                <th>Expense Category</th>
                <th>Included Items</th>
                <th className="text-right">Monthly (USD)</th>
                <th className="text-right">Yearly (USD)</th>
              </tr>
            </thead>
            <tbody>
              {costsData.map((row, index) => (
                <tr key={index} className={row.isTotal ? "total-row" : ""}>
                  <td className="category-cell">{row.category}</td>
                  <td className="items-cell">{row.items}</td>
                  <td className="cost-cell">{row.monthly}</td>
                  <td className="cost-cell">{row.yearly}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <section className="sources-section">
          <h2>Sources that we based our calculations on</h2>
          <div className="sources-list">
            {sources.map((url, index) => (
              <a key={index} href={url} target="_blank" rel="noopener noreferrer">
                {url}
              </a>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
