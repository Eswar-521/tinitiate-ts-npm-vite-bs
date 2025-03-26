import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Comparison = () => {
  const [comparisonList, setComparisonList] = useState([]);

  // Load saved comparison data from local storage
  useEffect(() => {
    const savedComparison = localStorage.getItem("comparisonList");
    if (savedComparison) {
      setComparisonList(JSON.parse(savedComparison));
    }
  }, []);

  // Remove Product from Comparison Table
  const removeFromComparison = (productId: number) => {
    const updatedList = comparisonList.filter((item) => item.id !== productId);
    setComparisonList(updatedList);
    localStorage.setItem("comparisonList", JSON.stringify(updatedList)); // Update storage
  };

  return (
    <div className="container mt-4">
      <h2>Comparison Table</h2>
      <Link to="/catalog" className="btn btn-primary mb-3">← Back to Catalog</Link>

      {comparisonList.length === 0 ? (
        <p>No products selected for comparison.</p>
      ) : (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Product</th>
              <th>Category</th>
              <th>Price</th>
              <th>Description</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {comparisonList.map((product) => (
              <tr key={product.id}>
                <td>{product.course_name}</td>
                <td>{product.course_category}</td>
                <td>${product.price}</td>
                <td>{product.description}</td>
                <td>
                  <button className="btn btn-danger btn-sm" onClick={() => removeFromComparison(product.id)}>
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Comparison;
