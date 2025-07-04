import { motion } from "framer-motion";
import { FaVideo } from "react-icons/fa";

const Video = () => {
  return (
    <motion.div 
      className="container mt-5"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-danger mb-4">
        <FaVideo className="me-2" /> Video
      </h2>
      <div className="ratio ratio-16x9 shadow rounded">
        <iframe
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="YouTube video"
          allowFullScreen
        ></iframe>
      </div>
    </motion.div>
  );
};

export default Video;
