// import cors from 'cors';
// import dotenv from 'dotenv';
// import express from 'express';
// import nodemailer from 'nodemailer';

// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 5000;

// app.use(cors());
// app.use(express.json());

// console.log("EMAIL_USER:", process.env.EMAIL_USER);
// console.log("EMAIL_PASSWORD:", process.env.EMAIL_PASSWORD ? "Exists" : "Missing");


// app.post('/api/contact', async (req, res) => {
//   console.log('📧 Received contact form submission');
  
//   const {
//     name,
//     email,
//     phone,
//     message,
//     meetingLink,
//     meetingDate,
//     meetingTime,
//     scheduleMeeting,
//   } = req.body;

//   if (!name || !email || !phone) {
//     return res.status(400).json({ 
//       success: false, 
//       message: 'Name, email, and phone are required' 
//     });
//   }

//   if (scheduleMeeting && (!meetingDate || !meetingTime)) {
//     return res.status(400).json({ 
//       success: false, 
//       message: 'Meeting date and time are required for scheduling' 
//     });
//   }

//   try {
//     const transporter = nodemailer.createTransport({
//       host: 'smtp.hostinger.com',
//       port: 465,
//       secure: true,
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASSWORD,
//       },
//     });

//     const formattedDate = meetingDate ? new Date(meetingDate).toLocaleDateString('en-US', {
//       weekday: 'long',
//       year: 'numeric',
//       month: 'long',
//       day: 'numeric'
//     }) : '';
    
//     const formattedTime = meetingTime ? new Date(`2000-01-01T${meetingTime}`).toLocaleTimeString('en-US', {
//       hour: 'numeric',
//       minute: '2-digit',
//       hour12: true
//     }) : '';

//     const adminEmailHtml = `
//       <!DOCTYPE html>
//       <html>
//         <head>
//           <style>
//             body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
//             .container { max-width: 600px; margin: 0 auto; padding: 20px; }
//             .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
//             .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
//             .info-row { margin: 15px 0; padding: 10px; background: white; border-left: 4px solid #667eea; }
//             .label { font-weight: bold; color: #667eea; }
//             .meeting-details { background: #fff3cd; border-left: 4px solid #ffc107; padding: 15px; margin: 20px 0; }
//           </style>
//         </head>
//         <body>
//           <div class="container">
//             <div class="header">
//               <h1>🎯 New Contact Form Submission</h1>
//             </div>
//             <div class="content">
//               <p>You have received a new inquiry from your website.</p>
//               <div class="info-row"><span class="label">Name:</span> ${name}</div>
//               <div class="info-row"><span class="label">Email:</span> ${email}</div>
//               <div class="info-row"><span class="label">Phone:</span> ${phone}</div>
//               ${message ? `<div class="info-row"><span class="label">Message:</span><br/>${message}</div>` : ''}
//               ${scheduleMeeting ? `
//               <div class="meeting-details">
//                 <h3 style="margin-top: 0; color: #856404;">📅 Meeting Scheduled</h3>
//                 <p><strong>Date:</strong> ${formattedDate}</p>
//                 <p><strong>Time:</strong> ${formattedTime}</p>
//                 <p><strong>Meeting Link:</strong> <a href="${meetingLink}">${meetingLink}</a></p>
//               </div>` : ''}
//             </div>
//           </div>
//         </body>
//       </html>
//     `;

//     await transporter.sendMail({
//       from: `"learnovia Contact" <${process.env.EMAIL_USER}>`,
//       to: process.env.EMAIL_USER,
//       subject: scheduleMeeting ? `🎥 New Meeting Scheduled - ${name}` : `📧 New Contact Form - ${name}`,
//       html: adminEmailHtml,
//     });

