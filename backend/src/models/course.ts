import { Schema, model, Document } from 'mongoose';

interface ICourse extends Document {
  title: string;
  description: string;
  duration: number;
  createdAt: Date;
  updatedAt: Date;
}

const courseSchema = new Schema<ICourse>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  duration: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const Course = model<ICourse>('Course', courseSchema);

export { Course, ICourse };
