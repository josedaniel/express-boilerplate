/* eslint-disable quotes */
/**
 * Main application file
 * This file initializes the Express server with all required middleware and routes
 */
import express from 'express';
import helmet from 'helmet';
import dotenv from 'dotenv';
import path from 'path';
import { engine } from 'express-handlebars';
import { fileURLToPath } from 'url';

// Import middleware and route configurations
import authMiddleware from './config/middleware/auth.js';
import website_routes from './config/website.routes.js';
import auth_routes from './config/auth.routes.js';
import api_routes from './config/api.routes.js';
import service_routes from './config/service.routes.js';

// Para __dirname en ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables from .env file
dotenv.config();

// Initialize Express application
const app = express();
const port = process.env.PORT || 8080;

// Configure Handlebars as the default view engine
app.engine(
  'hbs',
  engine({
    extname: '.hbs',
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'views/layouts'),
    partialsDir: path.join(__dirname, 'views/partials')
  })
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// Helmet security middleware
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "'unsafe-inline'"],
        styleSrc: ["'self'", "'unsafe-inline'"],
        imgSrc: ["'self'", 'data:'],
        connectSrc: ["'self'"],
        fontSrc: ["'self'"],
        objectSrc: ["'none'"],
        mediaSrc: ["'self'"],
        frameSrc: ["'none'"],
        upgradeInsecureRequests: null
      }
    },
    // Disable HTTPS-only
    strictTransportSecurity: false
  })
);

// Middleware for parsing JSON requests
app.use(express.json());

// Configure static file serving from the public folder
app.use(express.static(path.join(__dirname, 'public')));

// Public routes
app.use('/', website_routes);

// Authentication routes
app.use('/auth', auth_routes);

// Protected API routes - require authentication
app.use('/api', authMiddleware, api_routes);

// Service routes
app.use('/service', service_routes);

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
