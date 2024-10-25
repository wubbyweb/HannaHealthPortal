import express from 'express';
import { createAppointment, getAppointments, updateAppointment, deleteAppointment } from '../controllers/appointmentController';
import { authenticateJWT } from '../middleware/auth';
import { authorizeRole } from '../middleware/role';

const router = express.Router();

router.post('/', authenticateJWT, authorizeRole(['Physical Therapist', 'Super Admin']), createAppointment);
router.get('/', authenticateJWT, authorizeRole(['Physical Therapist', 'Super Admin']), getAppointments);
router.put('/:id', authenticateJWT, authorizeRole(['Physical Therapist', 'Super Admin']), updateAppointment);
router.delete('/:id', authenticateJWT, authorizeRole(['Physical Therapist', 'Super Admin']), deleteAppointment);

export default router;
