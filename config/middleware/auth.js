const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  // Obtener el token del encabezado Authorization
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ mensaje: 'Acceso no autorizado. Token requerido' });
  }

  // Extraer el token (quitar 'Bearer ')
  const token = authHeader.split(' ')[1];

  try {
    // Verificar el token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Agregar el usuario decodificado al objeto de solicitud para su uso posterior
    req.user = decoded;

    next();
  } catch (error) {
    return res.status(401).json({ mensaje: 'Token inválido' });
  }
};

module.exports = authMiddleware;
