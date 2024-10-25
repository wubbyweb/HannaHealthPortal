import express from 'express';
import { getAllUsers, getUserById, createUser, updateUser, deleteUser } from '../controllers/userController';
import { authenticateJWT } from '../middleware/auth';
import { authorizeRole } from '../middleware/role';

const router = express.Router();

router.get('/', authenticateJWT, authorizeRole(['Super Admin']), getAllUsers);
router.get('/:id', authenticateJWT, authorizeRole(['Super Admin', 'Physical Therapist']), getUserById);
router.post('/', authenticateJWT, authorizeRole(['Super Admin']), createUser);
router.put('/:id', authenticateJWT, authorizeRole(['Super Admin', 'Physical Therapist']), updateUser);
router.delete('/:id', authenticateJWT, authorizeRole(['Super Admin']), deleteUser);

export default router;
