"use client"
import React, { useEffect, useState } from 'react';

const BookAppointment = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;

    script.onload = () => {
      setLoaded(true);
    };

    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      {!loaded && (
        <div style={{ textAlign: 'center', padding: '20px' }}>
          <p>Loading calendar...</p>
        </div>
      )}
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/fajitsolutions-info/30min"
        style={{ backgroundColor: '#000000', minWidth: '320px', height: '700px', display: loaded ? 'block' : 'none' }}
      ></div>
    </div>
  );
};

export default BookAppointment;
