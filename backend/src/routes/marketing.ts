import express from 'express';
import { sendEmail, createLandingPage, managePromotions } from '../controllers/marketingController';
import { authenticateJWT } from '../middleware/auth';
import { authorizeRole } from '../middleware/role';

const router = express.Router();

// Route for sending marketing emails
router.post('/send-email', authenticateJWT, authorizeRole(['Super Admin', 'Physical Therapist']), sendEmail);

// Route for creating landing pages
router.post('/create-landing-page', authenticateJWT, authorizeRole(['Super Admin']), createLandingPage);

// Route for managing promotional offers
router.post('/manage-promotions', authenticateJWT, authorizeRole(['Super Admin', 'Physical Therapist']), managePromotions);

export default router;
