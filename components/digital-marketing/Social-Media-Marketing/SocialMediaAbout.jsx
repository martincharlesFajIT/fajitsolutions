// SocialMediaabout.jsx
import './css/SocialMediaAbout.css';

const SocialMediaAbout = () => {
  return (
    <div className="social-media-container">
      <div className="content-wrapper">
        <div className="text-content">
          <h1 className="main-title">
            <span className="title-line">Social Media Marketing</span>
            <span className="title-line">That Powers Business</span>
            <span className="title-line">Success</span>
          </h1>
          
          <p className="description-text">
            Are you tired of pouring money into social media campaigns that don't convert?
          </p>
          
          <p className="main-description">
            You're not alone many businesses spend heavily on campaigns that fail to deliver. That's where we come in. Our social media marketing solutions are built to turn your online presence into a powerful growth engine, driving higher engagement, stronger brand visibility, and a measurable return on investment. We focus on creating strategies tailored to your business goals, ensuring that every post, ad, and campaign is aligned to attract the right audience and convert them into loyal customers
          </p>
          
          <p className="final-description">
            Say goodbye to trial and error our team helps you monitor results, uncover what's holding you back, and fine-tune every campaign so your marketing budget delivers the highest possible return
          </p>
          
          <button className="cta-button">
            Get Started Today
            <span className="btn-arrow">→</span>
          </button>
        </div>
        
        <div className="image-section">
          <div className="image-placeholder">
            <img src="/social-about.png" alt="Social-about" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaAbout;