/**
 * Website Routes Configuration
 * Sets up routes for the public-facing website
 */
const express = require('express');
const website = require('../controllers/website.controller');

const router = express.Router();

// Homepage route
router.get('/', website.homepage);

module.exports = router;
