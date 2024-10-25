import express from 'express';
import { getContent, createContent, updateContent, deleteContent } from '../controllers/contentController';
import { authenticateJWT } from '../middleware/auth';
import { authorizeRole } from '../middleware/role';

const router = express.Router();

router.get('/', authenticateJWT, authorizeRole(['Super Admin', 'Physical Therapist']), getContent);
router.post('/', authenticateJWT, authorizeRole(['Super Admin']), createContent);
router.put('/:id', authenticateJWT, authorizeRole(['Super Admin']), updateContent);
router.delete('/:id', authenticateJWT, authorizeRole(['Super Admin']), deleteContent);

export default router;
