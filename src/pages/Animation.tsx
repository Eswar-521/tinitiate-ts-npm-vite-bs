import { motion } from "framer-motion";
import { FaFilm } from "react-icons/fa";

const Animation = () => {
  return (
    <motion.div
      className="container mt-5"
      initial={{ opacity: 0, rotate: -5 }}
      animate={{ opacity: 1, rotate: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-warning mb-4">
        <FaFilm className="me-2" /> Animation
      </h2>
      <div className="p-4 rounded shadow bg-light text-center">
        <p>Put your Lottie or CSS animations here.</p>
      </div>
    </motion.div>
  );
};

export default Animation;
