// app/api/submit-calculator/route.js
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const formData = await request.json();
    console.log('1. Form data received:', formData.projectName);

    // Try multiple SMTP configurations
    const configs = [
      {
        host: 'mail.fajitsolutions.com',
        port: 587,
        secure: false,
        auth: {
          user: 'info@fajitsolutions.com',
          pass: process.env.EMAIL_PASS || 'gE%7hQ%0mU]8'
        }
      },
      {
        host: 'mail.fajitsolutions.com',
        port: 465,
        secure: true,
        auth: {
          user: 'info@fajitsolutions.com',
          pass: process.env.EMAIL_PASS || 'gE%7hQ%0mU]8'
        }
      },
      {
        host: 'mail.fajitsolutions.com',
        port: 25,
        secure: false,
        auth: {
          user: 'info@fajitsolutions.com',
          pass: process.env.EMAIL_PASS || 'gE%7hQ%0mU]8'
        }
      }
    ];

    let emailSent = false;
    let lastError = null;

    // Try each configuration
    for (const config of configs) {
      try {
        console.log(`2. Trying config: ${config.host}:${config.port}`);
        
        const transporter = nodemailer.createTransport({
          ...config,
          tls: {
            rejectUnauthorized: false,
            minVersion: 'TLSv1.2'
          },
          debug: true,
          logger: true
        });

        // Test connection
        await transporter.verify();
        console.log('3. SMTP connection verified');

        // Send email
        const info = await transporter.sendMail({
          from: '"App Calculator" <info@fajitsolutions.com>',
          to: 'info@fajitsolutions.com',
          subject: `New App Estimate Request: ${formData.projectName}`,
          text: formatPlainText(formData),
          html: formatHTML(formData)
        });

        console.log('4. Email sent successfully:', info.messageId);
        emailSent = true;
        break;
      } catch (error) {
        console.error(`Failed with config ${config.port}:`, error.message);
        lastError = error;
        continue;
      }
    }

    if (!emailSent) {
      throw lastError || new Error('All SMTP configurations failed');
    }

    return NextResponse.json({
      success: true,
      message: 'Your estimate request has been submitted successfully!'
    });

  } catch (error) {
    console.error('Final error:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to send email',
        error: error.message 
      },
      { status: 500 }
    );
  }
}

function formatPlainText(formData) {
  return `
NEW APP COST ESTIMATE REQUEST

CONTACT INFORMATION:
Project Name: ${formData.projectName}
Client Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phoneNumber}

APP REQUIREMENTS:
Platform: ${formData.platform}
Project Type: ${formData.projectType}
Sign-up Methods: ${formData.signupMethod.join(', ') || 'None'}
User Profile: ${formData.userProfile}
Map Features: ${formData.mapIntegration.join(', ') || 'None'}
Image Features: ${formData.imageFeatures.join(', ') || 'None'}
Payment Gateways: ${formData.paymentGateway.join(', ') || 'None'}
Admin Panel: ${formData.adminPanel}
Analytics: ${formData.analytics.join(', ') || 'None'}
Security: ${formData.appSecurity.join(', ') || 'None'}

Submitted on: ${new Date().toLocaleString()}
`;
}

function formatHTML(formData) {
  return `
    <h2>New App Cost Estimate Request</h2>
    <h3>Contact Information:</h3>
    <ul>
      <li><strong>Project Name:</strong> ${formData.projectName}</li>
      <li><strong>Client Name:</strong> ${formData.name}</li>
      <li><strong>Email:</strong> ${formData.email}</li>
      <li><strong>Phone:</strong> ${formData.phoneNumber}</li>
    </ul>
    <h3>App Requirements:</h3>
    <ul>
      <li><strong>Platform:</strong> ${formData.platform}</li>
      <li><strong>Project Type:</strong> ${formData.projectType}</li>
      <li><strong>Sign-up Methods:</strong> ${formData.signupMethod.join(', ') || 'None'}</li>
      <li><strong>User Profile:</strong> ${formData.userProfile}</li>
      <li><strong>Map Features:</strong> ${formData.mapIntegration.join(', ') || 'None'}</li>
      <li><strong>Image Features:</strong> ${formData.imageFeatures.join(', ') || 'None'}</li>
      <li><strong>Payment Gateways:</strong> ${formData.paymentGateway.join(', ') || 'None'}</li>
      <li><strong>Admin Panel:</strong> ${formData.adminPanel}</li>
      <li><strong>Analytics:</strong> ${formData.analytics.join(', ') || 'None'}</li>
      <li><strong>Security:</strong> ${formData.appSecurity.join(', ') || 'None'}</li>
    </ul>
  `;
}