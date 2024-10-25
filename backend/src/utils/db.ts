import mongoose from 'mongoose';
import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI!, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log('MongoDB connected');

    // Connect to PostgreSQL
    const pool = new Pool({
      connectionString: process.env.POSTGRES_URI,
    });
    await pool.connect();
    console.log('PostgreSQL connected');
  } catch (err) {
    console.error('Failed to connect to the database', err);
    process.exit(1);
  }
};

export { connectDB };
