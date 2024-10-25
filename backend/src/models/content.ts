import { Schema, model, Document } from 'mongoose';

interface IContent extends Document {
  title: string;
  body: string;
  author: string;
  createdAt: Date;
  updatedAt: Date;
}

const contentSchema = new Schema<IContent>({
  title: { type: String, required: true },
  body: { type: String, required: true },
  author: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const Content = model<IContent>('Content', contentSchema);

export { Content, IContent };