//     if (scheduleMeeting) {
//       const userEmailHtml = `
//         <!DOCTYPE html>
//         <html>
//           <head>
//             <style>
//               body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
//               .container { max-width: 600px; margin: 0 auto; padding: 20px; }
//               .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 40px; text-align: center; border-radius: 10px 10px 0 0; }
//               .content { background: #ffffff; padding: 30px; border-radius: 0 0 10px 10px; }
//               .meeting-card { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 25px; border-radius: 10px; margin: 20px 0; text-align: center; }
//               .meeting-link { display: inline-block; background: white; color: #667eea; padding: 15px 30px; border-radius: 5px; text-decoration: none; font-weight: bold; margin: 15px 0; }
//               .instructions { background: #f0f8ff; border-left: 4px solid #667eea; padding: 20px; margin: 20px 0; }
//               .instructions h3 { margin-top: 0; color: #667eea; }
//               .instructions ul { padding-left: 20px; }
//               .contact-info { background: #f9f9f9; padding: 15px; border-radius: 5px; margin: 15px 0; }
//             </style>
//           </head>
//           <body>
//             <div class="container">
//               <div class="header">
//                 <h1>🎉 Your Meeting is Confirmed!</h1>
//                 <p style="font-size: 18px; margin: 10px 0;">We're excited to meet with you, ${name}!</p>
//               </div>
//               <div class="content">
//                 <p>Thank you for scheduling a video consultation with our career counselor at Learnovia.</p>
//                 <div class="meeting-card">
//                   <h2 style="margin-top: 0;">📅 Meeting Details</h2>
//                   <p style="font-size: 20px; margin: 10px 0;"><strong>${formattedDate}</strong></p>
//                   <p style="font-size: 24px; margin: 10px 0;"><strong>⏰ ${formattedTime}</strong></p>
//                   <a href="${meetingLink}" class="meeting-link">🎥 Join Video Meeting</a>
//                   <p style="font-size: 14px; margin-top: 15px;">Click the button above or use this link:<br/>
//                   <span style="font-size: 12px; opacity: 0.9;">${meetingLink}</span></p>
//                 </div>
//                 <div class="instructions">
//                   <h3>📋 Before Your Meeting:</h3>
//                   <ul>
//                     <li><strong>Test Your Equipment:</strong> Ensure your camera and microphone are working</li>
//                     <li><strong>Stable Internet:</strong> Connect to a reliable internet connection</li>
//                     <li><strong>Quiet Environment:</strong> Find a quiet space for the meeting</li>
//                     <li><strong>Join 5 Minutes Early:</strong> This gives you time to set up</li>
//                     <li><strong>Prepare Questions:</strong> Have your career questions ready</li>
//                   </ul>
//                 </div>
//                 <div class="contact-info">
//                   <h3 style="color: #667eea; margin-top: 0;">📞 Need to Reschedule?</h3>
//                   <p>Contact us at:</p>
//                   <p>📧 Email: <a href="mailto:info@learnovia.com">info@learnovia.com</a></p>
//                   <p>📱 Phone: <a href="tel:+918374779361">+91 8374779361</a> / <a href="tel:+919704879361">+91 9704879361</a></p>
//                 </div>
//               </div>
//             </div>
//           </body>
//         </html>
//       `;

//       await transporter.sendMail({
//         from: `"learnovia Team" <${process.env.EMAIL_USER}>`,
//         to: email,
//         subject: `✅ Meeting Confirmed - ${formattedDate} at ${formattedTime}`,
//         html: userEmailHtml,
//       });
//     } else {
//       const simpleUserEmailHtml = `
//         <!DOCTYPE html>
//         <html>
//           <head>
//             <style>
//               body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
//               .container { max-width: 600px; margin: 0 auto; padding: 20px; }
//               .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
//               .content { background: #ffffff; padding: 30px; border-radius: 0 0 10px 10px; }
//             </style>
//           </head>
//           <body>
//             <div class="container">
//               <div class="header"><h1>✅ Message Received!</h1></div>
//               <div class="content">
//                 <p>Hi ${name},</p>
//                 <p>Thank you for contacting learnovia! We've received your message and our team will get back to you within 2 hours.</p>
//                 <p>If you need immediate assistance, feel free to call us at:</p>
//                 <p>📱 +91 8374779361 or +91 9704879361</p>
//               </div>
//             </div>
//           </body>
//         </html>
//       `;

//       await transporter.sendMail({
//         from: `"learnovia Team" <${process.env.EMAIL_USER}>`,
//         to: email,
//         subject: '✅ We Received Your Message - learnovia',
//         html: simpleUserEmailHtml,
//       });
//     }

//     console.log('✅ Emails sent successfully');
    
//     res.status(200).json({ 
//       success: true, 
//       message: scheduleMeeting 
//         ? 'Meeting scheduled successfully! Check your email for details.' 
//         : 'Message sent successfully! We will contact you soon.' 
//     });

//   } catch (error) {
//     console.error('❌ Error:', error);
//     res.status(500).json({ 
//       success: false, 
//       message: 'Failed to process your request. Please try again.',
//       error: error.message
//     });
//   }
// });

