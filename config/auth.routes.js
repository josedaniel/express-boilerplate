/**
 * Authentication Routes Configuration
 * Sets up routes for authentication operations
 */
import express from 'express';
import auth from '../controllers/auth.controller.js';

const router = express.Router();

// Authentication routes
router.post('/login', auth.login);
router.post('/refresh', auth.refresh);
router.get('/verify', auth.verify);

export default router;
