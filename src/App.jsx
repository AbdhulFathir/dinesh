import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Story from './components/Story';
import Expertise from './components/Expertise';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <Story />
        <Expertise />
        <ProductGrid />
      </main>
      <Footer />

    </div>
  );
}

export default App;
