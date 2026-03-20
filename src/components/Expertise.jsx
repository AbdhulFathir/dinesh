import React from 'react';
import { Gem, Microscope, ShieldCheck, Globe } from 'lucide-react';
import './Expertise.css';

const features = [
  {
    icon: <Gem size={32} strokeWidth={1.5} />,
    title: "Master Cutters",
    description: "Our lapidaries possess decades of experience, unlocking the maximum brilliance out of every rough stone through precision faceting."
  },
  {
    icon: <Microscope size={32} strokeWidth={1.5} />,
    title: "Unrivaled Clarity",
    description: "Every gem is subjected to rigorous microscopic evaluation, ensuring it meets our exceptionally high standards for unheated purity."
  },
  {
    icon: <ShieldCheck size={32} strokeWidth={1.5} />,
    title: "Certified Authenticity",
    description: "We provide internationally recognized laboratory reports with our sapphires, guaranteeing their origin, weight, and lifetime value."
  },
  {
    icon: <Globe size={32} strokeWidth={1.5} />,
    title: "Ethical Sourcing",
    description: "Proudly dedicated to sustainable mining practices and supporting local artisanal communities in Sri Lanka."
  }
];

const Expertise = () => {
  return (
    <section id="expertise" className="expertise-section">
      <div className="expertise-header fade-in-up">
        <span className="subtitle">The Dinesh Standard</span>
        <h2>Uncompromising Quality</h2>
        <div className="divider"></div>
      </div>

      <div className="expertise-grid">
        {features.map((feature, index) => (
          <div key={index} className={`expertise-card fade-in-up`} style={{animationDelay: `${0.2 * index}s`}}>
            <div className="icon-wrapper">
              {feature.icon}
            </div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Expertise;
