import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-end">
        <Link to="/" className="btn btn-outline-primary">🏠 Return to Home</Link>
      </div>
      <h2>About Page</h2>
      <p>Learn more about us.</p>
    </div>
  );
};

export default About;
