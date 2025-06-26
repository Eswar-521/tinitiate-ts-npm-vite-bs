import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LeftSidebar from "./components/LeftSidebar";
import RightSidebar from "./components/RightSidebar";
import Home from "./pages/Home";
import Home1 from "./pages/Home1";
import Home2 from "./pages/Home2";
import About from "./pages/About";
import About1 from "./pages/About1";
import About2 from "./pages/About2";
import Services from "./pages/Services";
import Services1 from "./pages/Services1";
import Services2 from "./pages/Services2";
import Contact from "./pages/Contact";
import Catalog from "./pages/Catalog";
import Comparison from "./pages/Comparison";
import Comparison1 from "./pages/Comparison1";
import Comparison2 from "./pages/Comparison2"
import Forgotpassword from "./pages/Forgotpassword";
import Profile from "./pages/Profile";
import EditProfile from "./pages/editprofile";
import Dashboard from './pages/Dashboard';
import DashboardAnalytics from './pages/DashboardAnalytics';
import DashboardReports from './pages/DashboardReports';
import Login from "./pages/Login";
import Signup from "./pages/Signup";





const App = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />

      <div className="d-flex flex-grow-1" style={{ minHeight: "calc(100vh - 120px)" }}>
        {/* Left Sidebar */}
        <div style={{ width: "200px" }}>
          <LeftSidebar />
        </div>

        {/* Main Content */}
        <div className="flex-grow-1 p-3">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home1" element={<Home1/>}/>
            <Route path="/Home2" element={<Home2/>}/>
            <Route path="/about" element={<About />} />
            <Route path="/about1" element={<About1 />} />
            <Route path="/about2" element={<About2 />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services1" element={<Services1 />} />
            <Route path="/services2" element={<Services2 />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgotpassword" element={<forgotPassword />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/comparison" element={<Comparison />} />
            <Route path="/comparison1" element={<Comparison1 />} />
            <Route path="/comparison2" element={<Comparison2 />} />
            <Route path="/EditProfile" element={<EditProfile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/analytics" element={<DashboardAnalytics />} />
            <Route path="/dashboard/reports" element={<DashboardReports />} />

          </Routes>
        </div>

        {/* Optional: Right Sidebar (set fixed width too if needed) */}
        <div style={{ width: "220px" }}>
          <RightSidebar />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default App;
