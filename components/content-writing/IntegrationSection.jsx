import React from 'react';
import './css/IntegrationSection.css';
import Image from 'next/image';
const IntegrationSection = () => {
  return (
    <section className="integration-section">
      <div className="container">
        <div className="integration-content">
          <h2 className="section-title">WE INTEGRATE</h2>
          <p className="section-description">
            FAJ IT Solutions fits to you and your workflow—whether that's an Airtable integration, delivering
            directly to your CMS, or using your SEO tool of choice. Consider us a <span className="highlight">human-ish part of your tech stack.</span>
          </p>
        </div>

        <div className="integration-grid">
          <div className="integration-item">
            <div className="integration-image-placeholder">
              <Image
                src="/airtable.webp"
                alt="Airtable Integration"
                width={500}
                height={300}
                layout="responsive"
                objectFit="contain"
              />
            </div>
            <p className="integration-label">Airtable</p>
          </div>

          {/* Item 2: Surfer */}
          <div className="integration-item">
            <div className="integration-image-placeholder">
              <Image
                src="/surferseo.webp"
                alt="Surfer Integration"
                width={500}
                height={300}
                layout="responsive"
                objectFit="contain"
              />
            </div>
            <p className="integration-label">SURFER</p>
          </div>

          {/* Item 3: Slack */}
          <div className="integration-item">
            <div className="integration-image-placeholder">
              <Image
                src="/slack.webp"
                alt="Slack Integration"
                width={500}
                height={300}
                layout="responsive"
                objectFit="contain"
              />
            </div>
            <p className="integration-label">slack</p>
          </div>

          {/* Item 4: Google Docs */}
          <div className="integration-item">
            <div className="integration-image-placeholder">
              <Image
                src="/gdocs.webp"
                alt="Google Docs Integration"
                width={500}
                height={300}
                layout="responsive"
                objectFit="contain"
              />
            </div>
            <p className="integration-label">Google Docs</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationSection;