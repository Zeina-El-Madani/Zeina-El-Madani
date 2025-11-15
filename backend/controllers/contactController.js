const nodemailer = require('nodemailer');
const Contact = require('../models/Contact');

// Email transporter configuration
const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

exports.submitContactForm = async (req, res) => {
    try {
        const { name, email, message } = req.body;

        // Validation
        if (!name || !email || !message) {
            return res.status(400).json({
                success: false,
                message: 'All fields are required'
            });
        }

        // Email validation
        const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                success: false,
                message: 'Please enter a valid email address'
            });
        }

        // Try to save to database
        let savedToDB = false;
        try {
            const contact = new Contact({ 
                name: name.trim(),
                email: email.trim().toLowerCase(),
                message: message.trim()
            });
            await contact.save();
            savedToDB = true;
        } catch (dbError) {
            console.log('📦 Message not saved to database:', dbError.message);
        }

        // Try to send email
        let emailSent = false;
        if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
            try {
                const mailOptions = {
                    from: process.env.EMAIL_USER,
                    to: 'zelmadan@u.rochester.edu',
                    subject: `🎬 New Portfolio Message from ${name}`,
                    html: `
                        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                            <h2 style="color: #007a3d;">New Contact Form Submission</h2>
                            <div style="background: #f5f1e6; padding: 20px; border-radius: 5px;">
                                <p><strong>Name:</strong> ${name}</p>
                                <p><strong>Email:</strong> ${email}</p>
                                <p><strong>Message:</strong></p>
                                <p style="background: white; padding: 15px; border-radius: 5px; border-left: 4px solid #ce1126;">
                                    ${message.replace(/\n/g, '<br>')}
                                </p>
                            </div>
                            <p style="color: #666; margin-top: 20px;">
                                Database: ${savedToDB ? '✅ Saved' : '❌ Not saved'}<br>
                                This message was sent from your portfolio website contact form.
                            </p>
                        </div>
                    `
                };

                await transporter.sendMail(mailOptions);
                emailSent = true;
            } catch (emailError) {
                console.log('📧 Email not sent:', emailError.message);
            }
        }

        res.status(200).json({ 
            success: true, 
            message: 'Message sent successfully! I will get back to you soon.',
            savedToDatabase: savedToDB,
            emailSent: emailSent
        });

    } catch (error) {
        console.error('Contact form error:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Error sending message. Please try again later.' 
        });
    }
};