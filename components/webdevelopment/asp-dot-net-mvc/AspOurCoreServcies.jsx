
import './css/AspDotNetMvc.css';
import { SiEnterprisedb } from "react-icons/si";
import { MdBackup } from "react-icons/md";
import { FaRegWindowMaximize } from "react-icons/fa";
import { TfiNewWindow } from "react-icons/tfi";
import { RiWebhookLine } from "react-icons/ri";
import { SiWebcomponentsdotorg } from "react-icons/si";

const AspOurCoreServices = () => {
  const services = [
    {
      id: 1,
      icon: <SiEnterprisedb />,
      title: "ASP.NET Enterprise Application Development",
      description: "We offers enterprise-grade web application development services leveraging the full potential of ASP.NET technologies and frameworks. Hire our application development specialists who can develop dynamic, responsive, powerful web applications, and ERPs with flawless solutions for web, apps, and desktop with the likelihood of meeting the requirements of your business."
    },
    {
      id: 2,
      icon: <MdBackup />,
      title: "ASP.NET Migration Services",
      description: "Quicken your ASP.Net applications with our extensive range of ASP.Net migration services that can impeccably migrate your current applications to the enhanced ASP.NET MVC or ASP.Net architecture."
    },
    {
      id: 3,
      icon: <TfiNewWindow />,
      title: "Legacy Application Conversions",
      description: "Legacy applications can be a burden to your business. Get consultants from TechWize for the migration of legacy desktop applications to the web with ASP.Net according to the latest design and functional development practices."
    },
    {
      id: 4,
      icon:<FaRegWindowMaximize />,
      title: "ASP.NET Integration Services",
      description: "Our expert developers can build fully-functional and configurable Microsoft .NET Framework in readily applicable and out of the box solutions, products, and tools. Our asp developers are seasoned developers, so seamlessly integrate ASP.NET applications with external systems of your company."
    },
    {
      id: 5,
      icon: <RiWebhookLine />,
      title: "ASP.NET CMS Enablement Services",
      description: "We strategically use ASP.NET for robust web content management system (CMS) and build helpful instances, templates, customizations, and online stores to streamline your business, operations, and technology at cost-effective pricing."
    },
    {
      id: 6,
      icon: <SiWebcomponentsdotorg />
      ,
      title: "ASP.NET Maintenance & Support Services",
      description: "We enable maintenance, upgrade, and optimization of existing ASP.NET applications. Our ASP.Net developers from TechWize that can offer robust maintenance and support services for higher-quality assurance about your projects to ensure the delivery of seamless project and enhancement of application performance."
    }
  ];

  return (
    <section className="aspnet-our-core-services">
      <div className="our-core-container">
        <div className="our-core-header-content">
          <h2 className="our-core-section-title">Our Core ASP.NET DEVELOPMENT SERVICES</h2>
          <p className="our-core-section-description">
            At TechWize, our customized ASP.NET Core web development services render powerful, high-performing, and consistent technology solutions to our 
            esteemed clients across the world.
          </p>
        </div>
        
        <div className="our-core-services-grid">
          {services.map((service) => (
            <div key={service.id} className="our-core-service-card">
              <div className="our-core-service-header">
                <div className="our-core-service-icon">
                  {service.icon}
                </div>
                <h3 className="our-core-service-title">{service.title}</h3>
              </div>
              <p className="our-core-service-description">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AspOurCoreServices;