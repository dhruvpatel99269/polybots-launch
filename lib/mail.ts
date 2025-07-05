// lib/mail.ts
import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Log whether transporter is ready
transporter.verify((error, success) => {
  if (error) {
    console.error("❌ Transporter verification failed:", error);
  } else {
    console.log("✅ Nodemailer transporter is ready to send emails");
  }
});

export const generateMailOptions = (to: string, subject: string, message: string) => ({
  from: process.env.EMAIL_USER,
  to,
  subject,
  text: message,
});
