/**
 * Website Routes Configuration
 * Sets up routes for the public-facing website
 */
import express from 'express';
import { homepage } from '../controllers/website.controller.js';

const router = express.Router();

router.get('/', homepage);

export default router;
