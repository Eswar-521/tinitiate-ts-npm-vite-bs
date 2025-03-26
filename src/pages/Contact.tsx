import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-end">
        <Link to="/" className="btn btn-outline-primary">🏠 Return to Home</Link>
      </div>
      <h2>Contact Page</h2>
      <p>Get in touch with us!</p>
    </div>
  );
};

export default Contact;
