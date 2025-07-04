import { motion } from "framer-motion";
import { FaChartPie } from "react-icons/fa";

const Infographics = () => {
  return (
    <motion.div 
      className="container mt-5"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-info mb-4">
        <FaChartPie className="me-2" /> Infographics
      </h2>
      <div className="rounded shadow p-4 bg-light text-center">
        <p>This is a placeholder for interactive charts or diagrams.</p>
      </div>
    </motion.div>
  );
};

export default Infographics;
