const express = require('express');
const router = express.Router();
const auth = require('../controllers/auth.controller');

router.post('/login', auth.login);
router.post('/refresh', auth.refresh);
router.get('/verify', auth.verify);


module.exports = router;
