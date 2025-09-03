// pages/api/contact.js (for Pages Router) or app/api/contact/route.js (for App Router)

import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, phone, budget, project } = req.body;

  // Validate required fields
  if (!name || !email || !project) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    // Create transporter (using Gmail as example)
    // You can use any email service provider
    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail address
        pass: process.env.EMAIL_PASS, // Your Gmail app password
      },
    });

    // Alternative configuration for other providers:
    // const transporter = nodemailer.createTransporter({
    //   host: 'smtp.your-provider.com',
    //   port: 587,
    //   secure: false,
    //   auth: {
    //     user: process.env.EMAIL_USER,
    //     pass: process.env.EMAIL_PASS,
    //   },
    // });

    const formatBudget = (value) => {
      if (value < 100) return `AED ${value}K`;
      return `AED ${value}K+`;
    };

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'chaudharybilal@gmail.com',
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #4f46e5; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #4f46e5; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone ? `+92${phone}` : 'Not provided'}</p>
            <p><strong>Budget:</strong> ${formatBudget(budget)}</p>
          </div>
          
          <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #0369a1; margin-top: 0;">Project Details</h3>
            <p style="white-space: pre-wrap;">${project}</p>
          </div>
          
          <div style="margin-top: 30px; padding: 15px; background-color: #ecfdf5; border-left: 4px solid #10b981; border-radius: 4px;">
            <p style="margin: 0; color: #065f46;">
              <strong>Submission Time:</strong> ${new Date().toLocaleString()}
            </p>
          </div>
        </div>
      `,
      text: `
        New Contact Form Submission
        
        Name: ${name}
        Email: ${email}
        Phone: ${phone ? `+92${phone}` : 'Not provided'}
        Budget: ${formatBudget(budget)}
        
        Project Details:
        ${project}
        
        Submitted at: ${new Date().toLocaleString()}
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to send email' });
  }
}