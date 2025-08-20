// components/ERPCapabilities.js
import React from 'react';
import './css/ERPCapabilities.css';
const ERPCapabilities = () => {
  const capabilities = [
    {
      title: "Data consolidation",
      description: "Getting a unified and consistent view of core business processes via integrating business information from multiple departments into a single ERP database, which facilitates business process transparency, enhanced collaboration, and data-driven decision making."
    },
    {
      title: "Process automation",
      description: "Automating repetitive tasks such as invoicing, order processing, reporting, and payroll. Besides freeing employees from mundane activities, ERP implementation helps streamline business processes and minimize errors rooted in manual data input."
    },
    {
      title: "BI & analytics",
      description: "Consolidating transactional data on every aspect of business operations into the ERP database. Fast and real-based access to integrated real-time data, self-service reporting capabilities, and tailored dashboards with KPI sets and metrics help business users optimize current operations with informed decisions."
    },
    {
      title: "Accounting & financial management",
      description: "Tracking, storing, and analyzing finance-related data such as accounts payable, accounts receivable, and general ledger to perform financial reconciliation, financial planning and budgeting, revenue, expenses, and tax management."
    },
    {
      title: "Customer relationship management (CRM)",
      description: "Providing marketing and sales teams with a 360-degree customer view for customer segmentation and targeting, automating sales generation and purchase order creation, and predicting the demand."
    },
    {
      title: "Human resource (HR) management",
      description: "Covering the full scope of employee management activities from onboarding to offboarding. Automating talent management, employee data and time tracking, employee performance assessment, training and learning management, and employee request management."
    },
    {
      title: "Supply chain management (SCM)",
      description: "Enabling end-to-end supply chain visibility to gain greater control over inventory, warehousing, logistics, and distribution operations. Identifying areas of inefficiency, balancing supply and demand, streamlining."
    }
  ];

  return (
    <div className="erp-capabilities">
      <div className="container">
        <div className="header">
          <h2>ERP capabilities we deliver</h2>
          <p>We deliver tailored ERP solutions with a unique feature set to cater to your specific goals and objectives. Among the capabilities we enable within ERP software are:</p>
        </div>
        
        <div className="capabilities-list">
          {capabilities.map((capability, index) => (
            <div key={index} className="capability-item">
              <div className="capability-content">
                <h3>{capability.title}</h3>
                <p>{capability.description}</p>
              </div>
              <div className="capability-border"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ERPCapabilities;