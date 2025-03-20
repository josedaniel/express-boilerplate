/**
 * Service Controller
 * Handles public service endpoints
 */
module.exports = {
  /**
   * Welcome message for public services
   * @param {Object} req - Express request object
   * @param {Object} res - Express response object
   */
  welcome(req, res) {
    res.json({ message: 'Welcome to public services' });
  }
};