// app.get('/api/health', (req, res) => {
//   res.json({ status: 'Server is running!' });
// });

// app.listen(PORT, () => {
//   console.log(`\n✅ Backend Server Started!`);
//   console.log(`🚀 Server running on: http://localhost:${PORT}`);
//   console.log(`📧 API endpoint: http://localhost:${PORT}/api/contact\n`);
// });

import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV || 'development';

// CORS configuration
const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:5174',
  'http://localhost:3000',
  process.env.FRONTEND_URL, // Add your production URL in .env
].filter(Boolean);

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (mobile apps, Postman, etc.)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.indexOf(origin) !== -1 || NODE_ENV === 'development') {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));

app.use(express.json({ limit: '10mb' }));

// Simple rate limiting (in-memory, suitable for single instance)
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS = 5; // 5 requests per minute per IP

const rateLimit = (req, res, next) => {
  const ip = req.ip || req.connection.remoteAddress;
  const now = Date.now();
  
  if (!rateLimitMap.has(ip)) {
    rateLimitMap.set(ip, []);
  }
  
  const timestamps = rateLimitMap.get(ip).filter(time => now - time < RATE_LIMIT_WINDOW);
  
  if (timestamps.length >= MAX_REQUESTS) {
    return res.status(429).json({ 
      success: false, 
      message: 'Too many requests. Please try again later.' 
    });
  }
  
  timestamps.push(now);
  rateLimitMap.set(ip, timestamps);
  next();
};

// Clean up rate limit map periodically
setInterval(() => {
  const now = Date.now();
  for (const [ip, timestamps] of rateLimitMap.entries()) {
    const validTimestamps = timestamps.filter(time => now - time < RATE_LIMIT_WINDOW);
    if (validTimestamps.length === 0) {
      rateLimitMap.delete(ip);
    } else {
      rateLimitMap.set(ip, validTimestamps);
    }
  }
}, RATE_LIMIT_WINDOW);

// Validate environment variables
const validateEnv = () => {
  const required = ['EMAIL_USER', 'EMAIL_PASSWORD'];
  const missing = required.filter(key => !process.env[key]);
  
  if (missing.length > 0) {
    console.error('❌ Missing required environment variables:', missing.join(', '));
    console.error('Please check your .env file');
    process.exit(1);
  }
};

validateEnv();

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'Server is running!',
    timestamp: new Date().toISOString(),
    environment: NODE_ENV
  });
});

