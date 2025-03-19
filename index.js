const express = require('express');
const helmet = require('helmet');
const dotenv = require('dotenv');
const path = require('path');

const authMiddleware = require('./config/middleware/auth');
const website_routes = require('./config/website.routes');
const auth_routes = require('./config/auth.routes');
const api_routes = require('./config/api.routes');
const service_routes = require('./config/service.routes');


dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

// Middleware de seguridad Helmet
app.use(helmet());

// Middleware para parsear JSON
app.use(express.json());

// Configuración para servir archivos estáticos desde la carpeta public
app.use(express.static(path.join(__dirname, 'public')));

// Rutas públicas
app.use('/', website_routes);

// Rutas de autenticación
app.use('/auth', auth_routes);

// Rutas protegidas de API - requieren autenticación
app.use('/api', authMiddleware, api_routes);

// Rutas de servicios
app.use('/service', service_routes);

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
