// components/AspNetServices.jsx
import './css/AspDotNetMvc.css';

const AspNetSeviceCta = () => {
  return (
    <section className="aspnet-services">
      <div className="container">
        <div className="content-wrapper">
          <div className="text-content">
            <h1 className="main-title">
              ALL-INCLUSIVE ASP.NET
              <br />
              DEVELOPMENT SERVICES
            </h1>
            
            <div className="description">
              <p>
                TechWize has consistently met and exceeded the expectations of 
                customers requiring the expertise of ASP.NET. We have rich expertise in 
                delivering tailored solutions by using C#, .NET, WinForms, Web Services, 
                WCF, WPF, MVC, and SQL Server as the database.
              </p>
              
              <p>
                Our clients engage us for ASP.NET-based enterprise application 
                development, web development services, and long-term support & 
                maintenance using Microsoft Technology Stack.
              </p>
              
              <p>
                Our clients engage with us for ASP.NET-based enterprise application 
                development, web development services, and long-term support & 
                maintenance using Microsoft Technology Stack.
              </p>
            </div>
            
            <button className="asp-cta-button">
              Schedule A Free Consultation Today!
            </button>
          </div>
          
          <div className="image-content">
            <div className="developer-image">
              <img 
                src="https://cdn.pixabay.com/photo/2021/08/01/18/41/computer-6515023_960_720.jpg" 
                alt="Developer working on ASP.NET project"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AspNetSeviceCta;