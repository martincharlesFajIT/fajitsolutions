"use client"
import React, { useState, useEffect } from 'react';
import './css/SearchEvolving.css';

const SearchEvolving = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('paid');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.querySelector('.search-evolving-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const searchTabs = [
    { id: 'paid', label: 'Paid Search' },
    { id: 'organic', label: 'Organic Search' },
    { id: 'merchant', label: 'Merchant Center' }
  ];

  return (
    <section className="search-evolving-section">
      <div className="search-container">
        <div className="search-content-wrapper">
          {/* Left Content */}
          <div className={`search-content ${isVisible ? 'animate-in' : ''}`}>
            <h2 className="search-title">Search Is Evolving</h2>
            
            <p className="search-question">
              When you search for your main product keywords, what do you see?
            </p>

            <div className="search-features">
              <div className="feature-item">
                <span className="check-icon">✓</span>
                <span>Shopping Ads</span>
              </div>
              <div className="feature-item">
                <span className="check-icon">✓</span>
                <span>Paid Ads</span>
              </div>
              <div className="feature-item">
                <span className="check-icon">✓</span>
                <span>Organic Listings</span>
              </div>
              <div className="feature-item">
                <span className="check-icon">✓</span>
                <span>Merchant center listings</span>
              </div>
            </div>

            <p className="search-description">
              The search landscape has changed, yet many agencies are still relying on outdated SEO 
              tactics that only focus on traditional organic rankings.
            </p>

            <p className="search-description">
              To stay competitive, your brand needs to show up everywhere within Google Search, not just 
              in organic listings but also in Merchant Center results.
            </p>

            <p className="search-description">
              By combining SEO with Google Ads, we create a comprehensive, Blended Strategy that 
              ensures your brand is visible in every relevant search spot from organic listings and shopping 
              results to paid ads.
            </p>

            <button className="lets-talk-btn">
              LET'S TALK
            </button>
          </div>

          {/* Right Side - Search Results Preview */}
          <div className={`search-preview ${isVisible ? 'animate-in' : ''}`}>
            {/* Tab Navigation */}
            <div className="search-tabs">
              {searchTabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Search Results Content */}
            <div className="search-results">
              {activeTab === 'paid' && (
                <div className="results-content">
                  <div className="shopping-ads-header">
                    <h3>Shopping Ads</h3>
                  </div>
                  <div className="shopping-grid">
                    {[1, 2, 3, 4, 5].map((item) => (
                      <div key={item} className="shopping-item">
                        <div className="product-image"></div>
                        <div className="product-info">
                          <div className="product-title"></div>
                          <div className="product-price"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="sponsored-label">Sponsored</div>
                  <div className="featured-snippet">
                    <h4>Featured Results</h4>
                    <div className="snippet-content"></div>
                  </div>
                </div>
              )}

              {activeTab === 'organic' && (
                <div className="results-content">
                  <div className="organic-results">
                    {[1, 2, 3].map((item) => (
                      <div key={item} className="organic-item">
                        <div className="result-title"></div>
                        <div className="result-url"></div>
                        <div className="result-description"></div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'merchant' && (
                <div className="results-content">
                  <div className="merchant-products">
                    <h4>Products</h4>
                    <div className="merchant-grid">
                      {[1, 2, 3, 4, 5, 6].map((item) => (
                        <div key={item} className="merchant-item">
                          <div className="merchant-image"></div>
                          <div className="merchant-info">
                            <div className="merchant-title"></div>
                            <div className="merchant-price"></div>
                            <div className="merchant-rating">★★★★★</div>
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