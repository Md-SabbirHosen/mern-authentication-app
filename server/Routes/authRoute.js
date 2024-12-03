import express from "express";
import { signup, login, logout } from "../Controllers/authController.js";
const router = express.Router();

router.post("/signup", signup);
router.get("/login", login);
router.post("/logtout", logout);

export default router;
