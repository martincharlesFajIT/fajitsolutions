// QuickSupportBanner.jsx
import '../../css/Webinnerpages.css';
import { VscDebugBreakpointUnsupported } from "react-icons/vsc";

const QuickSupportPhp = () => {
  return (
    <div className="innerpages-quick-support-banner">
      <div className="innerpages-banner-content">
        <div className="innerpages-support-section">
          <div className="innerpages-support-icon">
          <VscDebugBreakpointUnsupported className='innerpages-quick-icon' />
          </div>
          <span className="innerpages-support-text">Quick Support</span>
        </div>
        
        <div className="innerpages-main-content">
          <p className="innerpages-banner-text">
            Are you looking for <span className="innerpages-highlight">Enterprise Web Application</span> Development?
          </p>
        </div>
        
        <div className="innerpages-quick-cta-section">
          <button className="innerpages-hire-btn">
            Hire .NetCore Developers
            <span className="innerpages-btn-arrow">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuickSupportPhp;