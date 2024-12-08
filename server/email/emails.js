import {
  PASSWORD_RESET_REQUEST_TEMPLATE,
  VERIFICATION_EMAIL_TEMPLATE,
  WELCOME_EMAIL_TEMPLATE,
} from "./emailTemplates.js";

import { transporter } from "./emailConfig.js";

export const sendVerificationEmail = async (email, verificationToken) => {
  const recipient = email;
  try {
    const response = await transporter.sendMail({
      from: `"Sabbir Hosen" ${process.env.SMTP_USER}`,
      to: recipient,
      subject: "Verify your email.",
      html: VERIFICATION_EMAIL_TEMPLATE.replace(
        "{verificationCode}",
        verificationToken
      ),
    });

    console.log("Email sent successfully", response);
  } catch (error) {
    console.error(`Error sending verification`, error);

    throw new Error(`Error sending verification email: ${error}`);
  }
};

export const sendWelcomeEmail = async (email, name) => {
  const recipient = email;
  try {
    const response = await transporter.sendMail({
      from: `"Sabbir Hosen" ${process.env.SMTP_USER}`,
      to: recipient,
      subject: "Welcome Email",
      html: WELCOME_EMAIL_TEMPLATE.replace("{userName}", name),
    });

    console.log("Welcome email sent successfully", response);
  } catch (error) {
    console.error(`Error sending welcome email`, error);

    throw new Error(`Error sending welcome email: ${error}`);
  }
};

export const sendPasswordResetEmail = async (email, resetURL) => {
  const recipient = email;
  try {
    const response = await transporter.sendMail({
      from: `'Sabbir Hosen' ${process.env.SMTP_USER}`,
      to: recipient,
      subject: "Password reset request email",
      html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
    });
    console.log("Passoword reset link send to your email!");
  } catch (error) {
    console.log("Error sending password reset link email!");
    throw new Error(`Error sending password reset link email:${error}`);
  }
};

export const sendResetSuccessEmail = async (email) => {};
