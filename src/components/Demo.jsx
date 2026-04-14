import React from "react";
import { Link } from "react-router-dom";
import { 
  Bell, 
  Settings, 
  Search, 
  ChevronDown, 
  ChevronRight, 
  CheckCircle2, 
  AlertCircle, 
  Clock, 
  Zap,
  LayoutGrid,
  History,
  Users
} from "lucide-react";
import "./Demo.scss";

const logs = [
  {
    id: 1,
    detection: "12 Min Delay Detected",
    resolution: "Automated SMS Sent + $5 Next-Visit Promo",
    status: "Success",
    time: "2 mins ago"
  },
  {
    id: 2,
    detection: "Driver Not Assigned (5m)",
    resolution: "Order escalated to priority queue",
    status: "Processing",
    time: "5 mins ago"
  },
  {
    id: 3,
    detection: "Item Out of Stock",
    resolution: "Customer called via AI + Alternative suggested",
    status: "Warning",
    time: "15 mins ago"
  },
  {
    id: 4,
    detection: "Payment Failure",
    resolution: "Retried + Customer notified via Push",
    status: "Error",
    time: "32 mins ago"
  },
  {
    id: 5,
    detection: "8 Min Delay Detected",
    resolution: "Automated SMS Sent + Loyalty Points Added",
    status: "Success",
    time: "45 mins ago"
  }
];

const StatusBadge = ({ status }) => {
  const styles = {
    Success: "badge-success",
    Warning: "badge-warning",
    Error: "badge-error",
    Processing: "badge-processing"
  };

  const icons = {
    Success: <CheckCircle2 className="w-3 h-3 mr-1" />,
    Warning: <AlertCircle className="w-3 h-3 mr-1" />,
    Error: <AlertCircle className="w-3 h-3 mr-1" />,
    Processing: <Clock className="w-3 h-3 mr-1" />
  };

  return (
    <span className={`status-pill ${styles[status]}`}>
      {icons[status]}
      {status}
    </span>
  );
};

export default function Demo() {
  return (
    <div className="demo-page">
      <div className="main-app-container">
        {/* Global Header */}
        <header className="demo-header">
          <div className="header-left">
            <Link to="/" className="demo-logo">
              <Zap className="w-6 h-6 text-blue-500 fill-current" />
              <span>AImpact</span>
            </Link>
            <nav className="demo-nav">
              <button className="nav-item active">Dashboard</button>
              <button className="nav-item">Analytics</button>
              <button className="nav-item">Team</button>
              <button className="nav-item">Settings</button>
            </nav>
          </div>
          <div className="header-right">
            <div className="kitchen-health">
              <span className="dot green"></span>
              Kitchen Health: Normal
            </div>
            <button className="rush-mode-toggle">
              Rush Mode
            </button>
            <div className="header-icons">
              <Bell className="w-5 h-5" />
              <Settings className="w-5 h-5" />
            </div>
          </div>
        </header>

        <div className="content-area">
          <div className="page-intro">
            <div className="title-section">
              <h1>Emergency Brake</h1>
              <div className="metrics">
                <span className="completed">128</span>
                <span className="total">/ 132 automated today</span>
              </div>
            </div>
            <button className="primary-action-btn">
              Configure Alerts
            </button>
          </div>

          <div className="controls-row">
            <div className="tab-buttons">
              <button className="tab-btn active">All Activity</button>
              <button className="tab-btn">Critical</button>
              <button className="tab-btn">Resolved</button>
            </div>
            <div className="filters">
              <div className="search-bar">
                <Search className="w-4 h-4" />
                <input type="text" placeholder="Search logs..." />
              </div>
              <button className="filter-dropdown">
                Filter by Status
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="data-section">
            <div className="list-header">
              <div className="col col-detection">
                DETECTION <ChevronDown className="w-3 h-3 inline ml-1 opacity-50" />
              </div>
              <div className="col col-resolution">
                RESOLUTION <ChevronDown className="w-3 h-3 inline ml-1 opacity-50" />
              </div>
              <div className="col col-status">STATUS</div>
              <div className="col col-time">TIME</div>
              <div className="col col-action"></div>
            </div>

            <div className="list-body">
              {logs.map((log) => (
                <div key={log.id} className="list-row">
                  <div className="col col-detection primary-text">
                    {log.detection}
                  </div>
                  <div className="col col-resolution secondary-text">
                    {log.resolution}
                  </div>
                  <div className="col col-status">
                    <StatusBadge status={log.status} />
                  </div>
                  <div className="col col-time secondary-text">
                    {log.time}
                  </div>
                  <div className="col col-action">
                    <ChevronRight className="w-5 h-5 text-gray-300" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
