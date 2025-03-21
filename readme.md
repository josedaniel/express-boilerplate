# Express Boilerplate

A basic boilerplate for building Express.js applications.

## Features:

- Modular route and controller structure
- Middleware support for request handling
- Handlebars templating engine for views
- Static file serving (CSS, JS, etc.)
- Environment-based configuration
- Example `.env` file for environment variables
- Pre-configured ESLint and Prettier for code quality
- Nodemon for development server auto-reloading

## Project Structure:

```
express-boilerplate/
├── bruno-data/             # Placeholder for data-related files
├── client/                 # Placeholder for client-side code
├── config/                 # Configuration files
│   ├── middleware/         # Custom middleware
│   ├── api.routes.js       # API route definitions
│   ├── auth.routes.js      # Authentication route definitions
│   ├── service.routes.js   # Service route definitions
│   └── website.routes.js   # Website route definitions
├── controllers/            # Route handlers/controllers
│   ├── api.controller.js   # API controller logic
│   ├── auth.controller.js  # Authentication controller logic
│   ├── service.controller.js # Service controller logic
│   └── website.controller.js # Website controller logic
├── helpers/                # Utility/helper functions
├── public/                 # Static files (CSS, JS, images)
│   ├── css/                # Stylesheets
│   └── js/                 # JavaScript files
├── views/                  # Handlebars templates
│   ├── layouts/            # Layout templates
│   ├── main.hbs            # Main layout
│   └── home.hbs            # Home page template
├── .env                    # Environment variables file
├── .env.sample             # Example environment variables file
├── .editorconfig           # Editor configuration
├── .gitignore              # Git ignore rules
├── eslint.config.mjs       # ESLint configuration
├── index.js                # Main application entry point
├── nodemon.json            # Nodemon configuration
├── package.json            # Project dependencies
├── pnpm-lock.yaml          # Lock file for pnpm
├── readme.md               # Project documentation
└── tsconfig.json           # TypeScript configuration (if applicable)
```

## Roadmap:

- Add configurations to enable/disable route families
- Install a default pm2 configuration
- Create some defaults for Copilot
