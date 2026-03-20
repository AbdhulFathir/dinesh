import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2 className="brand-name">DINESH GEMS</h2>
          <span className="brand-subtitle">CEYLON SAPPHIRE</span>
          <p>Unveiling the Earth's most precious treasures. Crafted by time, perfected by master artisans.</p>
        </div>
        
        <div className="footer-links">
          <h3>Explore</h3>
          <a href="#home">Home</a>
          <a href="#collection">Collection</a>
          <a href="#about">Our Story</a>
          <a href="#expertise">Expertise</a>
        </div>
        
        <div className="footer-links">
          <h3>Customer Care</h3>
          <a href="#">Contact Us</a>
          <a href="#">Shipping & Returns</a>
          <a href="#">Ring Sizing</a>
          <a href="#">FAQ</a>
        </div>
        
        <div className="footer-newsletter">
          <h3>The Inner Circle</h3>
          <p>Subscribe to receive exclusive access to new acquisitions and private collections.</p>
          <div className="subscribe-form">
            <input type="email" placeholder="Email Address" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Dinesh Gems. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
