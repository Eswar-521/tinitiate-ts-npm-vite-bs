import { motion } from "framer-motion";
import { FaQuestionCircle } from "react-icons/fa";

const Help = () => {
  return (
    <motion.div
      className="container mt-5"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-secondary mb-4">
        <FaQuestionCircle className="me-2" /> Help
      </h2>
      <div className="p-4 rounded shadow bg-light">
        <p>FAQs, contact support, and help resources here.</p>
      </div>
    </motion.div>
  );
};

export default Help;
