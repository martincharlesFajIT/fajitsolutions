// pages/api/submit-calculator.js
import nodemailer from 'nodemailer';
import PDFDocument from 'pdfkit';
import { Readable } from 'stream';

// Helper function to convert stream to buffer
async function streamToBuffer(stream) {
  const chunks = [];
  for await (const chunk of stream) {
    chunks.push(chunk);
  }
  return Buffer.concat(chunks);
}

// Generate PDF with all form data
async function generatePDF(formData) {
  return new Promise(async (resolve, reject) => {
    try {
      const doc = new PDFDocument();
      const chunks = [];

      doc.on('data', chunk => chunks.push(chunk));
      doc.on('end', () => resolve(Buffer.concat(chunks)));

      // Title
      doc.fontSize(24).text('App Cost Calculator Estimate Request', 50, 50);
      doc.moveDown();

      // Contact Information
      doc.fontSize(16).text('Contact Information', { underline: true });
      doc.fontSize(12);
      doc.text(`Project Name: ${formData.projectName}`);
      doc.text(`Name: ${formData.name}`);
      doc.text(`Email: ${formData.email}`);
      doc.text(`Phone: ${formData.phoneNumber}`);
      doc.moveDown();

      // App Configuration
      doc.fontSize(16).text('App Configuration', { underline: true });
      doc.fontSize(12);
      
      // Platform
      doc.text(`Platform: ${formData.platform.charAt(0).toUpperCase() + formData.platform.slice(1)}`);
      doc.moveDown(0.5);

      // Project Type
      doc.text(`Project Type: ${formData.projectType.charAt(0).toUpperCase() + formData.projectType.slice(1)}`);
      doc.moveDown(0.5);

      // Sign-up Methods
      doc.text(`Sign-up Methods: ${formData.signupMethod.join(', ')}`);
      doc.moveDown(0.5);

      // User Profile
      doc.text(`User Profile Type: ${formData.userProfile.charAt(0).toUpperCase() + formData.userProfile.slice(1)}`);
      doc.moveDown(0.5);

      // Map Integration
      if (formData.mapIntegration.length > 0) {
        doc.text(`Map Integration Features:`);
        formData.mapIntegration.forEach(feature => {
          doc.text(`  • ${feature.charAt(0).toUpperCase() + feature.slice(1)}`);
        });
        doc.moveDown(0.5);
      }

      // Image Features
      if (formData.imageFeatures.length > 0) {
        doc.text(`Image Management Features:`);
        formData.imageFeatures.forEach(feature => {
          doc.text(`  • ${feature.charAt(0).toUpperCase() + feature.slice(1)}`);
        });
        doc.moveDown(0.5);
      }

      // Payment Gateways
      if (formData.paymentGateway.length > 0) {
        doc.text(`Payment Gateways:`);
        formData.paymentGateway.forEach(gateway => {
          doc.text(`  • ${gateway.charAt(0).toUpperCase() + gateway.slice(1)}`);
        });
        doc.moveDown(0.5);
      }

      // Admin Panel
      doc.text(`Admin Panel: ${formData.adminPanel.charAt(0).toUpperCase() + formData.adminPanel.slice(1)}`);
      doc.moveDown(0.5);

      // Analytics
      if (formData.analytics.length > 0) {
        doc.text(`Analytics Features:`);
        formData.analytics.forEach(feature => {
          doc.text(`  • ${feature.charAt(0).toUpperCase() + feature.slice(1)}`);
        });
        doc.moveDown(0.5);
      }

      // Security Features
      if (formData.appSecurity.length > 0) {
        doc.text(`Security Features:`);
        formData.appSecurity.forEach(feature => {
          doc.text(`  • ${feature.charAt(0).toUpperCase() + feature.slice(1)}`);
        });
      }

      // Footer
      doc.moveDown(2);
      doc.fontSize(10).text(`Generated on: ${new Date().toLocaleString()}`, 50, doc.page.height - 50);

      doc.end();
    } catch (error) {
      reject(error);
    }
  });
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const formData = req.body;
    console.log('Received form data:', formData.projectName);

    // Generate PDF
    const pdfBuffer = await generatePDF(formData);
    console.log('PDF generated successfully');

    // Create transporter for sending email
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'au1.wpxhosting.com',
      port: parseInt(process.env.SMTP_PORT) || 465,
      secure: process.env.SMTP_PORT === '465' ? true : false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    // Verify transporter configuration
    try {
      await transporter.verify();
      console.log('SMTP connection verified');
    } catch (verifyError) {
      console.error('SMTP verification failed:', verifyError);
      throw new Error('Email configuration error');
    }

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
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
        
        <hr>
        <p><small>This email was generated from the App Cost Calculator on ${new Date().toLocaleString()}</small></p>
      `,
      attachments: [
        {
          filename: `${formData.projectName.replace(/\s+/g, '_')}_estimate_request.pdf`,
          content: pdfBuffer,
          contentType: 'application/pdf'
        }
      ]
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Send confirmation email to user
    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: formData.email,
      subject: `Your App Cost Estimate Request - ${formData.projectName}`,
      html: `
        <h2>Thank you for your interest!</h2>
        <p>Dear ${formData.name},</p>
        
        <p>We have received your app cost estimate request for <strong>${formData.projectName}</strong>.</p>
        
        <p>Our team will review your requirements and get back to you within 24-48 hours with a detailed estimate.</p>
        
        <h3>Your Submitted Requirements:</h3>
        <ul>
          <li><strong>Platform:</strong> ${formData.platform}</li>
          <li><strong>Project Type:</strong> ${formData.projectType}</li>
          <li><strong>Sign-up Methods:</strong> ${formData.signupMethod.join(', ')}</li>
          <li><strong>User Profile:</strong> ${formData.userProfile}</li>
        </ul>
        
        <p>If you have any questions in the meantime, please don't hesitate to contact us.</p>
        
        <p>Best regards,<br>Fajit Solution Team</p>
      `,
      attachments: [
        {
          filename: `${formData.projectName.replace(/\s+/g, '_')}_estimate_request.pdf`,
          content: pdfBuffer,
          contentType: 'application/pdf'
        }
      ]
    };

    await transporter.sendMail(userMailOptions);

    res.status(200).json({ 
      success: true, 
      message: 'Your estimate request has been submitted successfully!' 
    });

  } catch (error) {
    console.error('Error submitting form:', error);
    res.status(500).json({ 
      success: false, 
      message: 'An error occurred while submitting your request. Please try again.' 
    });
  }
}