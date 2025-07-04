import { motion } from "framer-motion";
import { FaDatabase } from "react-icons/fa";

const DataTable = () => {
  return (
    <motion.div 
      className="container mt-5"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-secondary mb-4">
        <FaDatabase className="me-2" /> Data Tables
      </h2>
      <table className="table table-bordered table-striped shadow rounded">
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Alice</td>
            <td>alice@example.com</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Bob</td>
            <td>bob@example.com</td>
          </tr>
        </tbody>
      </table>
    </motion.div>
  );
};

export default DataTable;
