import { Link } from "react-router-dom";
import { FaUser, FaUserPlus } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const RightSidebar = () => {
  return (
    <div className="right-sidebar p-3 border-start bg-light">
      <nav className="nav flex-column">
        <Link to="/home" className="nav-link text-dark">Home</Link>
        <Link to="/about" className="nav-link text-dark">About</Link>
        <Link to="/catalog" className="nav-link text-dark">Catalog</Link>
        <Link to="/login" className="btn btn-outline-primary my-2 d-flex align-items-center">
          <FaUser className="me-3" /> Login
        </Link>
        <Link to="/signup" className="btn btn-outline-success d-flex align-items-center">
          <FaUserPlus className="me-2" /> Signup
        </Link>
      </nav>
    </div>
  );
};

export default RightSidebar;
