import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-ph">
      <div className="footer-container-ph">
        <div className="footer-section-ph">
          <h4>About Us</h4>
          <p>Providing quality and innovation in every product we offer. Join us on our journey to excellence.</p>
        </div>
        <div className="footer-section-ph">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/shop">Shop</a></li>
          </ul>
        </div>
        <div className="footer-section-ph">
          <h4>Follow Us</h4>
          <div className="social-icons-ph">
            <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
            <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
            <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom-ph">
        <p>&copy; 2024 YourCompany. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
