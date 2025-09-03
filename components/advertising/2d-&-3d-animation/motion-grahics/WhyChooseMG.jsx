// components/MotionGraphicsService.jsx
import './css/MotionGraphics.css';

const WhyChooseMG = () => {
  return (
    <div className="motion-graphics-container">
      <div className="content-wrapper">
        {/* Left side - Images */}
        <div className="images-section">
          <div className="main-image">
            <img 
              src="/vr-motion.jpg" 
              alt="VR Motion Graphics Work"
              className="primary-img"
            />
          </div>
          <div className="secondary-images">
            <div className="secondary-img-item">
              <img 
                src="/vr-gallery1.jpg" 
                alt="Graphics Work 1"
              />
            </div>
            <div className="secondary-img-item">
              <img 
                src="/galary3.jpg" 
                alt="Graphics Work 2"
              />
            </div>
            <div className="secondary-img-item">
              <img 
                src="/galary4.jpg" 
                alt="Graphics Work 3"
              />
            </div>
          </div>
        </div>

        {/* Right side - Content */}
        <div className="content-section">
          <div className="header-section">
            <h1 className="main-title">
              Why Choose FAU IT Motion Graphic Service
            </h1>
          </div>

          <div className="features-list">
            <div className="feature-item">
              <div className="feature-icon">
                <div className="diamond-icon"></div>
              </div>
              <div className="feature-content">
                <h3 className="feature-title">Lorem Ipsum ajdke</h3>
                <p className="feature-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
                  do eiusmod tempor incididunt ut labore et dolore magna 
                  aliqua. Ut enim ad minim veniam,
                </p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon">
                <div className="diamond-icon"></div>
              </div>
              <div className="feature-content">
                <h3 className="feature-title">Lorem Ipsum ajdke</h3>
                <p className="feature-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
                  do eiusmod tempor incididunt ut labore et dolore magna 
                  aliqua. Ut enim ad minim veniam,
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseMG;