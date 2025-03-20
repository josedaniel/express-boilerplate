/**
 * Authentication Middleware
 * This module provides JWT token validation functionality for protected routes
 */
import jwt from 'jsonwebtoken';

/**
 * Middleware for authenticating users via JWT tokens
 * Validates the JWT token from the Authorization header and adds decoded user data to the request object
 *
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 * @returns {Object|void} Returns error response or calls next middleware
 */
const authMiddleware = (req, res, next) => {
  // Get token from Authorization header
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Unauthorized access. Token required' });
  }

  // Extract token (remove 'Bearer ' prefix)
  const token = authHeader.split(' ')[1];

  try {
    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Add the decoded user to the request object for later use
    req.user = decoded;

    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token', error });
  }
};

export default authMiddleware;
