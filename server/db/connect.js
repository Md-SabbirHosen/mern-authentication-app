import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log("Database is connected");
  } catch (err) {
    console.log("There is a problem while connecting to the database", err);
    process.exit(1);
  }
};

export default connectDB;
