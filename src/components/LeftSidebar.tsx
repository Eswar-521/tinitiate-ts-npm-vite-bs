import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const LeftSidebar = () => {
  const [homeDropdownOpen, setHomeDropdownOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [dashboardDropdownOpen, setDashboardDropdownOpen] = useState(false);
  const [comparisonDropdownOpen, setComparisonDropdownOpen] = useState(false);

  const dropdownStyle = {
    cursor: "pointer",
    color: "white",
    backgroundColor: "rgba(255,255,255,0.1)",
    transition: "background 0.3s",
  };

  const hoverStyle = (e, isEnter) => {
    e.currentTarget.style.backgroundColor = isEnter
      ? "rgba(255,255,255,0.3)"
      : "rgba(255,255,255,0.1)";
  };

  return (
    <div
      className="d-flex flex-column p-3"
      style={{
        width: "220px",
        minHeight: "100vh",
        background: "linear-gradient(to bottom right, #3498db, #2c3e50)",
        color: "white",
      }}
    >
      {/* Logo */}
      <div className="text-center mb-4">
        <img
          src="/favicon_new.png"
          alt="Logo"
          className="img-fluid rounded-circle"
          style={{ maxWidth: "100px", border: "2px solid white" }}
        />
      </div>

      {/* Navigation Menu */}
      <nav className="nav flex-column">

        {/* Home Dropdown */}
        <div
          className="nav-link px-3 py-2 mb-2 rounded"
          onClick={() => setHomeDropdownOpen(!homeDropdownOpen)}
          style={dropdownStyle}
          onMouseEnter={(e) => hoverStyle(e, true)}
          onMouseLeave={(e) => hoverStyle(e, false)}
        >
          Home ▾
        </div>
        {homeDropdownOpen && (
          <div className="ms-3">
            <Link to="/" className="nav-link text-white py-1">Main Home</Link>
            <Link to="/home1" className="nav-link text-white py-1">Home 1</Link>
            <Link to="/home2" className="nav-link text-white py-1">Home 2</Link>
          </div>
        )}

        {/* About Dropdown */}
        <div
          className="nav-link px-3 py-2 mb-2 rounded"
          onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
          style={dropdownStyle}
          onMouseEnter={(e) => hoverStyle(e, true)}
          onMouseLeave={(e) => hoverStyle(e, false)}
        >
          About ▾
        </div>
        {aboutDropdownOpen && (
          <div className="ms-3">
            <Link to="/about" className="nav-link text-white py-1">Main About</Link>
            <Link to="/about1" className="nav-link text-white py-1">About 1</Link>
            <Link to="/about2" className="nav-link text-white py-1">About 2</Link>
          </div>
        )}

        {/* Services Dropdown */}
        <div
          className="nav-link px-3 py-2 mb-2 rounded"
          onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
          style={dropdownStyle}
          onMouseEnter={(e) => hoverStyle(e, true)}
          onMouseLeave={(e) => hoverStyle(e, false)}
        >
          Services ▾
        </div>
        {servicesDropdownOpen && (
          <div className="ms-3">
            <Link to="/services" className="nav-link text-white py-1">Main Services</Link>
            <Link to="/services1" className="nav-link text-white py-1">Service 1</Link>
            <Link to="/services2" className="nav-link text-white py-1">Service 2</Link>
          </div>
        )}

        {/* Profile Dropdown */}
        <div
          className="nav-link px-3 py-2 mb-2 rounded"
          onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
          style={dropdownStyle}
          onMouseEnter={(e) => hoverStyle(e, true)}
          onMouseLeave={(e) => hoverStyle(e, false)}
        >
          Profile ▾
        </div>
        {profileDropdownOpen && (
          <div className="ms-3">
            <Link to="/profile" className="nav-link text-white py-1">My Profile</Link>
            <Link to="/edit-profile" className="nav-link text-white py-1">Edit Profile</Link>
          </div>
        )}

        {/* Dashboard Dropdown */}
        <div
          className="nav-link px-3 py-2 mb-2 rounded"
          onClick={() => setDashboardDropdownOpen(!dashboardDropdownOpen)}
          style={dropdownStyle}
          onMouseEnter={(e) => hoverStyle(e, true)}
          onMouseLeave={(e) => hoverStyle(e, false)}
        >
          Dashboard ▾
        </div>
        {dashboardDropdownOpen && (
          <div className="ms-3">
            <Link to="/dashboard" className="nav-link text-white py-1">Overview</Link>
            <Link to="/dashboard/analytics" className="nav-link text-white py-1">Analytics</Link>
            <Link to="/dashboard/reports" className="nav-link text-white py-1">Reports</Link>
          </div>
        )}

        {/* Comparison Dropdown */}
        <div
          className="nav-link px-3 py-2 mb-2 rounded"
          onClick={() => setComparisonDropdownOpen(!comparisonDropdownOpen)}
          style={dropdownStyle}
          onMouseEnter={(e) => hoverStyle(e, true)}
          onMouseLeave={(e) => hoverStyle(e, false)}
        >
          Comparison ▾
        </div>
        {comparisonDropdownOpen && (
          <div className="ms-3">
            <Link to="/comparison" className="nav-link text-white py-1">Main Comparison</Link>
            <Link to="/comparison1" className="nav-link text-white py-1">Comparison 1</Link>
            <Link to="/comparison2" className="nav-link text-white py-1">Comparison 2</Link>
          </div>
        )}

        {/* Static Link: Contact */}
        <Link
          to="/contact"
          className="nav-link px-3 py-2 mb-2 rounded"
          style={dropdownStyle}
          onMouseEnter={(e) => hoverStyle(e, true)}
          onMouseLeave={(e) => hoverStyle(e, false)}
        >
          Contact
        </Link>
      </nav>
    </div>
  );
};

export default LeftSidebar;
