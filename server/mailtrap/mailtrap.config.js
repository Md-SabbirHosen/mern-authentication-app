import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for port 465, false for other ports
  auth: {
    user: "sabbirhosen17@cse.pstu.ac.bd",
    pass: "bfyr gxqd lixz aeqe",
  },
});
