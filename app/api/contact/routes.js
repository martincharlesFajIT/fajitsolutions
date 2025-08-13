// app/api/contact/route.js
const nodemailer = require('nodemailer');

export async function POST(request) {
  try {
    const { name, businessName, email, message } = await request.json();

    // Basic validation
    if (!name || !email || !message) {
      return Response.json(
        { message: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Simple transporter using your hosting provider's mail server
    const transporter = nodemailer.createTransporter({
      sendmail: true,
      newline: 'unix',
      path: '/usr/sbin/sendmail',
    });

    // If sendmail doesn't work, try this basic SMTP setup:
    // const transporter = nodemailer.createTransporter({
    //   host: 'localhost',
    //   port: 25,
    //   secure: false,
    //   tls: {
    //     rejectUnauthorized: false
    //   }
    // });

    const emailContent = `
New Contact Form Submission

Name: ${name}
${businessName ? `Business Name: ${businessName}` : ''}
Email: ${email}

Message:
${message}

---
Sent from website contact form on ${new Date().toLocaleString()}
    `;

    const mailOptions = {
      from: `"Website Contact Form" <noreply@fajitsolutions.com>`,
      to: 'info@fajitsolutions.com',
      subject: `New Contact: ${name}`,
      text: emailContent,
      replyTo: email
    };

    await transporter.sendMail(mailOptions);
    
    return Response.json({ 
      success: true,
      message: 'Message sent successfully!' 
    });

  } catch (error) {
    console.error('Email error:', error);
    
    // Fallback: If email fails, at least log the data
    console.log('Contact form data:', { name, businessName, email, message });
    
    return Response.json(
      { message: 'Message received but email delivery failed. We will contact you soon.' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return Response.json(
    { message: 'Method not allowed' },
    { status: 405 }
  );
}