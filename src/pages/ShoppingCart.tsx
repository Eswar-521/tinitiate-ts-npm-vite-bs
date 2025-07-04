import { motion } from "framer-motion";
import { FaShoppingCart } from "react-icons/fa";

const ShoppingCart = () => {
  return (
    <motion.div
      className="container mt-5"
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-danger mb-4">
        <FaShoppingCart className="me-2" /> Shopping Cart
      </h2>
      <div className="p-4 rounded shadow bg-light">
        <p>Your cart items will be shown here.</p>
      </div>
    </motion.div>
  );
};

export default ShoppingCart;
