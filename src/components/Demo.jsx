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
  ArrowLeft
} from "lucide-react";
import "./Demo.scss";

const logs = [
  {
    id: 1,
    orderId: "#4829",
    detection: "12 Min Delay Detected",
    resolution: "Automated SMS Sent + $5 Next-Visit Promo",
    status: "Success",
    time: "2 mins ago"
  },
  {
    id: 2,
    orderId: "#4825",
    detection: "Driver Not Assigned (5m)",
    resolution: "Order escalated to priority queue",
    status: "Processing",
    time: "5 mins ago"
  },
  {
    id: 3,
    orderId: "#4821",
    detection: "Item Out of Stock",
    resolution: "Customer called via AI + Alternative suggested",
    status: "Warning",
    time: "15 mins ago"
  },
  {
    id: 4,
    orderId: "#4818",
    detection: "Payment Failure",
    resolution: "Retried + Customer notified via Push",
    status: "Error",
    time: "32 mins ago"
  },
  {
    id: 5,
    orderId: "#4812",
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
      <Link to="/" className="back-arrow">
        <ArrowLeft className="w-6 h-6" />
      </Link>
      <div className="main-app-container">
        {/* Global Header */}
        <header className="demo-header">
          <div className="header-left">
            <div className="kitchen-health-container">
              <div className="kitchen-health">
                <span className="dot green"></span>
                Kitchen Health: Normal
              </div>
              <span className="kds-subtext">based on your KDS</span>
            </div>
          </div>
          <div className="header-right">
            <button className="rush-mode-toggle">
              Rush Mode
            </button>
            <div className="header-icons">
              <Bell className="w-5 h-5" />
            </div>
          </div>
        </header>

        <div className="content-area">
          <div className="page-intro">
            <div className="title-section">
              <h1>Handled Edge Cases</h1>
              <div className="metrics">
                <span className="completed">128</span>
                <span className="total">automated today</span>
              </div>
            </div>
          </div>

          <div className="controls-row">
            <div className="tab-buttons">
              <button className="tab-btn active">All Activity</button>
              <button className="tab-btn">VIP</button>
              <button className="tab-btn">First-Timers</button>
              <button className="tab-btn">Low-Values</button>
              <button className="tab-btn">Other</button>
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
              <div className="col col-order">ORDER ID</div>
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
                  <div className="col col-order secondary-text">
                    {log.orderId}
                  </div>
                  <div className="col col-detection primary-text">
                    {log.detection}
                  </div>
                  <div className="col col-resolution secondary-text">
                    {log.resolution}
                  </div>
                  <div className="col col-status">
                    <StatusBadge status="Success" />
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
