import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container text-center mt-5">
      <h1>Welcome to Our Website</h1>
      <p>Explore our courses and find what suits you best.</p>
      
      {/* Catalog Page Link */}
      <Link to="/catalog" className="btn btn-primary mt-3">
        View Catalog
      </Link>
    </div>
  );
};

export default Home;