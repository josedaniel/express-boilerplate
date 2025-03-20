/**
 * Website Controller
 * Handles the public website routes and views
 */
module.exports = {
  /**
   * Renders the homepage
   * @param {Object} req - Express request object
   * @param {Object} res - Express response object
   */
  homepage(req, res) {
    res.send('Welcome to the homepage');
  }
};
