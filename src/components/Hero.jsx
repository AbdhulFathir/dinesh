import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h2 className="title-animation">Timeless Elegance,<br/>Crafted in Fire</h2>
        <p className="fade-in-up">Discover our exclusive collection of premium Ceylon Sapphires, hand-selected to radiate eternal brilliance and unmatched luxury.</p>
        <button className="cta-button fade-in-up-delay">Explore Collection</button>
      </div>
      
      {/* Decorative Elements */}
      <div className="scroll-indicator fade-in-up-delay">
        <span>Scroll to Explore</span>
        <div className="line"></div>
      </div>
    </section>
  );
};

export default Hero;
