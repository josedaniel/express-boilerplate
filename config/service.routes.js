/**
 * Service Routes Configuration
 * Sets up routes for public services
 */
const express = require('express');
const service = require('../controllers/service.controller');

const router = express.Router();

// Root service route
router.get('/', service.welcome);

module.exports = router;
