// pages/api/submit-calculator.js - Updated for WPX Hosting
import nodemailer from 'nodemailer';
import PDFDocument from 'pdfkit';

// ... (keep the existing generatePDF function as is)

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const formData = req.body;
    console.log('Processing request for:', formData.projectName);

    // Generate PDF
    const pdfBuffer = await generatePDF(formData);

    // WPX Hosting specific configuration
    const transporter = nodemailer.createTransport({
      host: 'mail.fajitsolution.com', // Use your domain's mail server
      port: 465,
      secure: true, // Use SSL
      auth: {
        user: 'Info@fajitsolution.com', // Full email address
        pass: process.env.EMAIL_PASS // Your password
      },
      tls: {
        rejectUnauthorized: false,
        minVersion: 'TLSv1.2'
      },
      // Additional settings for WPX
      connectionTimeout: 10000,
      greetingTimeout: 10000,
      socketTimeout: 10000
    });

    // Email options with proper from format
    const mailOptions = {
      from: '"Fajit Solution" <Info@fajitsolution.com>', // Display name with email
      to: 'Info@fajitsolution.com',
      subject: `New App Cost Estimate Request - ${formData.projectName}`,
      html: `
        <h2>New App Cost Estimate Request</h2>
        <p>A new app cost estimate has been requested with the following details:</p>
        
        <h3>Contact Information:</h3>
        <ul>
          <li><strong>Project Name:</strong> ${formData.projectName}</li>
          <li><strong>Name:</strong> ${formData.name}</li>
          <li><strong>Email:</strong> ${formData.email}</li>
          <li><strong>Phone:</strong> ${formData.phoneNumber}</li>
        </ul>
        
        <h3>App Requirements:</h3>
        <ul>
          <li><strong>Platform:</strong> ${formData.platform}</li>
          <li><strong>Project Type:</strong> ${formData.projectType}</li>
          <li><strong>User Profile:</strong> ${formData.userProfile}</li>
          <li><strong>Admin Panel:</strong> ${formData.adminPanel}</li>
        </ul>
        
        <p>Please find the detailed requirements in the attached PDF.</p>
      `,
      attachments: [
        {
          filename: `${formData.projectName.replace(/\s+/g, '_')}_estimate_request.pdf`,
          content: pdfBuffer,
          contentType: 'application/pdf'
        }
      ]
    };

    // Send email with error handling
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.messageId);

    // Send confirmation to user (optional - remove if causing issues)
    try {
      const userMailOptions = {
        from: '"Fajit Solution" <Info@fajitsolution.com>',
        to: formData.email,
        subject: `Your App Cost Estimate Request - ${formData.projectName}`,
        html: `
          <h2>Thank you for your interest!</h2>
          <p>Dear ${formData.name},</p>
          
          <p>We have received your app cost estimate request for <strong>${formData.projectName}</strong>.</p>
          
          <p>Our team will review your requirements and get back to you within 24-48 hours with a detailed estimate.</p>
          
          <p>Best regards,<br>Fajit Solution Team</p>
        `
      };
      
      await transporter.sendMail(userMailOptions);
    } catch (userEmailError) {
      console.log('User notification email failed, but main email was sent');
    }

    res.status(200).json({ 
      success: true, 
      message: 'Your estimate request has been submitted successfully!' 
    });

  } catch (error) {
    console.error('Error details:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to submit request. Please try again or contact us directly.',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
}