import express from "express";
import { login, logout, signup } from "../Controllers/authController.js";
const router = express.Router();

router.get("/check-auth");

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.post("/verify-email");
router.post("/forgot-password");
router.post("/reset-password/:token");

export default router;
