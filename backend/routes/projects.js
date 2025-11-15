const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

// GET /api/projects - Get all projects
router.get('/', async (req, res) => {
    try {
        const projects = await Project.find().sort({ createdAt: -1 });
        res.json(projects);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching projects' });
    }
});

module.exports = router;