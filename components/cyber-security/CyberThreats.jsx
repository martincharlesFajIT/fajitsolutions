"use client";
import React from 'react';
import './css/CyberThreats.css'; // Correct path to your CSS file

import { useRef } from 'react';
import { FaBug, FaUserSecret, FaCode, FaEnvelopeOpenText, FaNetworkWired } from 'react-icons/fa';
import VariableProximity from '../VariableProximity';


const CyberThreats = () => {
  const containerRef = useRef(null);
  const threatCategories = [
    {
      title: 'Malware-based attacks',
      icon: <FaBug />, // React Icon
      threats: [
        'Viruses, worms, and trojans',
        'Ransomware',
        'Spyware and keyloggers',
        'Advanced persistent threats (APTs)',
      ],
    },
    {
      title: 'Identity and access-related attacks',
      icon: <FaUserSecret />, // React Icon
      threats: [
        'Identity theft',
        'Brute-force attacks',
        'Unauthorized access',
        'Insider attacks',
      ],
    },
    {
      title: 'Injection and code-based attacks',
      icon: <FaCode />, // React Icon
      threats: [
        'SQL Injection',
        'Cross-Site Scripting (XSS)',
        'Cross-Site Request Forgery (CSRF)',
        'Server-Side Request Forgery (SSRF)',
      ],
    },
    {
      title: 'Social engineering attacks',
      icon: <FaEnvelopeOpenText />, // React Icon
      threats: [
        'Phishing',
        'Spear phishing',
        'Whaling',
        'Vishing',
        'Smishing',
        'Business email compromise (BEC)',
      ],
    },
    {
      title: 'Network and infrastructure attacks',
      icon: <FaNetworkWired />, // React Icon
      threats: [
        'DoS and DDoS attacks',
        'Man-in-the-middle (MitM) attacks',
        'Packet sniffing and eavesdropping',
        'Session hijacking',
        'Replay attacks',
        'Protocol exploitation and manipulation (e.g., DNS spoofing, IP spoofing)',
      ],
    },
    {
      title: 'Network and infrastructure attacks',
      icon: <FaNetworkWired />, // React Icon
      threats: [
        'DoS and DDoS attacks',
        'Man-in-the-middle (MitM) attacks',
        'Packet sniffing and eavesdropping',
        'Session hijacking',
        'Replay attacks',
        'Protocol exploitation and manipulation (e.g., DNS spoofing, IP spoofing)',
      ],
    },
  ];

  return (
    <div className="cyber-threats-container">
      <div
        ref={containerRef}
        style={{ position: 'relative', marginBottom: '50px' }}
      >
        <VariableProximity
          label={'Cyber Threats We Help Prevent'}
          className="cyber-threats-title"
          fromFontVariationSettings="'wght' 700, 'opsz' 9"
          toFontVariationSettings="'wght' 1000, 'opsz' 40"
          containerRef={containerRef}
          radius={100}
          falloff='linear'
        />
      </div>
      <div className="threat-categories-grid">
        {threatCategories.map((category, index) => (
          <div key={index} className="threat-category-card">
            <div className="card-header">
              <span className="card-icon">{category.icon}</span>
              <h3 className="card-titlee">{category.title}</h3>
            </div>
            <ul className="threat-list">
              {category.threats.map((threat, idx) => (
                <li key={idx} className="threat-item">
                  <span className="bullet-point"></span> {threat}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CyberThreats;