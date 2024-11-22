import express from "express";
import connectDB from "./db/connect.js";
import dotenv from "dotenv";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Welcome to the server!");
});

const start = () => {
  try {
    connectDB();
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}....`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
