import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import nodemailer from 'nodemailer';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

console.log("EMAIL_USER:", process.env.EMAIL_USER);
console.log("EMAIL_PASSWORD:", process.env.EMAIL_PASSWORD ? "Exists" : "Missing");


app.post('/api/contact', async (req, res) => {
  console.log('📧 Received contact form submission');
  
  const {
    name,
    email,
    phone,
    message,
    meetingLink,
    meetingDate,
    meetingTime,
    scheduleMeeting,
  } = req.body;

  if (!name || !email || !phone) {
    return res.status(400).json({ 
      success: false, 
      message: 'Name, email, and phone are required' 
    });
  }

  if (scheduleMeeting && (!meetingDate || !meetingTime)) {
    return res.status(400).json({ 
      success: false, 
      message: 'Meeting date and time are required for scheduling' 
    });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.hostinger.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const formattedDate = meetingDate ? new Date(meetingDate).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }) : '';
    
    const formattedTime = meetingTime ? new Date(`2000-01-01T${meetingTime}`).toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    }) : '';

    const adminEmailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .info-row { margin: 15px 0; padding: 10px; background: white; border-left: 4px solid #667eea; }
            .label { font-weight: bold; color: #667eea; }
            .meeting-details { background: #fff3cd; border-left: 4px solid #ffc107; padding: 15px; margin: 20px 0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🎯 New Contact Form Submission</h1>
            </div>
            <div class="content">
              <p>You have received a new inquiry from your website.</p>
              <div class="info-row"><span class="label">Name:</span> ${name}</div>
              <div class="info-row"><span class="label">Email:</span> ${email}</div>
              <div class="info-row"><span class="label">Phone:</span> ${phone}</div>
              ${message ? `<div class="info-row"><span class="label">Message:</span><br/>${message}</div>` : ''}
              ${scheduleMeeting ? `
              <div class="meeting-details">
                <h3 style="margin-top: 0; color: #856404;">📅 Meeting Scheduled</h3>
                <p><strong>Date:</strong> ${formattedDate}</p>
                <p><strong>Time:</strong> ${formattedTime}</p>
                <p><strong>Meeting Link:</strong> <a href="${meetingLink}">${meetingLink}</a></p>
              </div>` : ''}
            </div>
          </div>
        </body>
      </html>
    `;

    await transporter.sendMail({
      from: `"learnovia Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: scheduleMeeting ? `🎥 New Meeting Scheduled - ${name}` : `📧 New Contact Form - ${name}`,
      html: adminEmailHtml,
    });

    if (scheduleMeeting) {
      const userEmailHtml = `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 40px; text-align: center; border-radius: 10px 10px 0 0; }
              .content { background: #ffffff; padding: 30px; border-radius: 0 0 10px 10px; }
              .meeting-card { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 25px; border-radius: 10px; margin: 20px 0; text-align: center; }
              .meeting-link { display: inline-block; background: white; color: #667eea; padding: 15px 30px; border-radius: 5px; text-decoration: none; font-weight: bold; margin: 15px 0; }
              .instructions { background: #f0f8ff; border-left: 4px solid #667eea; padding: 20px; margin: 20px 0; }
              .instructions h3 { margin-top: 0; color: #667eea; }
              .instructions ul { padding-left: 20px; }
              .contact-info { background: #f9f9f9; padding: 15px; border-radius: 5px; margin: 15px 0; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>🎉 Your Meeting is Confirmed!</h1>
                <p style="font-size: 18px; margin: 10px 0;">We're excited to meet with you, ${name}!</p>
              </div>
              <div class="content">
                <p>Thank you for scheduling a video consultation with our career counselor at Learnovia.</p>
                <div class="meeting-card">
                  <h2 style="margin-top: 0;">📅 Meeting Details</h2>
                  <p style="font-size: 20px; margin: 10px 0;"><strong>${formattedDate}</strong></p>
                  <p style="font-size: 24px; margin: 10px 0;"><strong>⏰ ${formattedTime}</strong></p>
                  <a href="${meetingLink}" class="meeting-link">🎥 Join Video Meeting</a>
                  <p style="font-size: 14px; margin-top: 15px;">Click the button above or use this link:<br/>
                  <span style="font-size: 12px; opacity: 0.9;">${meetingLink}</span></p>
                </div>
                <div class="instructions">
                  <h3>📋 Before Your Meeting:</h3>
                  <ul>
                    <li><strong>Test Your Equipment:</strong> Ensure your camera and microphone are working</li>
                    <li><strong>Stable Internet:</strong> Connect to a reliable internet connection</li>
                    <li><strong>Quiet Environment:</strong> Find a quiet space for the meeting</li>
                    <li><strong>Join 5 Minutes Early:</strong> This gives you time to set up</li>
                    <li><strong>Prepare Questions:</strong> Have your career questions ready</li>
                  </ul>
                </div>
                <div class="contact-info">
                  <h3 style="color: #667eea; margin-top: 0;">📞 Need to Reschedule?</h3>
                  <p>Contact us at:</p>
                  <p>📧 Email: <a href="mailto:info@learnovia.com">info@learnovia.com</a></p>
                  <p>📱 Phone: <a href="tel:+918374779361">+91 8374779361</a> / <a href="tel:+919704879361">+91 9704879361</a></p>
                </div>
              </div>
            </div>
          </body>
        </html>
      `;

      await transporter.sendMail({
        from: `"learnovia Team" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: `✅ Meeting Confirmed - ${formattedDate} at ${formattedTime}`,
        html: userEmailHtml,
      });
    } else {
      const simpleUserEmailHtml = `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
              .content { background: #ffffff; padding: 30px; border-radius: 0 0 10px 10px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header"><h1>✅ Message Received!</h1></div>
              <div class="content">
                <p>Hi ${name},</p>
                <p>Thank you for contacting learnovia! We've received your message and our team will get back to you within 2 hours.</p>
                <p>If you need immediate assistance, feel free to call us at:</p>
                <p>📱 +91 8374779361 or +91 9704879361</p>
              </div>
            </div>
          </body>
        </html>
      `;

      await transporter.sendMail({
        from: `"learnovia Team" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: '✅ We Received Your Message - learnovia',
        html: simpleUserEmailHtml,
      });
    }

    console.log('✅ Emails sent successfully');
    
    res.status(200).json({ 
      success: true, 
      message: scheduleMeeting 
        ? 'Meeting scheduled successfully! Check your email for details.' 
        : 'Message sent successfully! We will contact you soon.' 
    });

  } catch (error) {
    console.error('❌ Error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to process your request. Please try again.',
      error: error.message
    });
  }
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running!' });
});

app.listen(PORT, () => {
  console.log(`\n✅ Backend Server Started!`);
  console.log(`🚀 Server running on: http://localhost:${PORT}`);
  console.log(`📧 API endpoint: http://localhost:${PORT}/api/contact\n`);
});