import { Request, Response } from 'express';
import { Questionnaire } from '../models/questionnaire';

export const createQuestionnaire = async (req: Request, res: Response) => {
  try {
    const { title, description, questions, createdBy } = req.body;
    const newQuestionnaire = new Questionnaire({
      title,
      description,
      questions,
      createdBy
    });
    await newQuestionnaire.save();
    res.status(201).json(newQuestionnaire);
  } catch (error) {
    res.status(500).json({ message: 'Error creating questionnaire', error });
  }
};

export const getQuestionnaires = async (req: Request, res: Response) => {
  try {
    const questionnaires = await Questionnaire.find();
    res.status(200).json(questionnaires);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching questionnaires', error });
  }
};

export const getQuestionnaireById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const questionnaire = await Questionnaire.findById(id);
    if (!questionnaire) {
      return res.status(404).json({ message: 'Questionnaire not found' });
    }
    res.status(200).json(questionnaire);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching questionnaire', error });
  }
};

export const updateQuestionnaire = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { title, description, questions } = req.body;
    const updatedQuestionnaire = await Questionnaire.findByIdAndUpdate(
      id,
      { title, description, questions },
      { new: true }
    );
    if (!updatedQuestionnaire) {
      return res.status(404).json({ message: 'Questionnaire not found' });
    }
    res.status(200).json(updatedQuestionnaire);
  } catch (error) {
    res.status(500).json({ message: 'Error updating questionnaire', error });
  }
};

export const deleteQuestionnaire = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedQuestionnaire = await Questionnaire.findByIdAndDelete(id);
    if (!deletedQuestionnaire) {
      return res.status(404).json({ message: 'Questionnaire not found' });
    }
    res.status(200).json({ message: 'Questionnaire deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting questionnaire', error });
  }
};
