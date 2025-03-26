import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-end">
        <Link to="/" className="btn btn-outline-primary">🏠 Return to Home</Link>
      </div>
      <h2>Profile Page</h2>
      <p>Welcome to your profile!</p>
    </div>
  );
};

export default Profile;
