import { Router } from 'express';
import { register, login, refreshToken } from '../controllers/authController';
import { authenticateJWT } from '../middleware/auth';

const router = Router();

router.post('/register', register);
router.post('/login', login);
router.post('/refresh-token', refreshToken);
router.get('/profile', authenticateJWT, (req, res) => {
  res.json(req.user);
});

export default router;
