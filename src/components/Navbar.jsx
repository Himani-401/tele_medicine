import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  const [cartCount, setCartCount] = useState(0);
  const BASE_URL = "http://localhost:5000";
  const userId = "exampleUserId"; 

  useEffect(() => {
    fetch(`${BASE_URL}/api/cart/${userId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch cart data");
        }
        return response.json();
      })
      .then((data) => {
        const totalQuantity = data.items
          ? data.items.reduce((acc, item) => acc + item.quantity, 0)
          : 0;
        setCartCount(totalQuantity);
      })
      .catch((error) => {
        console.error("Error fetching cart data:", error);
        setCartCount(0); 
      });
  }, [userId]);
  return (
    <div className='nav-ph'>
      <div className='nav-left-ph'>
        <img
          className='image-nav-ph'
          src='https://i.pinimg.com/736x/ea/68/a0/ea68a0b43d886c28cf22f80402a69a4b.jpg'
          alt="Logo"
        />
        <a className='htext-ph' href="#">Back to main website</a>
      </div>
      <div className='nav-center-ph'>
        <li className='nav-link-ph'><Link to="/">Home</Link></li>
        <li className='nav-link-ph'><Link to="/Shop">Shop</Link></li>
      </div>
      <div className='nav-right-ph'>
        <Link to="/cart" className='cart-container1'>
          <img
            className='cart-img-ph'
            src='https://i.pinimg.com/736x/d3/44/8e/d3448ef3e081d59992c31fefab5135d6.jpg'
            alt="Cart"
          />
          {cartCount > 0 && <span className='count-ph'>{cartCount}</span>}
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
