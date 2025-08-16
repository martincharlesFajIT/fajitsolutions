"use client";

import React, { useState, useEffect } from 'react';
import './css/ComingSoon.css';

const ComingSoon = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  // Set your launch date here (change this to your actual launch date)
  const launchDate = new Date('2024-12-31T00:00:00').getTime();

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = launchDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [launchDate]);

  const handleEmailSubmit = async (e) => {
    if (e) e.preventDefault();
    
    if (!email) {
      alert('Please enter your email address');
      return;
    }

    // For now, we'll just show a success message
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setIsSubscribed(true);
      setEmail('');
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setIsSubscribed(false);
      }, 3000);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const formatNumber = (num) => {
    return num.toString().padStart(2, '0');
  };

  return (
    <div className="coming-soon-container">
      {/* Background Effects */}
      <div className="background-grid"></div>
      <div className="floating-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
      </div>

      <div className="coming-soon-content">

        {/* Main Content */}
        <main className="main-content">
          <div className="status-badge">COMING SOON</div>
          
          <h2 className="main-title">
            Something Amazing is<br />
            <span className="gradient-text">Coming Soon</span>
          </h2>
          
          <p className="description">
            We're working hard to bring you something incredible. 
            Stay tuned for the launch of our revolutionary platform 
            that will transform your business experience.
          </p>
        </main>

        {/* Footer */}
        <footer className="footer">
          <p>&copy; 2024 FAJ IT Solutions. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default ComingSoon;