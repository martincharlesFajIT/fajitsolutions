// components/TechBehindGraphics.jsx
import './css/MotionGraphics.css';

const TechBehindGM = () => {
  const techTools = [
    {
      name: "Adobe After Effects",
      icon: "ae", // We'll use CSS to create the icon
      color: "#9999FF"
    },
    {
      name: "Adobe Illustrator", 
      icon: "ai",
      color: "#FF9A00"
    },
    {
      name: "Cinema 4D",
      icon: "c4d", 
      color: "#0066FF"
    },
    {
      name: "Blender",
      icon: "blender",
      color: "#FF8C00"
    }
  ];

  return (
    <div className="tech-container">
      <div className="tech-wrapper">
        {/* Header */}
        <div className="tech-header">
          <h2 className="tech-title">
            The <span className="underlined-text">Tech</span> Behind Our Graphic
          </h2>
          <p className="tech-description">
            We specialize in delivering innovative, next-generation digital solutions that empower businesses to thrive in a competitive world. 
            Every project is meticulously crafted around your unique vision, combining creativity, precision, and advanced technology to drive 
            lasting success.
          </p>
        </div>

        {/* Tech Tools Grid */}
        <div className="tech-grid">
          {techTools.map((tool, index) => (
            <div key={index} className="tech-card">
              <div className="tech-icon-container">
                <div className={`tech-icon ${tool.icon}`}>
                  {tool.icon === 'ae' && <span className="icon-text">Ae</span>}
                  {tool.icon === 'ai' && <span className="icon-text">Ai</span>}
                  {tool.icon === 'c4d' && <div className="c4d-icon"></div>}
                  {tool.icon === 'blender' && <div className="blender-icon"></div>}
                </div>
              </div>
              <h3 className="tech-name">{tool.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechBehindGM;