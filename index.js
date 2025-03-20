/**
 * Main application file
 * This file initializes the Express server with all required middleware and routes
 */
const express = require('express');
const helmet = require('helmet');
const dotenv = require('dotenv');
const path = require('path');

// Import middleware and route configurations
const authMiddleware = require('./config/middleware/auth');
const website_routes = require('./config/website.routes');
const auth_routes = require('./config/auth.routes');
const api_routes = require('./config/api.routes');
const service_routes = require('./config/service.routes');

// Load environment variables from .env file
dotenv.config();

// Initialize Express application
const app = express();
const port = process.env.PORT || 8080;

// Helmet security middleware
app.use(helmet());

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
