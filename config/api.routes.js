/**
 * API Routes Configuration
 * Sets up routes for API endpoints
 */
import express from 'express';
import api from '../controllers/api.controller.js';

const router = express.Router();

// Root API route
router.get('/', api.welcome);

export default router;
