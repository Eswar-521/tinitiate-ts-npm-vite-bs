import React, { useState } from 'react';

const EditProfile = () => {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("john@example.com");

  const handleSave = (e) => {
    e.preventDefault();
    alert(`Profile updated: ${name}, ${email}`);
  };

  return (
    <div className="container mt-5">
      <h2>Edit Profile</h2>
      <form onSubmit={handleSave} className="mt-4">
        <div className="mb-3">
          <label>Full Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label>Email Address</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-success">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditProfile;
