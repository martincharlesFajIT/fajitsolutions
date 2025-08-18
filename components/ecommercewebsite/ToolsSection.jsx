import React from 'react';
import './css/ToolsSection.css'; // Regular CSS import

const ToolsSection = () => {
  return (
    <div className="tools-section">
      <h2 className="section-title">Tools That Drive Our Success</h2>
      <div className="tools-grid">
        <div className="tool-item">Shopify</div>
        <div className="tool-item">Magento Development</div>
        <div className="tool-item">WooCommerce</div>
        <div className="tool-item">Circle</div>
        <div className="tool-item">Custom</div>
      </div>
    </div>
  );
};

export default ToolsSection;