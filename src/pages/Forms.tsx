import { motion } from "framer-motion";
import { FaWpforms } from "react-icons/fa";

const Forms = () => {
  return (
    <motion.div 
      className="container mt-5"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-warning mb-4">
        <FaWpforms className="me-2" /> Forms
      </h2>
      <form className="shadow p-4 rounded bg-light">
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input className="form-control" placeholder="Your name" />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input className="form-control" type="email" placeholder="Your email" />
        </div>
        <button className="btn btn-success">Submit</button>
      </form>
    </motion.div>
  );
};

export default Forms;
