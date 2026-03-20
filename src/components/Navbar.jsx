import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        
        {/* Mobile Menu Toggle */}
        <div className="mobile-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </div>

        {/* Logo */}
        <div className="logo-container">
          <h1 className="brand-name">DINESH GEMS</h1>
          <span className="brand-subtitle">CEYLON SAPPHIRE</span>
        </div>

        {/* Desktop Links */}
        <div className="nav-links desktop-only">
          <a href="#home">Home</a>
          <a href="#collection">Collection</a>
          <a href="#about">Our Story</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Cart */}
        <div className="nav-actions">
          <button className="cart-btn" aria-label="Shopping Cart">
            <ShoppingBag size={20} />
            <span className="cart-badge">0</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <a href="#home" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
        <a href="#collection" onClick={() => setIsMobileMenuOpen(false)}>Collection</a>
        <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>Our Story</a>
        <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
