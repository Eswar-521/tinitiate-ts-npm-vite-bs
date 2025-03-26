import { useState } from "react";
import { FaBars, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

// Dummy Data (100 Products)
const productData = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  course_category: `Category ${i % 10}`,
  course_name: `Course ${i + 1}`,
  price: (i + 1) * 10,
  image_path: `https://via.placeholder.com/150?text=Course+${i + 1}`,
  description: `This is a brief description for Course ${i + 1}.`
}));

const Catalog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(productData);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle Search
  const handleSearch = () => {
    const lowerCaseSearch = searchTerm.toLowerCase();

    const filtered = productData.filter((product) =>
      product.course_name.toLowerCase().includes(lowerCaseSearch) ||
      product.course_category.toLowerCase().includes(lowerCaseSearch) ||
      product.price.toString().includes(lowerCaseSearch)
    );

    setFilteredProducts(filtered);
  };

  // Handle "Enter" Key Press
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  // Add Product to Comparison Table
  const addToComparison = (product: any) => {
    const savedComparison = localStorage.getItem("comparisonList");
    const comparisonList = savedComparison ? JSON.parse(savedComparison) : [];

    if (!comparisonList.some((item) => item.id === product.id)) {
      const updatedComparison = [...comparisonList, product];
      localStorage.setItem("comparisonList", JSON.stringify(updatedComparison));
    }
  };

  return (
    <div className="container">
      {/* Menu Bar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light px-3 mb-3">
        <button className="btn btn-primary me-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <FaBars /> Menu
        </button>

        {/* Search Bar */}
        <input
          type="text"
          className="form-control me-2"
          placeholder="Search in Catalog..."
          style={{ width: "250px" }}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <button className="btn btn-success" onClick={handleSearch}>
          <FaSearch /> Search
        </button>

        {/* Hidden Menu */}
        {isMenuOpen && (
          <div className="dropdown-menu show position-absolute">
            <Link className="dropdown-item" to="/services">Services</Link>
            <Link className="dropdown-item" to="/comparison">Comparison</Link>
          </div>
        )}
      </nav>

      {/* Catalog Content */}
      <h2>Catalog Page</h2>
      <p>Displaying {filteredProducts.length} results for: "{searchTerm}"</p>

      {/* Product Cards */}
      <div className="row">
        {filteredProducts.map((product) => (
          <div key={product.id} className="col-md-3 mb-4">
            <div className="card">
              <img src={product.image_path} className="card-img-top" alt={product.course_name} />
              <div className="card-body">
                <h5 className="card-title">{product.course_name}</h5>
                <p className="card-text">{product.description}</p>
                <p className="text-success fw-bold">${product.price}</p>
                <button className="btn btn-warning btn-sm" onClick={() => addToComparison(product)}>
                  Add to Compare
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalog;
