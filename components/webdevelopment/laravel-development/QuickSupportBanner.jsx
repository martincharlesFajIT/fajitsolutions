// QuickSupportBanner.jsx
import './css/QuickSupportBanner.css';
import { VscDebugBreakpointUnsupported } from "react-icons/vsc";

const QuickSupportBanner = () => {
  return (
    <div className="quick-support-banner">
      <div className="banner-content">
        <div className="support-section">
          <div className="support-icon">
          <VscDebugBreakpointUnsupported className='quick-icon' />
          </div>
          <span className="support-text">Quick Support</span>
        </div>
        
        <div className="main-content">
          <p className="banner-text">
            Are you looking for <span className="highlight">Enterprise Web Application</span> Development?
          </p>
        </div>
        
        <div className="quick-cta-section">
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