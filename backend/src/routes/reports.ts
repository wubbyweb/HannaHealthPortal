import express from 'express';
import { getReports, createReport, updateReport, deleteReport } from '../controllers/reportController';
import { authenticateJWT } from '../middleware/auth';
import { authorizeRole } from '../middleware/role';

const router = express.Router();

router.get('/', authenticateJWT, authorizeRole(['Super Admin', 'Physical Therapist']), getReports);
router.post('/', authenticateJWT, authorizeRole(['Super Admin', 'Physical Therapist']), createReport);
router.put('/:id', authenticateJWT, authorizeRole(['Super Admin', 'Physical Therapist']), updateReport);
router.delete('/:id', authenticateJWT, authorizeRole(['Super Admin', 'Physical Therapist']), deleteReport);

export default router;
