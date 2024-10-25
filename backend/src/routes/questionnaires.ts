import express from 'express';
import { createQuestionnaire, getQuestionnaires, getQuestionnaireById, updateQuestionnaire, deleteQuestionnaire } from '../controllers/questionnaireController';
import { authenticateJWT } from '../middleware/auth';
import { authorizeRole } from '../middleware/role';

const router = express.Router();

router.post('/', authenticateJWT, authorizeRole(['Super Admin', 'Physical Therapist']), createQuestionnaire);
router.get('/', authenticateJWT, authorizeRole(['Super Admin', 'Physical Therapist', 'Patient/Employee']), getQuestionnaires);
router.get('/:id', authenticateJWT, authorizeRole(['Super Admin', 'Physical Therapist', 'Patient/Employee']), getQuestionnaireById);
router.put('/:id', authenticateJWT, authorizeRole(['Super Admin', 'Physical Therapist']), updateQuestionnaire);
router.delete('/:id', authenticateJWT, authorizeRole(['Super Admin', 'Physical Therapist']), deleteQuestionnaire);

export default router;
