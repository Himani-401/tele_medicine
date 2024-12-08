import React, { useState } from 'react';
import './Sidebar.css';

function Sidebar({ onCategorySelect }) {
  const [isCategoryOpen, setCategoryOpen] = useState(true);
  const [isFilterOpen, setFilterOpen] = useState(true);

  const toggleCategory = () => setCategoryOpen(!isCategoryOpen);
  const toggleFilter = () => setFilterOpen(!isFilterOpen);

  const categories = ['Clothing', 'Electronics', 'Furniture', 'Home Appliances', 'Sports'];

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h3>Product Filters</h3>
      </div>

      <div className="sidebar-section">
        <div className="sidebar-title" onClick={toggleCategory}>
          <h4>Categories</h4>
          <span>{isCategoryOpen ? '-' : '+'}</span>
        </div>
        {isCategoryOpen && (
          <div className="sidebar-list">
            <ul>
              {categories.map((category) => (
                <li
                  key={category}
                  onClick={() => onCategorySelect(category)}
                  className="category-item"
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="sidebar-section">
        <div className="sidebar-title" onClick={toggleFilter}>
          <h4>Filters</h4>
          <span>{isFilterOpen ? '-' : '+'}</span>
        </div>
        {isFilterOpen && (
          <div className="sidebar-list">
            <h5>Price Range</h5>
            <input type="range" min="0" max="1000" step="50" />

            <h5>Ratings</h5>
            <div className="rating">
              <input type="checkbox" id="4stars" />
              <label htmlFor="4stars">4 Stars & up</label>
              <br />
              <input type="checkbox" id="3stars" />
              <label htmlFor="3stars">3 Stars & up</label>
            </div>

            <h5>Brands</h5>
            <div className="brand">
              <input type="checkbox" id="nike" />
              <label htmlFor="nike">Nike</label>
              <br />
              <input type="checkbox" id="adidas" />
              <label htmlFor="adidas">Adidas</label>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Sidebar;
