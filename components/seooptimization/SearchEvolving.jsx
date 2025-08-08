"use client"
import React, { useState, useEffect, useRef } from 'react';
import { FiSearch, FiMoreVertical, FiCheck, FiArrowRight } from 'react-icons/fi';
import { FaGoogle, FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa';
import { IoMdPricetag } from 'react-icons/io';
import './css/SearchEvolving.css';

const SearchEvolving = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('paid');
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const searchTabs = [
    { id: 'paid', label: 'Paid Search', icon: <IoMdPricetag /> },
    { id: 'organic', label: 'Organic Search', icon: <FaGoogle /> },
    { id: 'merchant', label: 'Merchant Center', icon: <FaStar /> }
  ];

  // Dummy data
  const paidProducts = [
    { id: 1, title: 'Premium Wireless Earbuds', price: '$89.99', store: 'AudioShop' },
    { id: 2, title: 'Noise Cancelling Headphones', price: '$129.99', store: 'TechGadgets' },
    { id: 3, title: 'Sports Bluetooth Headband', price: '$34.99', store: 'FitnessGear' },
    { id: 4, title: 'Gaming Headset with Mic', price: '$59.95', store: 'GameWorld' }
  ];

  const organicResults = [
    { 
      id: 1, 
      title: 'Best Wireless Headphones of 2023 - Expert Reviews', 
      url: 'www.audioexperts.com/reviews', 
      description: 'Our team tested 35+ wireless headphones to bring you the best options for sound quality, battery life, and comfort.' 
    },
    { 
      id: 2, 
      title: 'How to Choose the Right Headphones - Buying Guide', 
      url: 'www.techadvisor.com/guides', 
      description: 'Learn about different headphone types, features to look for, and how to match headphones to your lifestyle.' 
    },
    { 
      id: 3, 
      title: 'Headphone Deals and Discounts - Updated Daily', 
      url: 'www.dealsfinder.com/headphones', 
      description: 'Find the latest discounts and promotions on top headphone brands from authorized retailers.' 
    }
  ];

  const merchantProducts = [
    { id: 1, title: 'Wireless Earbuds Pro', price: '$99.99', rating: 4.5 },
    { id: 2, title: 'Studio Monitor Headphones', price: '$149.00', rating: 4.7 },
    { id: 3, title: 'Kids Safe Headphones', price: '$24.99', rating: 4.0 },
    { id: 4, title: 'Travel Neckband Headphones', price: '$45.50', rating: 3.8 },
    { id: 5, title: 'Waterproof Bluetooth Headphones', price: '$67.99', rating: 4.2 },
    { id: 6, title: 'Luxury Over-Ear Headphones', price: '$199.99', rating: 4.9 }
  ];

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<FaStar key={i} className="star-icon" />);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<FaStarHalfAlt key={i} className="star-icon" />);
      } else {
        stars.push(<FaRegStar key={i} className="star-icon" />);
      }
    }
    
    return stars;
  };

  return (
    <section className={`search-evolving-section ${isVisible ? 'visible' : ''}`} ref={sectionRef}>
      <div className="search-container">
        <div className="search-content-wrapper">
          {/* Left Content */}
          <div className="search-content">
            <h2 className="search-title">
              <span className="title-line">Search Is</span>
              <span className="title-line highlight">Evolving</span>
            </h2>
            
            <p className="search-question">
              When you search for your main product keywords, what do you see?
            </p>

            <div className="search-features">
              {['Shopping Ads', 'Paid Ads', 'Organic Listings', 'Merchant center listings'].map((feature, index) => (
                <div 
                  className="feature-item" 
                  key={feature}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <div className="check-icon-wrapper">
                    <FiCheck className="check-icon" />
                  </div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <div className="search-descriptions">
              <p>
                The search landscape has changed, yet many agencies are still relying on outdated SEO 
                tactics that only focus on traditional organic rankings.
              </p>
              <p>
                To stay competitive, your brand needs to show up everywhere within Google Search, not just 
                in organic listings but also in Merchant Center results.
              </p>
              <p>
                By combining SEO with Google Ads, we create a comprehensive, Blended Strategy that 
                ensures your brand is visible in every relevant search spot from organic listings and shopping 
                results to paid ads.
              </p>
            </div>

            <button className="lets-talk-btn">
              <span>LET'S TALK</span>
              <FiArrowRight className="arrow-icon" />
            </button>
          </div>

          {/* Right Side - Search Results Preview */}
          <div className="search-preview">
            {/* Tab Navigation */}
            <div className="search-tabs">
              {searchTabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <span className="tab-icon">{tab.icon}</span>
                  {tab.label}
                  <span className="tab-indicator"></span>
                </button>
              ))}
            </div>

            {/* Search Results Content */}
            <div className="search-results">
              <div className="search-bar">
                <FiSearch className="search-icon" />
                <div className="search-input">wireless headphones</div>
                <FiMoreVertical className="search-tools" />
              </div>

              {activeTab === 'paid' && (
                <div className="results-content paid-results">
                  <div className="shopping-ads-header">
                    <h3>Shopping Ads</h3>
                  </div>
                  <div className="shopping-grid">
                    {paidProducts.map((product) => (
                      <div key={product.id} className="shopping-item">
                        <div className="product-image"></div>
                        <div className="product-info">
                          <div className="product-title">{product.title}</div>
                          <div className="product-price">{product.price}</div>
                          <div className="product-store">{product.store}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="sponsored-label">Sponsored</div>
                  <div className="featured-snippet">
                    <h4>Featured Results</h4>
                    <div className="snippet-content">
                      <strong>Best Wireless Headphones</strong> - According to Audio Experts Magazine, 
                      the Sony WH-1000XM5 offers industry-leading noise cancellation and 30-hour battery life.
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'organic' && (
                <div className="results-content organic-results">
                  <div className="organic-results">
                    {organicResults.map((result) => (
                      <div key={result.id} className="organic-item">
                        <div className="result-title">{result.title}</div>
                        <div className="result-url">{result.url}</div>
                        <div className="result-description">{result.description}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'merchant' && (
                <div className="results-content merchant-results">
                  <div className="merchant-products">
                    <h4>Products</h4>
                    <div className="merchant-grid">
                      {merchantProducts.map((product) => (
                        <div key={product.id} className="merchant-item">
                          <div className="merchant-image"></div>
                          <div className="merchant-info">
                            <div className="merchant-title">{product.title}</div>
                            <div className="merchant-price">{product.price}</div>
                            <div className="merchant-rating">
                              {renderStars(product.rating)}
                              <span className="rating-count"> ({Math.floor(Math.random() * 100) + 20})</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchEvolving;