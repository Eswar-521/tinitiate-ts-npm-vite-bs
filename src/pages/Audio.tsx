import { motion } from "framer-motion";
import { FaMusic } from "react-icons/fa";

const Audio = () => {
  return (
    <motion.div 
      className="container mt-5"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-primary mb-4">
        <FaMusic className="me-2" /> Audio
      </h2>
      <div className="bg-light p-4 rounded shadow">
        <audio controls className="w-100">
          <source src="sample.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </motion.div>
  );
};

export default Audio;
