const jwt = require('jsonwebtoken');

module.exports = {
  login(req, res) {
    const { username, password } = req.body;

    if(username !== 'admin' || password !== '1234'){
      return res.status(401).json({ mensaje: 'Usuario o contraseña incorrectos' });
    }

    const token = jwt.sign(
      { username },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.json({ token });
  },


  refresh(req, res) {
    const { token } = req.body;

    try {
      // Verificar token actual
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Generar nuevo token
      const newToken = jwt.sign(
        { username: decoded.username },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
      );

      res.json({ token: newToken });
    } catch (error) {
      res.status(401).json({ mensaje: 'Token inválido o expirado' });
    }
  },

  verify(req, res) {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ mensaje: 'No hay token proporcionado' });
    }

    const token = authHeader.split(' ')[1];

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      res.json({ valid: true, user: decoded });
    } catch (error) {
      res.status(401).json({ valid: false, mensaje: 'Token inválido' });
    }
  },
};
