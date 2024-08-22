import mongoose from "mongoose";
import { MONGO_URI } from "./environments";

const connectDB = async (): Promise<void> => {
  try {
    if (!MONGO_URI) {
      throw new Error(
        "MONGODB_URL is not defined in the environment variables"
      );
    }

    const conn = await mongoose.connect(MONGO_URI);

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

export { connectDB };
