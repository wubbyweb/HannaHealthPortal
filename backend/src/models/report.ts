import { Schema, model, Document } from 'mongoose';

interface IReport extends Document {
  reportType: string;
  generatedBy: string;
  generatedAt: Date;
  data: any;
  createdAt: Date;
  updatedAt: Date;
}

const reportSchema = new Schema<IReport>({
  reportType: { type: String, required: true },
  generatedBy: { type: String, required: true },
  generatedAt: { type: Date, required: true },
  data: { type: Schema.Types.Mixed, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const Report = model<IReport>('Report', reportSchema);

export { Report, IReport };
