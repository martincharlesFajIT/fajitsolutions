// pages/api/test-email.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'au1.wpxhosting.com',
      port: parseInt(process.env.SMTP_PORT) || 465,
      secure: process.env.SMTP_PORT === '465' ? true : false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      },
      tls: {
        rejectUnauthorized: false
      },
      debug: true, // Enable debug output
      logger: true // Log information to console
    });

    // Verify connection
    await transporter.verify();
    
    // Send test email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: 'Test Email',
      text: 'This is a test email from your app calculator.'
    });

    res.status(200).json({ success: true, message: 'Test email sent successfully!' });
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Email error', 
      error: error.message,
      details: error.response || error.stack
    });
  }
}