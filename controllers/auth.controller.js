/**
 * Authentication Controller
 * Manages user authentication, token generation, verification and refresh
 */
const jwt = require('jsonwebtoken');

module.exports = {
  /**
   * User login endpoint
   * Validates credentials and returns a JWT token
   * @param {Object} req - Express request object with username and password
   * @param {Object} res - Express response object
   */
  login(req, res) {
    const { username, password } = req.body;

    if (username !== 'admin' || password !== '1234') {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({ token });
  },

  /**
   * Token refresh endpoint
   * Generates a new token based on a valid existing one
   * @param {Object} req - Express request object with token
   * @param {Object} res - Express response object
   */
  refresh(req, res) {
    const { token } = req.body;

    try {
      // Verify current token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Generate new token
      const newToken = jwt.sign({ username: decoded.username }, process.env.JWT_SECRET, {
        expiresIn: '1h'
      });

      res.json({ token: newToken });
    } catch (error) {
      res.status(401).json({ message: 'Invalid or expired token', error });
    }
  },

  /**
   * Token verification endpoint
   * Checks if a provided token is valid
   * @param {Object} req - Express request object
   * @param {Object} res - Express response object
   */
  verify(req, res) {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'No token provided' });
    }

    const token = authHeader.split(' ')[1];

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      res.json({ valid: true, user: decoded });
    } catch (error) {
      res.status(401).json({ valid: false, message: 'Invalid token', error });
    }
  }
};
