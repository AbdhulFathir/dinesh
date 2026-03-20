import React, { useState } from 'react';
import QuickViewModal from './QuickViewModal';
import './ProductGrid.css';

const products = [
  {
    id: 1,
    name: "Royal Ceylon Sapphire",
    price: "$12,500",
    image: "/assets/ceylon_sapphire_gem_1774036992974.png",
    description: "An exceptional unheated vivid blue sapphire from the mines of Ratnapura."
  },
  {
    id: 2,
    name: "Pigeon Blood Ruby",
    price: "$18,200",
    image: "/assets/ruby_gem_1774037011565.png",
    description: "A flawless, brilliantly vibrant ruby showcasing intense, deep crimson hues."
  },
  {
    id: 3,
    name: "Imperial Emerald",
    price: "$9,800",
    image: "/assets/emerald_gem_1774037264041.png",
    description: "A rare Muzo green emerald with impeccable clarity and a majestic cut."
  }
];

const ProductGrid = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
        setSelectedProduct(null);
    }, 400); // Wait for transition to finish
  };

  return (
    <>
      <section id="collection" className="product-section">
        <div className="section-header fade-in-up">
          <span className="subtitle">Curated Selection</span>
          <h2>The Masterpiece Collection</h2>
          <div className="divider"></div>
        </div>

        <div className="product-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card fade-in-up">
              <div className="image-wrapper">
                <img src={product.image} alt={product.name} />
                <div className="overlay">
                  <button className="quick-view" onClick={() => openModal(product)}>Quick View</button>
                </div>
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="description">{product.description}</p>
                <div className="price-row">
                  <span className="price">{product.price}</span>
                  <button className="add-to-cart">Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <QuickViewModal 
        product={selectedProduct} 
        isOpen={isModalOpen} 
        onClose={closeModal} 
      />
    </>
  );
};

export default ProductGrid;
