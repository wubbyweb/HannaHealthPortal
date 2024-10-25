import { Schema, model, Document } from 'mongoose';

interface ITag extends Document {
  name: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

const tagSchema = new Schema<ITag>({
  name: { type: String, required: true, unique: true },
  description: { type: String, required: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const Tag = model<ITag>('Tag', tagSchema);

export { Tag, ITag };
