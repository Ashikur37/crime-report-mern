import mongoose, { ConnectOptions } from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const uri: string = process.env.MONGODB_URI!; // Replace with your MongoDB URI
const options: any = {
    // useUnifiedTopology: true,
   // This line can be omitted if you are using a modern MongoDB connection string.
  };

const connectDB = async (): Promise<void> => {

  try {
    await mongoose.connect(uri, options);
    console.log('MongoDB Connected');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1); // Exit the process if unable to connect
  }
};

export default connectDB;