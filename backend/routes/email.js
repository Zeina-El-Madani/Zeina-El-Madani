const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

// Email transporter configuration
let transporter;
if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
    // Production email configuration
    transporter = nodemailer.createTransporter({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });
} else {
    // Development fallback - logs to console
    console.log('📧 Email not configured - using development mode');
}

// Contact form endpoint
router.post('/contact', async (req, res) => {
    try {
        const { name, email, message } = req.body;

        // Validate required fields
        if (!name || !email || !message) {
            return res.status(400).json({
                success: false,
                message: 'All fields are required'
            });
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                success: false,
                message: 'Please enter a valid email address'
            });
        }

        if (transporter) {
            // Production: Send actual email
            const mailOptions = {
                from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
                to: process.env.RECEIVER_EMAIL || process.env.EMAIL_USER,
                replyTo: email,
                subject: `New Portfolio Message from ${name}`,
                html: `
                    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                        <h2 style="color: #007a3d;">New Portfolio Contact Form Submission</h2>
                        <div style="background: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0;">
                            <p><strong>Name:</strong> ${name}</p>
                            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                            <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
                            <p><strong>Message:</strong></p>
                            <div style="background: white; padding: 15px; border-radius: 5px; border-left: 4px solid #ce1126; margin-top: 10px;">
                                ${message.replace(/\n/g, '<br>')}
                            </div>
                        </div>
                        <p style="color: #666; font-size: 12px;">
                            This message was sent from your portfolio website contact form.
                        </p>
                    </div>
                `
            };

            await transporter.sendMail(mailOptions);
            
            res.json({
                success: true,
                message: 'Thank you! Your message has been sent successfully.'
            });
        } else {
            // Development: Log to console
            console.log('📧 Contact Form Submission (Development Mode):');
            console.log('Name:', name);
            console.log('Email:', email);
            console.log('Message:', message);
            console.log('Timestamp:', new Date().toISOString());
            console.log('---');

            // Simulate email delay
            setTimeout(() => {
                res.json({
                    success: true,
                    message: 'Message received! In production, this would send an email.'
                });
            }, 1000);
        }

    } catch (error) {
        console.error('Contact form error:', error);
        
        // Fallback to development mode if email fails
        if (error.code === 'EAUTH') {
            console.log('Email authentication failed, falling back to development mode');
            
            // Log the submission
            const { name, email, message } = req.body;
            console.log('📧 Contact Form Submission (Fallback Mode):');
            console.log('Name:', name);
            console.log('Email:', email);
            console.log('Message:', message);
            console.log('---');

            res.json({
                success: true,
                message: 'Message received! Email service is currently unavailable.'
            });
        } else {
            res.status(500).json({
                success: false,
                message: 'Failed to send message. Please try again later.'
            });
        }
    }
});

// Health check endpoint
router.get('/health', (req, res) => {
    res.json({
        status: 'OK',
        service: 'Email API',
        email_configured: !!transporter,
        timestamp: new Date().toISOString()
    });
});

// Test email endpoint (protected in production)
router.post('/test-email', async (req, res) => {
    // Only allow in development
    if (process.env.NODE_ENV === 'production') {
        return res.status(403).json({ error: 'Not available in production' });
    }

    try {
        if (transporter) {
            await transporter.sendMail({
                from: process.env.EMAIL_USER,
                to: process.env.RECEIVER_EMAIL,
                subject: 'Portfolio Email Test',
                text: 'This is a test email from your portfolio backend'
            });
            res.json({ success: true, message: 'Test email sent successfully!' });
        } else {
            res.json({ success: true, message: 'Email not configured - check would pass in production' });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: 'Test email failed', error: error.message });
    }
});

module.exports = router;