import { Request, Response } from 'express';
import { Marketing } from '../models/marketing';
import nodemailer from 'nodemailer';

// Controller for sending marketing emails
export const sendEmail = async (req: Request, res: Response) => {
  const { to, subject, text } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to,
      subject,
      text
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to send email', error });
  }
};

// Controller for creating landing pages
export const createLandingPage = async (req: Request, res: Response) => {
  const { campaignName, targetAudience, startDate, endDate, budget } = req.body;

  try {
    const newCampaign = new Marketing({
      campaignName,
      targetAudience,
      startDate,
      endDate,
      budget
    });

    await newCampaign.save();
    res.status(201).json({ message: 'Landing page created successfully', campaign: newCampaign });
  } catch (error) {
    res.status(500).json({ message: 'Failed to create landing page', error });
  }
};

// Controller for managing promotional offers
export const managePromotions = async (req: Request, res: Response) => {
  const { campaignId, updates } = req.body;

  try {
    const campaign = await Marketing.findById(campaignId);

    if (!campaign) {
      return res.status(404).json({ message: 'Campaign not found' });
    }

    Object.assign(campaign, updates);
    await campaign.save();

    res.status(200).json({ message: 'Promotions updated successfully', campaign });
  } catch (error) {
    res.status(500).json({ message: 'Failed to update promotions', error });
  }
};
