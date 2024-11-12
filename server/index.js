const express = require("express");
const app = express();
const connectDB = require("./db/connect");
require("dotenv").config();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Welcome to the server!");
});

const start = () => {
  try {
    connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}....`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
