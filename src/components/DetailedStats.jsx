import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import "./DetailedStats.scss";

const IsometricBarChart = () => (
  <svg className="isometric-svg" width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g className="bar-3">
      <path d="M38 35L46 31V41L38 45V35Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M46 31L54 35V45L46 41V31Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M38 35L46 31L54 35L46 39L38 35Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    </g>
    <g className="bar-2">
      <path d="M22 38L30 34V44L22 48V38Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M30 34L38 38V48L30 44V34Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M22 38L30 34L38 38L30 42L22 38Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    </g>
    <g className="bar-1">
      <path d="M6 45L14 41V51L6 55V45Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M14 41L22 45V55L14 51V41Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M6 45L14 41L22 45L14 49L6 45Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    </g>
  </svg>
);

const IsometricToggle = () => (
  <svg className="isometric-svg" width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g className="toggle-wrapper">
      <path className="toggle-base" d="M15 35L30 25L45 35L30 45L15 35Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <path className="toggle-base-side" d="M15 35V39L30 49L45 39V35" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <g className="toggle-knob">
        <path className="knob-top" d="M22 30L30 25L38 30L30 35L22 30Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="var(--stats-bg)"/>
        <path className="knob-side" d="M22 30V34L30 39L38 34V30" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="var(--stats-bg)"/>
      </g>
    </g>
  </svg>
);

const IsometricCylinder = () => (
  <svg className="isometric-svg" width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g className="cylinder-wrapper">
      <ellipse className="cylinder-top" cx="30" cy="20" rx="15" ry="7.5" stroke="currentColor" strokeWidth="1.5" />
      <path className="cylinder-body" d="M15 20 V40 A15 7.5 0 0 0 45 40 V20" stroke="currentColor" strokeWidth="1.5" />
      <path className="cylinder-level" d="M15 30 A15 7.5 0 0 0 45 30" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" />
    </g>
  </svg>
);

const IsometricDial = () => (
  <svg className="isometric-svg" width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g className="dial-wrapper">
      <ellipse cx="30" cy="35" rx="20" ry="10" stroke="currentColor" strokeWidth="1.5" />
      <ellipse cx="30" cy="35" rx="15" ry="7.5" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 3" />
      <path className="dial-hand" d="M30 35 L42 28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle className="dial-center" cx="30" cy="35" r="2" fill="currentColor" />
    </g>
  </svg>
);

const IsometricCube = () => (
  <svg className="isometric-svg" width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g className="cube-wrapper">
      <path className="cube-top" d="M30 15L45 22.5L30 30L15 22.5L30 15Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <path className="cube-side-right" d="M45 22.5V37.5L30 45V30L45 22.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <path className="cube-side-left" d="M15 22.5V37.5L30 45V30L15 22.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    </g>
  </svg>
);

const StatCard = ({ graphic: Graphic, title, description, source, index }) => (
  <div className="stat-card">
    <div className="card-border border-top" />
    <div className="card-border border-right" />
    <div className="card-border border-bottom" />
    <div className="card-border border-left" />
    <div className="corner-dot top-left" />
    <div className="corner-dot top-right" />
    <div className="corner-dot bottom-left" />
    <div className="corner-dot bottom-right" />
    <span className="card-index">{String(index + 1).padStart(2, '0')}</span>
    <div className="card-inner">
      <div className="graphic-container">
        <Graphic />
      </div>
      <h3 className="stat-title">{title}</h3>
      <p className="stat-description">{description}</p>
      {source && (
        <a href={source} target="_blank" rel="noopener noreferrer" className="stat-source">
          source
        </a>
      )}
    </div>
  </div>
);

