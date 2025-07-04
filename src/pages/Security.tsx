import { motion } from "framer-motion";
import { FaLock } from "react-icons/fa";

const Security = () => {
  return (
    <motion.div
      className="container mt-5"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-danger mb-4">
        <FaLock className="me-2" /> Security
      </h2>
      <div className="p-4 rounded shadow bg-light">
        <p>Security settings and user permissions displayed here.</p>
      </div>
    </motion.div>
  );
};

export default Security;
