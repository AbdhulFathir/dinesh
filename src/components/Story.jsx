import React from 'react';
import './Story.css';

const Story = () => {
  return (
    <section id="about" className="story-section">
      <div className="story-container">
        <div className="story-content fade-in-up">
          <span className="subtitle">Our Story</span>
          <h2>A Legacy Forged in Ratnapura</h2>
          <p>
            For over three generations, Dinesh Gems has been at the forefront of the Ceylonese gem trade. 
            Rooted in Ratnapura, the legendary 'City of Gems', our family's heritage is built upon the tireless 
            pursuit of perfection and an unwavering respect for the stones the earth yields.
          </p>
          <p>
            What began as a passionate endeavor by our founder has blossomed into a globally recognized 
            name for the finest Ceylon Sapphires. Every stone we offer tells a story of millions of years of 
            geological magic, expertly brought to light by our master lapidaries.
          </p>
          <button className="cta-button">Read Full History</button>
        </div>
        <div className="story-visual fade-in-up-delay">
          <div className="visual-frame">
            <div className="visual-overlay">
              <span>Established 1985</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