export default function DetailedStats() {
  const stats = [
    { graphic: IsometricBarChart, title: "Experience Issues", description: <>Over <strong className="stat-percentage">70%</strong> of food delivery consumers experience issues, with late delivery being the primary complaint.</>, source: "https://www.restaurantdive.com/news/research-shows-delivery-pain-points-from-unidentifiable-calls-to-incorrect/584787/" },
    { graphic: IsometricToggle, title: "Wait Time Frustration", description: <>A staggering <strong className="stat-percentage">75%</strong> of consumers rank long waiting times as a major customer service frustration.</>, source: "https://retail-insider.com/retail-insider/2025/06/new-survey-reveals-75-of-consumers-frustrated-by-long-customer-service-wait-times-and-poor-resolutions/" },
    { graphic: IsometricCylinder, title: "Wait Longer Proactively", description: <><strong className="stat-percentage">58%</strong> of consumers are willing to wait 10+ minutes longer if the wait is explained and managed proactively.</>, source: "https://retail-insider.com/retail-insider/2025/06/new-survey-reveals-75-of-consumers-frustrated-by-long-customer-service-wait-times-and-poor-resolutions/" },
    { graphic: IsometricDial, title: "Demand Personalization", description: <><strong className="stat-percentage">80%</strong> of consumers are more likely to do business with a company offering personalized experiences.</>, source: "https://zipdo.co/customer-experience-in-the-food-industry-statistics/" },
    { graphic: IsometricCube, title: "Contextual Loyalty", description: <><strong className="stat-percentage">55%</strong> of consumers are more likely to return to a restaurant that remembers their exact order preferences.</>, source: "https://zipdo.co/customer-experience-in-the-food-industry-statistics/" },
    { graphic: IsometricToggle, title: "Churn (No Personalization)", description: <><strong className="stat-percentage">37%</strong> of customers have switched restaurants due to a lack of personalization in their experience.</>, source: "https://zipdo.co/customer-experience-in-the-food-industry-statistics/" },
    { graphic: IsometricBarChart, title: "Expect Quick Resolution", description: <>When a delivery goes wrong, <strong className="stat-percentage">93%</strong> of consumers expect the issue to be resolved in under 10 minutes.</>, source: "https://zipdo.co/customer-experience-in-the-food-industry-statistics/" },
    { graphic: IsometricDial, title: "Value Human Recovery", description: <><strong className="stat-percentage">92%</strong> of customers are likely to buy from a brand again if they get a quick, empathetic resolution to a problem.</>, source: "https://zipdo.co/customer-experience-in-the-food-industry-statistics/" },
  ];

  return (
    <div className="stats-page">
      <header className="stats-header">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
          <Link to="/" className="back-link">
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Overview</span>
          </Link>
          <div className="technical-label">SYSTEM_METRICS_V1.0</div>
        </div>
      </header>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <StatCard key={index} index={index} {...stat} />
          ))}
        </div>

        <section className="product-justification mt-20" style={{ color: 'var(--stats-color)' }}>
          <h2 className="text-3xl font-bold mb-8 pb-4 border-b" style={{ borderColor: 'var(--stats-border-color)' }}>Product's Justification</h2>

          <div className="justification-section mb-12">
            <h3 className="text-2xl font-semibold mb-4">1. Expectation Management & Proactive Problem Reduction</h3>
            <p className="mb-4 leading-relaxed">
              Customer satisfaction fundamentally resides in the alignment of service expectations with actual service delivery. Rather than asserting aggressive delivery time estimates that carry a high probability of failure, our platform leverages dynamic buffering and intelligent order grouping to preemptively mitigate delays.
            </p>
            <p className="mb-4 leading-relaxed">
              The underlying data highlights significant operational challenges: Over 70% of food delivery consumers report experiencing service issues, with late deliveries constituting the primary complaint at 50%, closely followed by the delivery of cold or non-fresh food at 36%. Furthermore, 75% of consumers identify extended wait times as a critical customer service frustration. However, proactive expectation management significantly alters this dynamic: 58% of consumers express a willingness to endure wait times extended by 10 minutes or more, provided the delay is transparently communicated and proactively managed.
            </p>
            <p className="mb-4 leading-relaxed">
              Our strategic solution involves deliberately shaping user expectations. This includes presenting a dynamically calculated delivery buffer—adjusted in real-time according to weather conditions, courier availability, and kitchen capacity—while simultaneously incentivizing customers who opt for flexible delivery windows. By structurally engineering potential problems out of the delivery lifecycle, the platform effectively mitigates the elevated customer churn rates typically associated with delayed and poorly communicated service.
            </p>
            <div className="sources text-sm mt-4" style={{ color: 'var(--stats-color-muted)' }}>
              <div className="mb-1">https://www.restaurantdive.com/news/research-shows-delivery-pain-points-from-unidentifiable-calls-to-incorrect/584787/</div>
              <div>https://retail-insider.com/retail-insider/2025/06/new-survey-reveals-75-of-consumers-frustrated-by-long-customer-service-wait-times-and-poor-resolutions/</div>
            </div>
          </div>

          <div className="justification-section mb-12">
            <h3 className="text-2xl font-semibold mb-4">2. Customer Profiling & Hyper-Personalization</h3>
            <p className="mb-4 leading-relaxed">
              Relying on generalized averages can be highly misleading. Processing a large family order on a Friday evening identically to a single lunch order on a Tuesday critically ignores situational context. Our SaaS platform transcends basic RFM metrics by utilizing sophisticated behavioral signals.
            </p>
            <p className="mb-4 leading-relaxed">
              Market data underscores the critical demand for personalized services: 80% of consumers demonstrate a higher propensity to engage with businesses offering personalized experiences, while 72% indicate that tailored recommendations enhance their sense of value as customers. Additionally, contextual loyalty is a significant driver, as 55% of consumers are more likely to return to establishments that accurately recall their specific order preferences, such as delivery time flexibility or ingredient modifications. Conversely, the failure to personalize directly contributes to customer attrition, with 37% of consumers having abandoned a restaurant due to inadequate personalization.
            </p>
            <p className="mb-4 leading-relaxed">
              Our solution transforms marketing campaigns from generic discount broadcasts into precise behavioral levers. By correlating multi-order behavioral triggers with enriched customer profile data, the platform empowers restaurants to replicate the nuanced, personalized service of a traditional neighborhood establishment at a digital scale, prioritizing individual customer nuances over mere transactional volume.
            </p>
            <div className="sources text-sm mt-4" style={{ color: 'var(--stats-color-muted)' }}>
              <div>https://zipdo.co/customer-experience-in-the-food-industry-statistics/</div>
            </div>
          </div>

          <div className="justification-section mb-12">
            <h3 className="text-2xl font-semibold mb-4">3. The "Satisfaction Wallet" & Mastering the Moment of Failure</h3>
            <p className="mb-4 leading-relaxed">
              In the event of a service failure, it is imperative that the customer is not subjected to ambiguity. The product structurally addresses this by allocating a designated "satisfaction budget" directly to frontline staff. This empowers personnel to execute immediate, tangible compensatory gestures—such as complimentary items or real-time financial compensation—thereby circumventing the often counterproductive issuance of future discount vouchers.
            </p>
            <p className="mb-4 leading-relaxed">
              Industry statistics highlight the strict parameters of customer expectations regarding issue resolution: 93% of consumers expect a service failure to be resolved in under 10 minutes, with 79% demanding direct and transparent communication throughout the resolution process. Furthermore, consumers largely reject purely transactional apologies, as 71% assert that businesses should provide direct financial reimbursement for substandard interactions. Conversely, the implementation of human-centric recovery strategies yields substantial dividends, with 92% of customers expressing a likelihood to repurchase from a brand following a rapid and empathetic resolution.
            </p>
            <p className="mb-4 leading-relaxed">
              Our systematic solution replaces the ineffective distribution of generic discounts with the "Satisfaction Wallet," an algorithmic tool that calculates the projected customer satisfaction increase per monetary unit expended. Through the facilitation of immediate compensatory gestures and proactive failure detection, the platform enables the instantaneous recovery of consumer trust while simultaneously safeguarding operational profit margins.
            </p>
            <div className="sources text-sm mt-4" style={{ color: 'var(--stats-color-muted)' }}>
              <div>https://zipdo.co/customer-experience-in-the-food-industry-statistics/</div>
            </div>
          </div>

          <div className="justification-section mb-12">
            <h3 className="text-2xl font-semibold mb-4">4. Industry Cautionary Tale: When Tech Ignores Context</h3>
            <p className="mb-4 leading-relaxed">
              The integration of digital ordering technology absent store-level contextual awareness and behavioral profiling often results in systemic operational failure due to algorithmic rigidity.
            </p>
            <p className="mb-4 leading-relaxed">
              A prominent example is the Starbucks Mobile Order congestion crisis. While the enterprise aggressively scaled mobile ordering capabilities, it failed to integrate dynamic capacity constraints and customer proximity into its fulfillment timeline promises. Operations analyses concluded that the Starbucks mobile ordering infrastructure generated a critical timing mismatch. The application processed all orders as uniform queue items, neglecting variables such as real-time store capacity, concurrent walk-in traffic volume, and the actual physical arrival time of the ordering customer.
            </p>
            <p className="mb-4 leading-relaxed">
              The outcome was a significant degradation in product quality—with finished items deteriorating on counters—and the generation of severe in-store operational bottlenecks. The fundamental lesson is that static store-level averages are inherently misleading. Algorithms that fail to account for operational micro-patterns, such as specific staffing levels during peak demand periods under adverse weather conditions, systematically degrade the overall customer experience.
            </p>
            <p className="mb-4 leading-relaxed">
              Our platform achieves superior outcomes by leveraging Store-Level and Context-Specific Intelligence. The system autonomously calibrates delivery and preparation promises in response to extreme operational events, meteorological conditions, courier availability, and localized traffic patterns. Rather than merely processing transactions, the platform dynamically optimizes the underlying operational reality, guaranteeing that the delivered service precisely aligns with the established customer expectations.
            </p>
            <div className="sources text-sm mt-4" style={{ color: 'var(--stats-color-muted)' }}>
              <div>https://www.leanblog.org/2026/03/starbucks-mobile-order-timing-problem-chick-fil-a-solved/</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
