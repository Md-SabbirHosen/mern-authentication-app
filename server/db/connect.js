const mongoose = require("mongoose");

const connectDB = async (url) => {
  try {
    await mongoose.connect(url);
    console.log("Database is connected");
  } catch (err) {
    console.log("There is a problem while connecting to the database", err);
  }
};

module.exports = connectDB;
