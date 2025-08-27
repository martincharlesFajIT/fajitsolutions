// SecurityServices.jsx

import RotatingText from '../Rotate-Text';
import './css/CybersecurityServices.css';
import {
  FaShieldAlt,
  FaNetworkWired,
  FaCogs,
  FaEnvelope,
  FaCloud,
  FaSearch
} from 'react-icons/fa';

const CybersecurityServices = () => {
  const services = [
    {
      id: 1,
      title: "Endpoint Security",
      description: "Superior cyber protection keeps your organization and data safe from malware and advanced attacks.",
      icon: FaShieldAlt
    },
    {
      id: 2,
      title: "Network Security",
      description: "Securely connect your networks with next-gen firewalls, access points and switches to support a ZTNA architecture.",
      icon: FaNetworkWired
    },
    {
      id: 3,
      title: "Managed Security Services - SecOps",
      description: "Leverage superior security outcomes delivered as a service.",
      icon: FaCogs
    },
    {
      id: 4,
      title: "Email Security",
      description: "Protection from malware, phishing, and impersonation attempts (spoofing).",
      icon: FaEnvelope
    },
    {
      id: 5,
      title: "Cloud Security",
      description: "Cloud workload protection with CPSM processes to monitor systems and infrastructure.",
      icon: FaCloud
    },
    {
      id: 6,
      title: "Managed Detection and Response",
      description: "Cybersecurity as a service. 24/7 ransomware protection and breach prevention.",
      icon: FaSearch
    }
  ];

  return (
    <div className="security-container">
      <div className="security-header">
        <h1 className="main-title">FAJ IT HAS YOU COVERED
          <RotatingText
            texts={['Cyber Security', 'Network Security', 'Cloud Security', 'Emai Security']}
            mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300  overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />
        </h1>

        <p className="subtitle">As a top cybersecurity services provider in The USA, UK, Canada, the Middle East and Australia, we apply Zero-Trust principles to capitalize on AI and human-led services.</p>
      </div>

      <div className="services-grid">
        {services.map((service) => {
          const IconComponent = service.icon;
          return (
            <div key={service.id} className="service-card">
              <div className="card-content">
                <div className="service-icon">
                  <IconComponent />
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CybersecurityServices;