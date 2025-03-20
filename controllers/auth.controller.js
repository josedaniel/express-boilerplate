/**
 * Authentication Controller
 * Manages user authentication, token generation, verification and refresh
 */
import jwt from 'jsonwebtoken';

export const login = (req, res) => {
  const { username, password } = req.body;

  if (username !== 'admin' || password !== '1234') {
    return res.status(401).json({ message: 'Invalid username or password' });
  }

  const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '1h' });

  res.json({ token });
};

export const refresh = (req, res) => {
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
};

export const verify = (req, res) => {
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
};

export default {
  login,
  refresh,
  verify
};
