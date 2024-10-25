import express from 'express';
import { processPayment, getPaymentStatus } from '../controllers/paymentController';
import { authenticateJWT } from '../middleware/auth';
import { authorizeRole } from '../middleware/role';

const router = express.Router();

// Route to process a payment
router.post('/process', authenticateJWT, authorizeRole(['Patient', 'Employee']), processPayment);

// Route to get the status of a payment
router.get('/status/:paymentId', authenticateJWT, authorizeRole(['Super Admin', 'Physical Therapist']), getPaymentStatus);

export default router;
