/**
 * Service Routes Configuration
 * Sets up routes for public services
 */
import express from 'express';
import service from '../controllers/service.controller.js';

const router = express.Router();

// Root service route
router.get('/', service.welcome);

export default router;
