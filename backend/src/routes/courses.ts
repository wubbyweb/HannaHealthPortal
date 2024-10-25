import express from 'express';
import { createCourse, getCourses, getCourseById, updateCourse, deleteCourse } from '../controllers/courseController';
import { authenticateJWT } from '../middleware/auth';
import { authorizeRole } from '../middleware/role';

const router = express.Router();

router.post('/', authenticateJWT, authorizeRole(['Super Admin', 'Physical Therapist']), createCourse);
router.get('/', authenticateJWT, authorizeRole(['Super Admin', 'Physical Therapist', 'Patient/Employee']), getCourses);
router.get('/:id', authenticateJWT, authorizeRole(['Super Admin', 'Physical Therapist', 'Patient/Employee']), getCourseById);
router.put('/:id', authenticateJWT, authorizeRole(['Super Admin', 'Physical Therapist']), updateCourse);
router.delete('/:id', authenticateJWT, authorizeRole(['Super Admin']), deleteCourse);

export default router;
