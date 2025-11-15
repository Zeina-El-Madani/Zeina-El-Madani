const express = require('express');
const cors = require('cors');
const emailRoutes = require('./routes/email');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', emailRoutes);

// Basic route
app.get('/', (req, res) => {
    res.json({ 
        message: 'Portfolio Backend API is running!',
        version: '1.0.0',
        author: 'Zeina El Madani',
        endpoints: {
            contact: '/api/contact',
            health: '/api/health'
        }
    });
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ 
        status: 'OK', 
        timestamp: new Date().toISOString(),
        environment: process.env.NODE_ENV || 'development'
    });
});

// 404 handler
app.use('*', (req, res) => {
    res.status(404).json({
        error: 'Endpoint not found',
        availableEndpoints: {
            home: '/',
            health: '/health',
            contact: '/api/contact'
        }
    });
});

// Error handling middleware
app.use((error, req, res, next) => {
    console.error('Server Error:', error);
    res.status(500).json({
        error: 'Internal server error',
        message: process.env.NODE_ENV === 'development' ? error.message : 'Something went wrong'
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Portfolio Backend Server running on port ${PORT}`);
    console.log(`📧 Email configured: ${process.env.EMAIL_USER ? 'Yes' : 'No (using fallback)'}`);
    console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
});