import { User } from "../Models/UserSchema.js";
import bcryptjs from "bcryptjs";
import { generateTokenAndSetCookie } from "../utils/generateTokenAndSetCookie.js";
import { sendVerificationEmail } from "../email/emails.js";
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
    if (!verificationToken) throw new Error("verification token needed!");
    const verifiedToken = await User.findOne({ verificationToken });

    if (verifiedToken)
      return res
        .status(200)
        .json({ success: "true", message: "token verified!" });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || "email is not correct!",
    });
  }
};
