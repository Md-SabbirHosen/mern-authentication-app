import express from "express";
import { connectDB } from "./db/connect.js";
import dotenv from "dotenv";
import authRoutes from "./Routes/authRoute.js";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Welcome to the server!");
});

//middlewares
app.use(express.json());
app.use("/api/v1/auth", authRoutes);

const start = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}....`);
    });
  } catch (error) {
    console.log("Server failed to start:", error);
  }
};

start();
