import React from 'react';
import './css/Ecom-website.css'
import { FaShopify, FaMagento, FaWordpress, FaCircle, FaCog } from "react-icons/fa";

const ServicesSection = () => {
  return (
    <div className="tools-section">
      <h2 className="section-title">Tools That Drive Our Success</h2>
      <div className="tools-grid">
        <div className="tool-item">
          <FaShopify className="tool-icon" />
          <span className="tool-text">Shopify</span>
        </div>
        <div className="tool-item">
          <FaMagento className="tool-icon" />
          <span className="tool-text">Magento Development</span>
        </div>
        <div className="tool-item">
          <FaWordpress className="tool-icon" />
          <span className="tool-text">WooCommerce</span>
        </div>
        <div className="tool-item">
          <FaCircle className="tool-icon" />
          <span className="tool-text">Circle</span>
        </div>
        <div className="tool-item">
          <FaCog className="tool-icon" />
          <span className="tool-text">Custom</span>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;