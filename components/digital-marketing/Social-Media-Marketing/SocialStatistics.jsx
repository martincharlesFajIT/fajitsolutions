// Statistics.jsx
import './css/SocialStatistics.css';
import { 
  FaHashtag, 
  FaChartLine, 
  FaUserCheck, 
  FaStar 
} from 'react-icons/fa';

const SocialStatistics = () => {
  const stats = [
    {
      id: 1,
      icon: FaHashtag,
      number: "50+",
      label: "Social Media Experts",
      iconBg: "#FF6B6B"
    },
    {
      id: 2,
      icon: FaChartLine,
      number: "100+",
      label: "Successful Projects",
      iconBg: "#4ECDC4"
    },
    {
      id: 3,
      icon: FaUserCheck,
      number: "4.5",
      label: "GoodFirms Rating",
      iconBg: "#45B7D1"
    },
    {
      id: 4,
      icon: FaStar,
      number: "4.8",
      label: "Clutch Rating",
      iconBg: "#FFA726"
    }
  ];

  return (
    <div className="statistics-container">
      <div className="statistics-wrapper">
        {stats.map((stat) => {
          const IconComponent = stat.icon;
          return (
            <div key={stat.id} className="stat-item">
              <div className="stat-icon-wrapper">
                <div 
                  className="stat-icon"
                  style={{ backgroundColor: stat.iconBg }}
                >
                  <IconComponent />
                </div>
              </div>
              <div className="stat-content">
                <h3 className="stat-number">{stat.number}</h3>
                <p className="stat-label">{stat.label}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SocialStatistics;