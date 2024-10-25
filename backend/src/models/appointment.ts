import { Schema, model, Document } from 'mongoose';

interface IAppointment extends Document {
  patientId: string;
  therapistId: string;
  appointmentDate: Date;
  status: string;
  notes: string;
  createdAt: Date;
  updatedAt: Date;
}

const appointmentSchema = new Schema<IAppointment>({
  patientId: { type: String, required: true },
  therapistId: { type: String, required: true },
  appointmentDate: { type: Date, required: true },
  status: { type: String, required: true },
  notes: { type: String, required: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const Appointment = model<IAppointment>('Appointment', appointmentSchema);

export { Appointment, IAppointment };
