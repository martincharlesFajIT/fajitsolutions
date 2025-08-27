// QuickSupportBanner.jsx
import './css/QuickSupportBanner.css';

const QuickSupportBanner = () => {
  return (
    <div className="quick-support-banner">
      <div className="banner-content">
        <div className="support-section">
          <div className="support-icon">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 2C10.06 2 2 10.06 2 20C2 29.94 10.06 38 20 38C29.94 38 38 29.94 38 20C38 10.06 29.94 2 20 2ZM20 34C12.28 34 6 27.72 6 20C6 12.28 12.28 6 20 6C27.72 6 34 12.28 34 20C34 27.72 27.72 34 20 34Z" fill="#333333"/>
              <path d="M20 10C18.9 10 18 10.9 18 12C18 13.1 18.9 14 20 14C21.1 14 22 13.1 22 12C22 10.9 21.1 10 20 10Z" fill="#333333"/>
              <path d="M18 16H22V30H18V16Z" fill="#333333"/>
            </svg>
          </div>
          <span className="support-text">Quick Support</span>
        </div>
        
        <div className="main-content">
          <p className="banner-text">
            Are you looking for <span className="highlight">Enterprise Web Application</span> Development?
          </p>
        </div>
        
        <div className="cta-section">
          <button className="hire-btn">
            Hire Laravel Developers
            <span className="btn-arrow">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuickSupportBanner;