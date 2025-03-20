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
    res.render('home', {
      title: 'Express Boilerplate',
      pageTitle: 'Welcome to Express Boilerplate ✨',
      welcomeMessage: 'A modern boilerplate for web applications with Express 🚀',
      currentYear: new Date().getFullYear(),
      features: [
        '⚡ Express configured and ready to use',
        '🖌️ Handlebars as template engine',
        '🔐 JWT Authentication',
        '🔄 RESTful API',
        '🛡️ Security with Helmet'
      ]
    });
  }
};
