import { body, param, query } from 'express-validator';

export const validateUser = [
  body('username').isString().isLength({ min: 3 }),
  body('email').isEmail(),
  body('password').isString().isLength({ min: 6 }),
  body('role').isString().isIn(['Super Admin', 'Physical Therapist', 'Patient/Employee'])
];

export const validateCourse = [
  body('title').isString().isLength({ min: 3 }),
  body('description').isString().isLength({ min: 10 }),
  body('duration').isInt({ min: 1 })
];

export const validateQuestionnaire = [
  body('title').isString().isLength({ min: 3 }),
  body('description').isString().isLength({ min: 10 }),
  body('questions').isArray().custom((questions) => {
    for (const question of questions) {
      if (!question.questionText || !question.questionType || typeof question.required !== 'boolean') {
        throw new Error('Invalid question format');
      }
    }
    return true;
  })
];

export const validateAppointment = [
  body('patientId').isString().isLength({ min: 3 }),
  body('therapistId').isString().isLength({ min: 3 }),
  body('appointmentDate').isISO8601(),
  body('status').isString().isIn(['Scheduled', 'Completed', 'Cancelled']),
  body('notes').optional().isString()
];

export const validateReport = [
  body('reportType').isString().isLength({ min: 3 }),
  body('generatedBy').isString().isLength({ min: 3 }),
  body('generatedAt').isISO8601(),
  body('data').exists()
];

export const validateMarketing = [
  body('campaignName').isString().isLength({ min: 3 }),
  body('targetAudience').isString().isLength({ min: 3 }),
  body('startDate').isISO8601(),
  body('endDate').isISO8601(),
  body('budget').isFloat({ min: 0 })
];

export const validatePayment = [
  body('userId').isString().isLength({ min: 3 }),
  body('amount').isFloat({ min: 0 }),
  body('currency').isString().isLength({ min: 3, max: 3 }),
  body('status').isString().isIn(['Pending', 'Completed', 'Failed']),
  body('paymentMethod').isString().isLength({ min: 3 }),
  body('transactionId').isString().isLength({ min: 3 })
];

export const validateContent = [
  body('title').isString().isLength({ min: 3 }),
  body('body').isString().isLength({ min: 10 }),
  body('author').isString().isLength({ min: 3 })
];

export const validateTag = [
  body('name').isString().isLength({ min: 3 })
];
