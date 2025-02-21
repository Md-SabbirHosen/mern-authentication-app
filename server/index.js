import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import session from "express-session";
import passport from "passport";
import { connectDB } from "./db/connect.js";
import authRoutes from "./Routes/authRoute.js";
import "./utils/passport.js";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Welcome to the server!");
});

//middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

// Session for middlewares
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

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
