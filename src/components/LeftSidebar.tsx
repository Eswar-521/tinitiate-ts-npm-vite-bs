import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const LeftSidebar = () => {
  return (
    <div className="left-sidebar p-3 border-end bg-light">
      {/* Sidebar Logo */}
      <div className="text-center mb-3">
        <img src="/logo.png" alt="Logo" className="img-fluid" style={{ maxWidth: "100px" }} />
      </div>
      
      {/* Navigation Menu */}
      <nav className="nav flex-column">
        <Link to="/" className="nav-link text-dark">Home</Link>
        <Link to="/about" className="nav-link text-dark">About</Link>
        <Link to="/services" className="nav-link text-dark">Services</Link>
        <Link to="/contact" className="nav-link text-dark">Contact</Link>
        <Link to="/profile" className="nav-link text-dark">Profile</Link>
        <Link to="/comparison" className="nav-link text-dark">Comparison</Link>
      </nav>
    </div>
  );
};

export default LeftSidebar;