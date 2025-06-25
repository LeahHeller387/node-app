import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export async function connectToMongo() {
  const uri = process.env.MONGO_URI;
  
  if (!uri) {
    throw new Error('MONGO_URI is not defined in .env');
  }

  try {
    await mongoose.connect(uri);
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Failed to connect to MongoDB:', err);
    process.exit(1);
  }
}
