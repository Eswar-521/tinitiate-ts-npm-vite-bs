import { motion } from "framer-motion";
import { FaCalendar } from "react-icons/fa";

const Calendar = () => {
  return (
    <motion.div
      className="container mt-5"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-primary mb-4">
        <FaCalendar className="me-2" /> Calendar
      </h2>
      <div className="p-4 rounded shadow bg-light">
        <p>Calendar events and schedules go here.</p>
      </div>
    </motion.div>
  );
};

export default Calendar;
