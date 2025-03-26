import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LeftSidebar from "./components/LeftSidebar";
import RightSidebar from "./components/RightSidebar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import About from "./pages/About";
import Catalog from "./pages/Catalog";
import Comparison from "./pages/Comparison";

const App = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />

      <div className="container-fluid d-flex flex-grow-1">
        {/* Left Sidebar */}
        <LeftSidebar />

        {/* Main Content */}
        <div className="flex-grow-1 p-3">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="comparison" element={<Comparison/>}/>
          </Routes>
        </div>

        {/* Right Sidebar */}
        <RightSidebar />
      </div>

      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
};

export default App;
