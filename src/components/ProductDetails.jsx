import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";

function ProductDetails() {
  const { id } = useParams(); 
  const userId = "exampleUserId";  

  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const BASE_URL = "http://localhost:5000"; 

  useEffect(() => {
    setLoading(true);
    setError(null);
  
    fetch(`${BASE_URL}/api/products/${id}`) 
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
        setError("Failed to load product details. Please try again later.");
        setLoading(false);
      });
  }, [id]);
  

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleAddToCart = () => {
    if (quantity < 1 || isNaN(quantity)) {
      alert("Please select a valid quantity.");
      return;
    }

    fetch(`${BASE_URL}/api/cart/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId, productId: product._id, quantity }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          alert("Product added to cart!");
        } else {
          alert(data.message || "Error adding product to cart.");
        }
      })
      .catch((error) => {
        console.error("Error adding product to cart:", error);
        alert("Failed to add product to cart. Please try again later.");
      });
  };

  if (loading) {
    return <p>Loading product details...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!product) {
    return <p>Product not found!</p>;
  }

  const imageUrl = product.imageUrl
    ? `http://localhost:5000/images/${product.imageUrl}`
    : "/path/to/placeholder.jpg";  

  return (
    <div className="whole-ph">
      <div className="product-page-ph">
        <div className="product-image-ph">
          <img src={imageUrl} alt={product.name} />
        </div>
        <div className="product-details-ph">
          <h2>{product.name}</h2>
          <p>₹{product.price}</p>
          <p>{product.description}</p>
          <div className="quantity-container-ph">
            <label htmlFor="quantity">Quantity:</label>
            <input
              type="number"
              id="quantity"
              value={quantity}
              onChange={handleQuantityChange}
              min="1"
            />
          </div>
          <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
