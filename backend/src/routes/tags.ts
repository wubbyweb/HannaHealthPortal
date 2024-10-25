import { Router } from 'express';
import { createTag, getTags, updateTag, deleteTag } from '../controllers/tagController';
import { authenticateJWT } from '../middleware/auth';
import { authorizeRole } from '../middleware/role';

const router = Router();

router.post('/', authenticateJWT, authorizeRole(['Super Admin']), createTag);
router.get('/', authenticateJWT, authorizeRole(['Super Admin', 'Physical Therapist']), getTags);
router.put('/:id', authenticateJWT, authorizeRole(['Super Admin']), updateTag);
router.delete('/:id', authenticateJWT, authorizeRole(['Super Admin']), deleteTag);

export default router;
