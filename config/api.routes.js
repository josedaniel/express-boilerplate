/**
 * API Routes Configuration
 * Sets up routes for API endpoints
 */
const express = require('express');
const api = require('../controllers/api.controller');

const router = express.Router();

// Root API route
router.get('/', api.welcome);

module.exports = router;
