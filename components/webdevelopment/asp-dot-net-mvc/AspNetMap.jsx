import './css/AspDotNetMvc.css';

const AspGlobalPresence = () => {
  const locations = [
    { id: 1, country: "USA", lat: 39.8, lng: -98.5 },
    { id: 2, country: "UK", lat: 55.3, lng: -3.4 },
    { id: 3, country: "Australia", lat: -25.2, lng: 133.7 },
    { id: 4, country: "Pakistan", lat: 20.5, lng: 78.9 }
  ];

  return (
    <section className="global-presence-section">
      {/* CTA Header */}
      <div className="cta-header">
        <div className="cta-container">
          <h3 className="cta-title">
            Require Specialized Services of Our ASP.NET Development Experts?
          </h3>
          <button className="cta-button">
            Let's Discuss Today
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="presence-container">
        <div className="content-wrapper">
          <div className="map-section">
            <div className="world-map">
              {/* SVG World Map */}
              <svg viewBox="0 0 1000 500" className="map-svg">
                {/* Simplified world map paths */}
                <path 
                  d="M158 206c9-15 30-27 48-25 23 3 45 18 52 41 4 15-2 32-16 40-12 7-27 7-40 4-15-4-29-12-37-26-6-11-8-23-7-34z" 
                  className="continent north-america"
                />
                <path 
                  d="M450 180c15-8 33-10 50-6 20 5 38 18 48 36 8 15 10 33 5 49-6 18-20 33-37 40-16 7-34 7-51 1-19-7-35-22-43-40-7-16-7-34 0-49 6-13 16-24 28-31z" 
                  className="continent europe"
                />
                <path 
                  d="M520 220c25-12 55-15 82-8 30 8 57 27 72 52 12 20 15 44 8 66-8 25-26 46-49 57-22 10-47 11-71 3-26-9-49-28-62-52-11-21-12-46-4-68 7-19 16-36 24-50z" 
                  className="continent asia"
                />
                <path 
                  d="M720 320c20-10 44-12 66-5 25 8 47 25 60 46 10 17 13 37 7 56-7 21-22 39-42 48-18 8-39 8-58 2-21-7-40-22-51-41-9-17-10-37-3-55 6-16 14-31 21-51z" 
                  className="continent australia"
                />
                <path 
                  d="M200 300c18-8 39-10 59-4 22 7 42 21 54 39 9 15 12 33 7 50-6 19-20 35-38 43-17 7-36 7-54 1-20-7-37-21-47-39-8-16-9-34-2-51 6-15 14-28 21-39z" 
                  className="continent south-america"
                />
                <path 
                  d="M480 280c22-10 48-12 72-5 27 8 51 26 66 48 11 18 14 40 8 60-7 22-23 41-44 52-19 9-42 10-63 3-23-8-44-25-56-47-10-19-11-41-4-62 6-18 15-34 21-49z" 
                  className="continent africa"
                />
              </svg>

              {/* Location Markers */}
              {locations.map((location) => (
                <div
                  key={location.id}
                  className="location-marker"
                  style={{
                    left: `${(location.lng + 180) * (100/360)}%`,
                    top: `${(90 - location.lat) * (100/180)}%`
                  }}
                >
                  <div className="marker-dot"></div>
                </div>
              ))}
            </div>
          </div>

          <div className="content-section">
            <h2 className="section-title">FAJ IT Global Presence</h2>
            <div className="content-text">
              <p>
                At Faj IT, we are a top ASP.NET development services company based 
                in the USA, UK, and Asia, and our teams have successfully catered to 
                business clients worldwide.
              </p>
              <p>
                Our teams have much-skilled development expertise with ASP.NET Web 
                Applications Development, Custom ASP.NET-Based Portal Development, and 
                Re-engineering Legacy Applications via .NET.
              </p>
              <p>
                We have also enabled Enterprise app development services, Tailored CMS 
                development, and CRM development in .Net / digital Portals, and .Net Web 
                application development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AspGlobalPresence;