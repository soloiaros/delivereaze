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
      </div>
    </div>
  );
}
