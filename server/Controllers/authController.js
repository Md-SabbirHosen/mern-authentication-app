import bcryptjs from "bcryptjs";
import crypto from "crypto";
import {
  sendPasswordResetEmail,
  sendResetSuccessEmail,
  sendVerificationEmail,
  sendWelcomeEmail,
} from "../email/emails.js";
import { User } from "../Models/UserSchema.js";
import { generateTokenAndSetCookie } from "../utils/generateTokenAndSetCookie.js";

export const signUp = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) throw new Error("Email & Password are required!");

    const userExist = await User.findOne({ email });

    if (userExist)
      return res
        .status(400)
        .json({ success: false, message: "User already exists!" });

    const hashedPassword = await bcryptjs.hash(password, 10);
    const verificationToken = Math.floor(
      100000 + Math.random() * 900000
    ).toString();

    const newUser = new User({
      email,
      password: hashedPassword,
      verificationToken,
      verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000,
    });

    await newUser.save();
    generateTokenAndSetCookie(res, newUser._id);
    await sendVerificationEmail(email, verificationToken);

    return res.status(201).json({
      success: true,
      message: "user created successfully!",
      user: {
        ...newUser._doc,
        password: undefined,
      },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const logIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userExist = await User.findOne({ email });
    if (!userExist) {
      return res
        .status(400)
        .json({ success: "false", message: "Email is not valid" });
    }
    const isPasswordValid = await bcryptjs.compare(
      password,
      userExist.password
    );
    if (!isPasswordValid) {
      return res
        .status(400)
        .json({ success: "false", message: "Password is not valid" });
    }

    generateTokenAndSetCookie(res, userExist._id);

    userExist.lastLogin = new Date();
    await userExist.save();

    res.status(200).json({
      success: "true",
      message: "Logged in successfully",
      user: {
        ...userExist._doc,
        password: undefined,
      },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const logOut = async (req, res) => {
  res.clearCookie("token");
  res.status(200).json({ success: "true", message: "Logged out successfully" });
};

export const verifyEmail = async (req, res) => {
  const { verificationToken } = req.body;

  try {
    const user = await User.findOne({
      verificationToken: verificationToken,
      verificationTokenExpiresAt: { $gt: Date.now() },
    });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid or expired validation code!",
      });
    }
    user.isVerified = true;
    user.verificationToken = undefined;
    user.verificationTokenExpiresAt = undefined;

    const name = user.email.split("@")[0];
    console.log(name);

    await user.save();

    await sendWelcomeEmail(user.email, name);

    res.status(200).json({
      success: true,
      message: "Email verified successfully!",
      user: {
        ...user._doc,
        password: undefined,
      },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export const forgotPassword = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "User not found" });
    }

    const resetPasswordToken = crypto.randomBytes(20).toString("hex");
    const resetPasswordTokenExpiresAt = Date.now() + 1 * 60 * 60 * 1000;

    user.resetPasswordToken = resetPasswordToken;
    user.resetPasswordExpiresAt = resetPasswordTokenExpiresAt;

    await user.save();

    await sendPasswordResetEmail(
      user.email,
      `${process.env.CLIENT_URL}/reset-password/${resetPasswordToken}`
    );

    res.status(200).json({
      success: true,
      message: "Password reset link send to your email",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const resetPassword = async (req, res) => {
  const { password } = req.body;
  const { token } = req.params;
  console.log(token);
  try {
    const user = await User.findOne({
      resetPasswordToken: token,
      resetPasswordExpiresAt: { $gt: Date.now() },
    });
    if (!password) {
      return res
        .status(400)
        .json({ success: false, message: "No Password found!" });
    }
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid or Expired reset token" });
    }
    const hashedPassword = await bcryptjs.hash(password, 10);

    user.password = hashedPassword;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpiresAt = undefined;

    await user.save();

    await sendResetSuccessEmail(user.email);

    res
      .status(200)
      .json({ success: true, message: "Password reset successful" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const checkAuth = async (req, res) => {
  try {
    const user = await User.findById(req.userId).select("-password");

    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "User not found!" });
    }
    res.status(200).json({ success: true, user });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
