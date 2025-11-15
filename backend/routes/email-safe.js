const express = require('express');
const router = express.Router();

// Development contact form - logs to console
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

        // Log the message (for development/demo)
        console.log('📧 Contact Form Submission:');
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);
        console.log('Timestamp:', new Date().toISOString());
        console.log('---');

        // Simulate email sending delay
        setTimeout(() => {
            res.json({
                success: true,
                message: 'Message received! In a production environment, this would send an email to the site owner.'
            });
        }, 1000);

    } catch (error) {
        console.error('Contact form error:', error);
        res.status(500).json({
            success: false,
            message: 'Server error. Please try again later.'
        });
    }
});

// Environment info endpoint (safe to expose)
router.get('/env-info', (req, res) => {
    res.json({
        node_env: process.env.NODE_ENV || 'development',
        email_configured: !!process.env.EMAIL_USER,
        port: process.env.PORT || 3001
    });
});

module.exports = router;