// Contact form endpoint with rate limiting
app.post('/api/contact', rateLimit, async (req, res) => {
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

  // Input validation
  if (!name || !email || !phone) {
    return res.status(400).json({ 
      success: false, 
      message: 'Name, email, and phone are required' 
    });
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ 
      success: false, 
      message: 'Please provide a valid email address' 
    });
  }

  // Phone validation (10 digits)
  const phoneRegex = /^\d{10}$/;
  if (!phoneRegex.test(phone)) {
    return res.status(400).json({ 
      success: false, 
      message: 'Please provide a valid 10-digit phone number' 
    });
  }

  // Name validation (no special characters)
  if (name.length > 100) {
    return res.status(400).json({ 
      success: false, 
      message: 'Name is too long' 
    });
  }

  if (scheduleMeeting && (!meetingDate || !meetingTime)) {
    return res.status(400).json({ 
      success: false, 
      message: 'Meeting date and time are required for scheduling' 
    });
  }

  // Meeting link validation
  if (scheduleMeeting && meetingLink) {
    try {
      const url = new URL(meetingLink);
      if (!url.pathname.startsWith('/meeting/')) {
        throw new Error('Invalid meeting link format');
      }
    } catch (err) {
      return res.status(400).json({ 
        success: false, 
        message: 'Invalid meeting link provided' 
      });
    }
  }

  try {
    // Create nodemailer transporter with timeout and retry
    const transporter = nodemailer.createTransport({
      host: 'smtp.hostinger.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
      tls: {
        rejectUnauthorized: true
      },
      connectionTimeout: 10000, // 10 seconds
      greetingTimeout: 10000,
      socketTimeout: 10000,
    });

    // Verify SMTP connection
    try {
      await transporter.verify();
    } catch (verifyError) {
      console.error('SMTP verification failed:', verifyError);
      throw new Error('Email service is temporarily unavailable');
    }

    // Format date and time safely
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

    // Sanitize inputs for HTML (prevent XSS)
    const sanitize = (str) => String(str).replace(/[&<>"']/g, (char) => {
      const escapeMap = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
      };
      return escapeMap[char];
    });

    const safeName = sanitize(name);
    const safeEmail = sanitize(email);
    const safePhone = sanitize(phone);
    const safeMessage = message ? sanitize(message) : '';

    // Admin email HTML
    const adminEmailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .info-row { margin: 15px 0; padding: 10px; background: white; border-left: 4px solid #667eea; word-wrap: break-word; }
            .label { font-weight: bold; color: #667eea; }
            .meeting-details { background: #fff3cd; border-left: 4px solid #ffc107; padding: 15px; margin: 20px 0; }
            .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
            @media only screen and (max-width: 600px) {
              .container { padding: 10px; }
              .header, .content { padding: 20px; }
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0;">🎯 New Contact Form Submission</h1>
            </div>
            <div class="content">
              <p>You have received a new inquiry from your website.</p>
              <div class="info-row"><span class="label">Name:</span> ${safeName}</div>
              <div class="info-row"><span class="label">Email:</span> ${safeEmail}</div>
              <div class="info-row"><span class="label">Phone:</span> ${safePhone}</div>
              ${safeMessage ? `<div class="info-row"><span class="label">Message:</span><br/>${safeMessage}</div>` : ''}
              ${scheduleMeeting ? `
              <div class="meeting-details">
                <h3 style="margin-top: 0; color: #856404;">📅 Meeting Scheduled</h3>
                <p><strong>Date:</strong> ${formattedDate}</p>
                <p><strong>Time:</strong> ${formattedTime}</p>
                <p><strong>Meeting Link:</strong> <a href="${meetingLink}" style="color: #667eea; word-break: break-all;">${meetingLink}</a></p>
              </div>` : ''}
              <div class="footer">
                <p>This email was sent from your Learnovia contact form at ${new Date().toLocaleString()}</p>
              </div>
            </div>
          </div>
        </body>
      </html>
    `;

    // Send email to admin with retry logic
    let adminEmailSent = false;
    let retries = 2;
    
    while (!adminEmailSent && retries > 0) {
      try {
        await transporter.sendMail({
          from: `"Learnovia Contact" <${process.env.EMAIL_USER}>`,
          to: process.env.EMAIL_USER,
          subject: scheduleMeeting 
            ? `🎥 New Meeting Scheduled - ${safeName}` 
            : `📧 New Contact Form - ${safeName}`,
          html: adminEmailHtml,
        });
        adminEmailSent = true;
        console.log('✅ Admin email sent successfully');
      } catch (error) {
        retries--;
        if (retries === 0) throw error;
        console.log(`Retrying admin email... (${retries} attempts left)`);
        await new Promise(resolve => setTimeout(resolve, 2000));
      }
    }

    // Send user confirmation email
    let userEmailHtml;
    
    if (scheduleMeeting) {
      userEmailHtml = `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 40px; text-align: center; border-radius: 10px 10px 0 0; }
              .content { background: #ffffff; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
              .meeting-card { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 25px; border-radius: 10px; margin: 20px 0; text-align: center; }
              .meeting-link { display: inline-block; background: white; color: #667eea; padding: 15px 30px; border-radius: 5px; text-decoration: none; font-weight: bold; margin: 15px 0; word-break: break-all; }
              .instructions { background: #f0f8ff; border-left: 4px solid #667eea; padding: 20px; margin: 20px 0; }
              .instructions h3 { margin-top: 0; color: #667eea; }
              .instructions ul { padding-left: 20px; }
              .contact-info { background: #f9f9f9; padding: 15px; border-radius: 5px; margin: 15px 0; }
              .footer { text-align: center; margin-top: 30px; padding-top: 20px; border-top: 2px solid #eee; color: #666; }
              @media only screen and (max-width: 600px) {
                .container { padding: 10px; }
                .header, .content { padding: 20px; }
                .meeting-card { padding: 15px; }
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1 style="margin: 0;">🎉 Your Meeting is Confirmed!</h1>
                <p style="font-size: 18px; margin: 10px 0 0 0;">We're excited to meet with you, ${safeName}!</p>
              </div>
              <div class="content">
                <p>Thank you for scheduling a video consultation with our career counselor at Learnovia.</p>
                <div class="meeting-card">
                  <h2 style="margin-top: 0;">📅 Meeting Details</h2>
                  <p style="font-size: 20px; margin: 10px 0;"><strong>${formattedDate}</strong></p>
                  <p style="font-size: 24px; margin: 10px 0;"><strong>⏰ ${formattedTime}</strong></p>
                  <a href="${meetingLink}" class="meeting-link">🎥 Join Video Meeting</a>
                  <p style="font-size: 14px; margin-top: 15px;">Click the button above or copy this link:<br/>
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
                  <p>📧 Email: <a href="mailto:info@learnovia.com" style="color: #667eea;">info@learnovia.com</a></p>
                  <p>📱 Phone: <a href="tel:+918374779361" style="color: #667eea;">+91 8374779361</a> / <a href="tel:+919704879361" style="color: #667eea;">+91 9704879361</a></p>
                </div>
                <div class="footer">
                  <p><strong>Learnovia - Your Career Partner</strong></p>
                  <p>Flat No. 301 A Block Okaz Complex, Opposite to Pillar No.5<br/>
                  Mehdipatnam, Hyderabad, India-500028</p>
                  <p style="font-size: 12px; color: #999; margin-top: 15px;">
                    If you didn't schedule this meeting, please contact us immediately.
                  </p>
                </div>
              </div>
            </div>
          </body>
        </html>
      `;
    } else {
      userEmailHtml = `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
              .content { background: #ffffff; padding: 30px; border-radius: 0 0 10px 10px; }
              .footer { text-align: center; margin-top: 20px; color: #666; }
              @media only screen and (max-width: 600px) {
                .container { padding: 10px; }
                .header, .content { padding: 20px; }
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header"><h1 style="margin: 0;">✅ Message Received!</h1></div>
              <div class="content">
                <p>Hi ${safeName},</p>
                <p>Thank you for contacting Learnovia! We've received your message and our team will get back to you within 2 hours.</p>
                <p>If you need immediate assistance, feel free to call us at:</p>
                <p>📱 <a href="tel:+918374779361" style="color: #667eea;">+91 8374779361</a> or <a href="tel:+919704879361" style="color: #667eea;">+91 9704879361</a></p>
                <div class="footer">
                  <p><strong>Learnovia</strong><br/>Your Career Partner</p>
                </div>
              </div>
            </div>
          </body>
        </html>
      `;
    }

    // Send user email with retry
    let userEmailSent = false;
    retries = 2;
    
    while (!userEmailSent && retries > 0) {
      try {
        await transporter.sendMail({
          from: `"Learnovia Team" <${process.env.EMAIL_USER}>`,
          to: email,
          subject: scheduleMeeting 
            ? `✅ Meeting Confirmed - ${formattedDate} at ${formattedTime}` 
            : '✅ We Received Your Message - Learnovia',
          html: userEmailHtml,
        });
        userEmailSent = true;
        console.log('✅ User email sent successfully');
      } catch (error) {
        retries--;
        if (retries === 0) {
          console.error('Failed to send user email after retries:', error);
          // Don't fail the request if user email fails
        } else {
          console.log(`Retrying user email... (${retries} attempts left)`);
          await new Promise(resolve => setTimeout(resolve, 2000));
        }
      }
    }

    res.status(200).json({ 
      success: true, 
      message: scheduleMeeting 
        ? 'Meeting scheduled successfully! Check your email for details.' 
        : 'Message sent successfully! We will contact you soon.' 
    });

  } catch (error) {
    console.error('❌ Error processing request:', error);
    
    // Log error details for debugging (don't send to client in production)
    if (NODE_ENV === 'development') {
      console.error('Error details:', error.stack);
    }
    
    res.status(500).json({ 
      success: false, 
      message: 'We encountered an issue processing your request. Please try again or contact us directly.',
    });
  }
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ 
    success: false, 
    message: 'Endpoint not found' 
  });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ 
    success: false, 
    message: 'An unexpected error occurred' 
  });
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received, shutting down gracefully...');
  process.exit(0);
});

process.on('SIGINT', () => {
  console.log('SIGINT received, shutting down gracefully...');
  process.exit(0);
});

app.listen(PORT, () => {
  console.log(`\n✅ Backend Server Started!`);
  console.log(`🚀 Server running on: http://localhost:${PORT}`);
  console.log(`📧 API endpoint: http://localhost:${PORT}/api/contact`);
  console.log(`🌍 Environment: ${NODE_ENV}`);
  console.log(`📬 Email configured: ${process.env.EMAIL_USER}\n`);
});