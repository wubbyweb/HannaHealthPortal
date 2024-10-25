import { Schema, model, Document } from 'mongoose';

interface IMarketing extends Document {
  campaignName: string;
  targetAudience: string;
  startDate: Date;
  endDate: Date;
  budget: number;
  createdAt: Date;
  updatedAt: Date;
}

const marketingSchema = new Schema<IMarketing>({
  campaignName: { type: String, required: true },
  targetAudience: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  budget: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const Marketing = model<IMarketing>('Marketing', marketingSchema);

export { Marketing, IMarketing };
