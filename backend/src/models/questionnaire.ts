import { Schema, model, Document } from 'mongoose';

interface IQuestionnaire extends Document {
  title: string;
  description: string;
  questions: Array<{
    questionText: string;
    questionType: string;
    options?: string[];
    required: boolean;
  }>;
  createdBy: string;
  createdAt: Date;
  updatedAt: Date;
}

const questionnaireSchema = new Schema<IQuestionnaire>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  questions: [
    {
      questionText: { type: String, required: true },
      questionType: { type: String, required: true },
      options: { type: [String], required: false },
      required: { type: Boolean, required: true }
    }
  ],
  createdBy: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const Questionnaire = model<IQuestionnaire>('Questionnaire', questionnaireSchema);

export { Questionnaire, IQuestionnaire };
