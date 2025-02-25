const Signup = () => {
    return (
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <h2 className="text-center">Sign Up</h2>
            <form>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" placeholder="Enter your name" required />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" placeholder="Enter your email" required />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input type="password" className="form-control" placeholder="Create a password" required />
              </div>
              <button type="submit" className="btn btn-success w-100">Sign Up</button>
            </form>
          </div>
        </div>
      </div>
    );
  };
  
  export default Signup;
  