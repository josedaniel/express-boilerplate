/**
 * Website Controller
 * Handles the public website routes and views
 */
export const homepage = (req, res) => {
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
};

export default {
  homepage
};
