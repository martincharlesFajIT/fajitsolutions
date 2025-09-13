'use client';

import React, { useState } from 'react';
import './css/career.css';

const PenetrationTestComponent = () => {
  const [selectedJob, setSelectedJob] = useState(null);

  const jobPositions = [
    {
      title: "UI / UX Designer",
      shortDescription: "We are looking for a creative and versatile UI/UX Designer to join our team. ",
      jobDescription: [
        "We are looking for a creative and versatile UI/UX Designer to join our team. The ideal candidate will design intuitive and engaging user interfaces for our digital products  You will collaborate with cross-functional teams to deliver designs and improve user experience."
      ],
      keyResponsibilities: [
        "Conduct user research, competitive analysis, and usability testing.",
        "Create wireframes, prototypes, and high-fidelity UI designs for web and mobile applications.",
        "Collaborate with developers to ensure design feasibility and quality.",
        "Develop and maintain design systems, style guides, and UX documentation.",
        "Optimize existing user interfaces based on user feedback and data.",
      ],
      requirements: [
        "Bachelor’s degree in Graphic Design, Visual Communication, Multimedia, or related field (preferred).",
        "2+ years of experience in UI/UX design and video editing",
        "Proficiency in design tools (Figma, Adobe XD, Sketch, etc.).",
        "Proficiency with penetration testing tools (Burp Suite, OWASP ZAP, Nmap, SQLMap)",
        "Understanding of OWASP Top 10 and web application security frameworks",
        "Expertise in video editing software (Adobe Premiere Pro, After Effects, Final Cut Pro, etc.).",
        "Strong understanding of user-centered design principles.",
        "Experience creating motion graphics and animations is a plus.",
        "Excellent communication and collaboration skills.",
        "Strong attention to detail and ability to manage time effectively."
      ],
      PreferredSkills: [
        "Knowledge of HTML/CSS is a plus.",
        "Familiarity with 3D animation or advanced motion graphics.",
        "Experience with social media video formats and trends.",
        "Ability to work in a fast-paced environment and adapt to changing priorities.",
      ],
      jobDetails: {
        channel: "UI / UX Designer",
        industry: "Media and Information Technology",
        functionalArea: "Designing",
        totalPositions: "1 Posts",
        jobShift: "Day Shift",
        jobType: "Contract",
        jobLocation: "Islamabad, Pakistan",
        gender: "Male/Female",
        minimumEducation: "Bachelor's Degree",
        careerLevel: "Medium Level",
        experience: "1 Years",
        applyBefore: "Oct 20, 2025",
        postingDate: "Sep 12, 2025"
      }
    },
    {
      title: "Sales Executive for E-commerce Inquiries (Female)",
      shortDescription: "We require an Operations Assistant Sales / Purchase Department job in Islamabad Capital Territory, Pakistan",
      jobDescription: [
        "The Operations Assistant will report to designated PRM staff and provide logistic support and other tasks as assigned. The Assistant shall work in collaboration with other designated operational assistants to provide smooth operational services. The detailed tasks to be performed by the Operation Assistant include, but are not limited to, the following,Regularly update the contact details of personnel in PRM in consultation with all units in PRM.Prepare expense sheets for contractual drivers.Provide admin support to designated Staff at PRM. Arrange logistics of designated staff on in-land and abroad missions.",
        "Strong planning and organizing skills to handle operational assistance tasks under the given timelines.",
        "Proficiency in computers, especially Word, Excel, CRM and Outlook.",
        "Effective writing and communication skills in English.",
      ],
      keyResponsibilities: [
        "Attends inbound and makes outbound calls, WhatsApp chat / Online chat etc.. responds",
        "Registers and follows up customers’ inquiries or complaint/s",
        "Prepares quotations/estimates, invoices to customers",
        "Prepares weekly reports on power retailers",
        "Handles our products / spare parts inquiries and customers’ registration via chat or emails.",
        "Ensures all field teams address customers’ complaint/s and requests",
        "Develops customer feedback system to ensure customer satisfaction",
        "Sends daily and monthly reports to the manager",
        "Performs other related clerical, admin and sales jobs",
        "Addresses customers’ queries",
        "Prepares Statement of Accounts of various parties and follows up",
        "Coordinate with teams",
        "Sends daily and monthly reports to the manager",
        "Handles prospective clients and provides counseling",
        "Performs other related clerical, admin and sales jobs",
        "Handles clients in a professional manner",
        "Deals with customer issues",
        "Processes customer orders",
        "Keeps up to date with product developments",
        "Calls clientele",
        "Devise new sales or marketing strategies",
        "Works with other departments",
        "Schedules appointments, calls and meetings"
      ],
      requirements: [
        "Bachelor’s degree in any field, from a recognized university.",
        "Preferred Age of 28-35",
        "Minimum 3 years of relevant experience, preferably working in an international or corporate organization.",
        "Strong planning and organizing skills to handle operational assistance tasks under the given timelines.",
        "Proficiency in computers, especially Word, Excel, CRM and Outlook.",
        "Effective writing and communication skills in English."
      ],
      PreferredSkills: [
        "Sales and Communication",
      ],
      jobDetails: {
        channel: "Sales Department(F A J Trading L.L.C)",
        industry: "Ecommerce",
        functionalArea: "Sales",
        totalPositions: "1 Post",
        jobShift: "Day Shift",
        jobType: "Contract",
        jobLocation: "Islamabad, Pakistan",
        gender: "Female",
        minimumEducation: "Bachelor's Degree",
        careerLevel: "Mid-Level",
        experience: "1 Years",
        applyBefore: "Oct 25, 2025",
        postingDate: "Sep 13, 2025"
      }
    },
    {
      title: "Video Editor and Graphic Designer",
      shortDescription: "Evaluate cloud infrastructure security across AWS, Azure, and Google Cloud platforms to ensure robust protection.",
      jobDescription: [
        "FAJ Group, based in Dubai, UAE, was founded in 2010 as a small company focused on technical services and equipment sales.We have since grown into a dynamic organisation with over four subsidiaries in two sectors: International Training Academy and IT solutions. Our growth spans trading (including e-commerce), technical services, and various appliances and electronics."
      ],
      keyResponsibilities: [
        "Edit high-quality, attention-grabbing videos optimised for platforms like Instagram, TikTok, Facebook, LinkedIn, and YouTube",
        "Cut, trim, and assemble raw footage into compelling short-form and long-form video content",
        "Add motion graphics, text overlays, subtitles, music, and sound effects to enhance viewer engagement",
        "Repurpose long-form videos into shorter clips for reels, stories, and ads",
        "Stay up to date with trending video styles, transitions, and formats that perform well on social media",
        "Design visually appealing static and animated graphics for use in social media posts, ads, and stories",
        "Create on-brand thumbnails, banners, and digital marketing materials",
        "Develop branded templates for consistent content creation",
        "Work closely with the marketing team to understand campaign goals and translate ideas into visuals",
        "Collaborate with content creators, marketers, and copywriters to align visuals with messaging",
        "Maintain an organized digital asset library for video clips, graphics, templates, and design files",
        "Manage multiple projects simultaneously while meeting deadlines",
        "Ensure all content adheres to brand guidelines and voice"
      ],
      requirements: [
        "Intermediate ICS, and Bachelor Degree or related field",
        "1 years of experience in Graphics Designing",
        "Should be proficient in at least one professional editing suite and basic motion design",
        "Tools like Final Cut Pro, CapCut, Canva Pro, etc.",
        "Adobe Premiere Pro, After Effects, Photoshop, Illustrator"
      ],
      PreferredSkills: [
        "Photoshop, Illustrator, Adobe Premier Pro",
      ],
      jobDetails: {
        channel: "Graphic Designing",
        industry: "Information Technology / Ecommerce",
        functionalArea: "IT",
        totalPositions: "1 Posts",
        jobShift: "Day",
        jobType: "Contract",
        jobLocation: "Islamabad - Pakistan",
        gender: "Male/Female",
        minimumEducation: "N/A",
        careerLevel: "Medium Level",
        experience: "1 Years",
        applyBefore: "Oct 25, 2025",
        postingDate: "Sep 13, 2025"
      }
    }
  ];

  const allPositions = [
    ...jobPositions,
    {
      title: "Google Ads and Social Media Specialist and Internship",
      shortDescription: "Ongoing security monitoring and testing to maintain security posture throughout the development lifecycle.",
    },
    {
      title: "Social Media and Google Ads Specialist",
      shortDescription: "Simulated real-world attacks to test your organization's detection and response capabilities.",
    },
    {
      title: "Front Desk Receptionist and Admin Assistant (Female)",
      shortDescription: "Collaborative approach combining red and blue teams to improve security detection and response.",
    },
    {
      title: "Secretary to Senior Manager (Female)",
      shortDescription: "Test your organization's human security awareness through carefully crafted social engineering scenarios.",
    },
    {
      title: "Junior SEO, SEO Executive, SEO Executive, Link Builder and Internship",
      shortDescription: "Crowdsourced security testing program to discover vulnerabilities through ethical hackers.",
    },
    {
      title: "Creative Content Writer / Copywriter (Female Only)",
      shortDescription: "Ensure compliance with industry standards like PCI DSS, HIPAA, SOX, and other regulatory requirements.",
    },
  ];

  const handleReadMore = (index) => {
    const jobData = jobPositions[index] || {
      ...allPositions[index],
      jobDescription: [
        `We are seeking a qualified ${allPositions[index].title} to join our cybersecurity team.`,
        "The ideal candidate will have strong technical skills and experience in cybersecurity.",
        "This role offers excellent opportunities for professional growth and development."
      ],
      keyResponsibilities: [
        "Conduct security assessments and penetration testing",
        "Identify and document security vulnerabilities",
        "Prepare detailed technical reports and recommendations",
        "Collaborate with cross-functional teams",
        "Stay updated with latest security threats and methodologies"
      ],
      requirements: [
        "Bachelor's degree in Computer Science, Cybersecurity, or related field",
        "2-5 years of relevant experience in cybersecurity",
        "Strong analytical and problem-solving skills",
        "Excellent communication and documentation abilities",
        "Relevant security certifications preferred"
      ],
      PreferredSkills: [
        "Competitive salary and benefits package",
        "Professional development opportunities",
        "Flexible working arrangements",
        "Health and life insurance coverage",
        "Performance-based bonuses and recognition"
      ],
      jobDetails: {
        channel: "Cybersecurity Jobs",
        industry: "Information Technology",
        functionalArea: "Cybersecurity & Risk Management",
        totalPositions: "1 Post",
        jobShift: "Day Shift",
        jobType: "Full Time/Permanent",
        jobLocation: "Pakistan",
        gender: "Any",
        minimumEducation: "Bachelor's Degree",
        careerLevel: "Professional",
        experience: "2 Years - 5 Years",
        applyBefore: "Oct 30, 2025",
        postingDate: "Sep 13, 2025"
      }
    };
    
    setSelectedJob(jobData);
  };

  const handleBackToJobs = () => {
    setSelectedJob(null);
  };

  // Job Details Template Component
  const JobDetailsTemplate = ({ job }) => (
    <div className="apply-now-container">
      <div className="apply-now-content">
        <div className="back-button-container">
          <button className="back-button" onClick={handleBackToJobs}>
            ← Back to All Positions
          </button>
        </div>
        
        <h1 className="page-title">{job.title}</h1>
        
        <div className="content-grid">
          <div className="main-content">
            {/* Job Description */}
            <section className="content-section">
              <h2 className="section-heading">Job Description</h2>
              <div className="section-content">
                {job.jobDescription.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </section>

            {/* Key Responsibilities */}
            <section className="content-section">
              <h2 className="section-heading">Key Responsibilities</h2>
              <div className="section-content">
                <ul>
                  {job.keyResponsibilities.map((responsibility, index) => (
                    <li key={index}>{responsibility}</li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Requirements */}
            <section className="content-section">
              <h2 className="section-heading">Requirements</h2>
              <div className="section-content">
                <ul>
                  {job.requirements.map((requirement, index) => (
                    <li key={index}>{requirement}</li>
                  ))}
                </ul>
              </div>
            </section>

            {/* What We Offer */}
            <section className="content-section">
              <h2 className="section-heading">Preferred Skills</h2>
              <div className="section-content">
                <ul>
                  {job.PreferredSkills.map((offer, index) => (
                    <li key={index}>{offer}</li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Experience */}
            <section className="content-section">
              <h2 className="section-heading">Experience</h2>
              <div className="section-content">
                <p>We require candidates with {job.jobDetails.experience.toLowerCase()} of relevant experience in cybersecurity and related fields. The ideal candidate should have a proven track record in the specified domain.</p>
              </div>
            </section>
          </div>

          {/* Sidebar with Job Details */}
          <div className="sidebar">
            <section className="details-section">
              <h2 className="section-heading">Job Details</h2>
              <div className="details-grid">
                <div className="detail-item">
                  <span className="detail-label">Job Channel:</span>
                  <span className="detail-value">{job.jobDetails.channel}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Industry:</span>
                  <span className="detail-value">{job.jobDetails.industry}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Functional Area:</span>
                  <span className="detail-value">{job.jobDetails.functionalArea}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Total Positions:</span>
                  <span className="detail-value">{job.jobDetails.totalPositions}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Job Shift:</span>
                  <span className="detail-value">{job.jobDetails.jobShift}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Job Type:</span>
                  <span className="detail-value">{job.jobDetails.jobType}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Job Location:</span>
                  <span className="detail-value">{job.jobDetails.jobLocation}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Gender:</span>
                  <span className="detail-value">{job.jobDetails.gender}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Minimum Education:</span>
                  <span className="detail-value">{job.jobDetails.minimumEducation}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Career Level:</span>
                  <span className="detail-value">{job.jobDetails.careerLevel}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Experience:</span>
                  <span className="detail-value">{job.jobDetails.experience}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Apply Before:</span>
                  <span className="detail-value important-date">{job.jobDetails.applyBefore}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Posting Date:</span>
                  <span className="detail-value">{job.jobDetails.postingDate}</span>
                </div>
              </div>
              
              <button className="apply-button">
                Apply Now
              </button>
            </section>
          </div>
        </div>
      </div>
    </div>
  );

  // If a job is selected, show the job details template
  if (selectedJob) {
    return <JobDetailsTemplate job={selectedJob} />;
  }

  // Otherwise, show the main penetration test services grid
  return (
    <div className="career-container">
      <h1 className="job-main-title">Do you know the type of Penetration Test you require?</h1>
      
      <div className="services-grid">
        {allPositions.map((service, index) => (
          <div 
            key={index} 
            className="job-service-card"
          >
            <h3 className="job-service-title">{service.title}</h3>
            <p className="job-service-description">{service.shortDescription}</p>
            <button 
              className="read-more-btn"
              onClick={() => handleReadMore(index)}
            >
              Read more
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PenetrationTestComponent;