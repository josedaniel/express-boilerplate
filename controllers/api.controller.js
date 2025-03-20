/**
 * API Controller
 * Handles API endpoints
 */
export default {
  /**
   * Welcome message for API
   * @param {Object} req - Express request object
   * @param {Object} res - Express response object
   */
  welcome(req, res) {
    res.json({ message: 'Welcome to the API' });
  }
};
