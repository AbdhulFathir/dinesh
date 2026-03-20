import React, { useEffect } from 'react';
import { X, ShieldCheck, Truck } from 'lucide-react';
import './QuickViewModal.css';

const QuickViewModal = ({ product, isOpen, onClose }) => {
  // Prevent scrolling on body when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !product) return null;

  return (
    <div className={`modal-overlay ${isOpen ? 'active' : ''}`} onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose} aria-label="Close modal">
          <X size={24} />
        </button>
        
        <div className="modal-grid">
          <div className="modal-image-container">
            <img src={product.image} alt={product.name} className="modal-image" />
          </div>
          
          <div className="modal-details">
            <span className="modal-category">Premium Gemstone</span>
            <h2 className="modal-title">{product.name}</h2>
            <div className="modal-price">{product.price}</div>
            
            <p className="modal-description">{product.description}</p>
            
            <div className="modal-features">
               <div className="feature-item">
                 <ShieldCheck size={18} />
                 <span>Lifetime Warranty</span>
               </div>
               <div className="feature-item">
                 <Truck size={18} />
                 <span>Secure Insured Shipping</span>
               </div>
            </div>

            <div className="modal-actions">
              <button className="add-to-cart-btn">Add to Cart</button>
              <button className="inquire-btn">Inquire Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewModal;
