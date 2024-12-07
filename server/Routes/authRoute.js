import express from "express";
import {
  signUp,
  logIn,
  logOut,
  verifyEmail,
} from "../Controllers/authController.js";
const router = express.Router();

router.post("/signup", signUp);
router.post("/login", logIn);
router.post("/logout", logOut);

router.post("/verify-email", verifyEmail);

export default router;
