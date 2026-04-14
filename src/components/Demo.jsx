import React, { useState, useEffect, useRef } from "react";
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
import logsData from "../data/logs.json";
import "./Demo.scss";

const TypeBadge = ({ type }) => {
  const styles = {
    "VIP": "badge-vip",
    "First-Timer": "badge-first-timer",
    "Low-Value": "badge-low-value",
    "Other": "badge-other"
  };

  return (
    <span className={`status-pill ${styles[type]}`}>
      {type}
    </span>
  );
};

const getTimeAgo = (timestamp) => {
  const seconds = Math.floor((Date.now() - timestamp) / 1000);
  if (seconds < 5) return "Just now";
  if (seconds < 60) return `${seconds}s ago`;
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  return `${hours}h ago`;
};

export default function Demo() {
  const [logsState, setLogsState] = useState({
    displayed: [],
    remaining: []
  });
  const [currentTime, setCurrentTime] = useState(Date.now());
  const timerRef = useRef(null);

  // Initialize logs on mount
  useEffect(() => {
    const shuffled = [...logsData].sort(() => 0.5 - Math.random());
    const initial = shuffled.slice(0, 6).map((log, index) => ({
      ...log,
      appearedAt: Date.now() - (index + 1) * 60000 * Math.floor(Math.random() * 10 + 1)
    }));
    const remaining = shuffled.slice(6);

    setLogsState({
      displayed: initial,
      remaining: remaining
    });

    const timeInterval = setInterval(() => {
      setCurrentTime(Date.now());
    }, 10000);

    return () => clearInterval(timeInterval);
  }, []);

  // Handle adding new logs dynamically - strictly one at a time
  useEffect(() => {
    const { displayed, remaining } = logsState;
    if (displayed.length === 0 || displayed.length >= 50 || remaining.length === 0) return;

    const delay = Math.floor(Math.random() * (15000 - 5000 + 1)) + 5000;
    
    timerRef.current = setTimeout(() => {
      setLogsState(prev => {
        if (prev.remaining.length === 0 || prev.displayed.length >= 50) return prev;
        
        const nextLogIndex = Math.floor(Math.random() * prev.remaining.length);
        const nextLog = { ...prev.remaining[nextLogIndex], appearedAt: Date.now() };
        
        return {
          displayed: [nextLog, ...prev.displayed],
          remaining: prev.remaining.filter((_, i) => i !== nextLogIndex)
        };
      });
    }, delay);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [logsState.displayed.length]);

  const displayedLogs = logsState.displayed;

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
                <span className="completed">{displayedLogs.length + 122}</span>
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
                Filter by Type
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="data-section">
            <div className="list-header">
              <div className="col col-order">ORDER ID</div>
              <div className="col col-type">TYPE</div>
              <div className="col col-detection">
                DETECTION <ChevronDown className="w-3 h-3 inline ml-1 opacity-50" />
              </div>
              <div className="col col-resolution">
                RESOLUTION <ChevronDown className="w-3 h-3 inline ml-1 opacity-50" />
              </div>
              <div className="col col-time">TIME</div>
              <div className="col col-action"></div>
            </div>

            <div className="list-body">
              {displayedLogs.map((log) => (
                <div key={`${log.id}-${log.appearedAt}`} className="list-row">
                  <div className="col col-order secondary-text">
                    {log.orderId}
                  </div>
                  <div className="col col-type">
                    <TypeBadge type={log.type} />
                  </div>
                  <div className="col col-detection primary-text">
                    {log.detection}
                  </div>
                  <div className="col col-resolution secondary-text">
                    {log.resolution}
                  </div>
                  <div className="col col-time secondary-text">
                    {getTimeAgo(log.appearedAt)}
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
