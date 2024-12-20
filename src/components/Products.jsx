import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Products.css';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState(4);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const BASE_URL = "http://localhost:5000";
  const userId = "exampleUserId"; 

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(`${BASE_URL}/api/products`) 
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setError("Failed to load products. Please try again later.");
        setLoading(false);
      });
  }, []);

  const handleLoadMore = () => {
    setVisibleProducts((prev) => prev + 4);
  };

  const handleShowLess = () => {
    setVisibleProducts((prev) => Math.max(prev - 4, 4));
  };

  const addToCart = (productId) => {
    fetch(`${BASE_URL}/api/cart/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId, productId }), 
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          alert(data.message);
        } else {
          alert("Product added to cart!");
        }
      })
      .catch((error) => console.error("Error adding product to cart:", error));
  };

  if (loading) {
    return <p>Loading products...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="product-display1">
      <h2>OUR PRODUCTS</h2>
      <div className="product-grid1">
        {products.slice(0, visibleProducts).map((product, index) => (
          <div className="product-card1" key={product._id || index}>
            <Link to={`/product/${product._id}`}>
              <img
                src={
                  product.imageUrl
                    ? `http://localhost:5000/images/${product.imageUrl}`
                    : 'path/to/placeholder.jpg'
                }
                alt={product.name}
                className="product-image1"
              />
              <h3 className="product-name1">{product.name}</h3>
              <p className="product-price1">₹{product.price}</p>
            </Link>
            <button
              className="add-to-cart-button"
              onClick={() => addToCart(product._id)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {visibleProducts < products.length && (
        <button className="product-button" onClick={handleLoadMore}>
          Load more...
        </button>
      )}

      {visibleProducts > 4 && (
        <button className="product-button" onClick={handleShowLess}>
          Show less
        </button>
      )}
    </div>
  );
};

export default Products;
