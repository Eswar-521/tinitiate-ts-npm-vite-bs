import { Routes, Route, Link } from "react-router-dom";
import { FaUser, FaUserPlus } from "react-icons/fa";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import About from "./pages/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <Header />

      <div className="layout-container d-flex">
        {/* ======= Zone 1: Left Sidebar (Menu with Image) ======= */}
        <div className="zone-1 sidebar">
          {/* Small Image at Top */}
          <div className="sidebar-image">
            <img src="/logo.png" alt="Logo" />
          </div>

          {/* Menu Links */}
          <nav className="menu">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/profile">Profile</Link></li>
            </ul>
          </nav>
        </div>

        {/* ======= Zone 2: Main Content ======= */}
        <div className="zone-2 main-content flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </div>

        {/* ======= Zone 3: Right Sidebar (Login & Signup) ======= */}
        <div className="zone-3 auth-sidebar">
          <Link to="/login" className="btn btn-outline-primary mb-2">
            <FaUser /> Login
          </Link>
          <Link to="/signup" className="btn btn-outline-success">
            <FaUserPlus /> Signup
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default App;
