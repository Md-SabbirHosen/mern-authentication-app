import { User } from "../Models/UserSchema.js";
import bcryptjs from "bcryptjs";
import { generateTokenAndSetCookie } from "../utils/generateTokenAndSetCookie.js";
import { sendVerificationEmail, sendWelcomeEmail } from "../email/emails.js";

export const signUp = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) throw new Error("Email & Password are required!");

    const userExists = await User.findOne({ email });

    if (userExists)
      return res
        .status(400)
        .json({ success: false, message: "User already exists!" });

    const hashedPassword = await bcryptjs.hash(password, 10);
    const verificationToken = Math.floor(
      100000 + Math.random() * 900000
    ).toString();

    const user = new User({
      email,
      password: hashedPassword,
      verificationToken,
      verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000,
    });

    await user.save();
    generateTokenAndSetCookie(res, user._id);
    await sendVerificationEmail(email, verificationToken);

    return res.status(201).json({
      success: true,
      message: "user created successfully!",
      user: {
        ...user._doc,
        password: undefined,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
};

export const logIn = async (req, res) => {};
export const logOut = async (req, res) => {};

export const verifyEmail = async (req, res) => {
  const { verificationToken } = req.body;
  console.log(verificationToken);
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
    console.log("error in verifyEmail ", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
