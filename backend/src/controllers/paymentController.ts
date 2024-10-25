import { Request, Response } from 'express';
import { Payment } from '../models/payment';
import { v4 as uuidv4 } from 'uuid';

export const processPayment = async (req: Request, res: Response) => {
  const { userId, amount, currency, paymentMethod } = req.body;

  try {
    const newPayment = new Payment({
      userId,
      amount,
      currency,
      status: 'Pending',
      paymentMethod,
      transactionId: uuidv4(),
    });

    await newPayment.save();

    // Simulate payment processing
    setTimeout(async () => {
      newPayment.status = 'Completed';
      await newPayment.save();
    }, 3000);

    res.status(201).json(newPayment);
  } catch (error) {
    res.status(500).json({ message: 'Error processing payment', error });
  }
};

export const getPaymentStatus = async (req: Request, res: Response) => {
  const { paymentId } = req.params;

  try {
    const payment = await Payment.findById(paymentId);

    if (!payment) {
      return res.status(404).json({ message: 'Payment not found' });
    }

    res.status(200).json(payment);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving payment status', error });
  }
};
