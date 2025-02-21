import express from "express";
import {
  checkAuth,
  forgotPassword,
  logIn,
  logOut,
  resetPassword,
  signUp,
  verifyEmail,
} from "../Controllers/authController.js";
import passport from "passport";
import { verifyToken } from "../Middlewares/verifyToken.js";

const router = express.Router();

router.get("/check-auth", verifyToken, checkAuth);

router.post("/signup", signUp);
router.post("/login", logIn);
router.post("/logout", logOut);

router.post("/verify-email", verifyEmail);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password/:token", resetPassword);

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/",
    successRedirect: `${process.env.CLIENT_URL}/welcome`,
  })
);

export default router;
