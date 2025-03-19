const express = require('express');
const api = require('../controllers/api.controller');

const router = express.Router();

router.get('/', api.welcome);

module.exports = router;
