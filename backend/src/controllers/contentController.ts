import { Request, Response } from 'express';
import { Content } from '../models/content';

export const getContent = async (req: Request, res: Response) => {
  try {
    const content = await Content.find();
    res.json(content);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching content', error });
  }
};

export const createContent = async (req: Request, res: Response) => {
  try {
    const { title, body, author } = req.body;
    const newContent = new Content({ title, body, author });
    await newContent.save();
    res.status(201).json(newContent);
  } catch (error) {
    res.status(500).json({ message: 'Error creating content', error });
  }
};

export const updateContent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { title, body, author } = req.body;
    const updatedContent = await Content.findByIdAndUpdate(id, { title, body, author }, { new: true });
    if (!updatedContent) {
      return res.status(404).json({ message: 'Content not found' });
    }
    res.json(updatedContent);
  } catch (error) {
    res.status(500).json({ message: 'Error updating content', error });
  }
};

export const deleteContent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedContent = await Content.findByIdAndDelete(id);
    if (!deletedContent) {
      return res.status(404).json({ message: 'Content not found' });
    }
    res.json({ message: 'Content deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting content', error });
  }
};
