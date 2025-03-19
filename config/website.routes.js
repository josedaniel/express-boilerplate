const express = require('express');
const website = require('../controllers/website.controller');

const router = express.Router();

router.get('/', website.homepage);

module.exports = router;
