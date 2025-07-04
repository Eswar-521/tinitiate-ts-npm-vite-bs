import { motion } from "framer-motion";
import { FaMousePointer } from "react-icons/fa";

const DragDrop = () => {
  return (
    <motion.div
      className="container mt-5"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-success mb-4">
        <FaMousePointer className="me-2" /> Drag & Drop
      </h2>
      <div className="p-4 rounded shadow bg-light">
        <p>Drag and drop components will appear here.</p>
      </div>
    </motion.div>
  );
};

export default DragDrop;
