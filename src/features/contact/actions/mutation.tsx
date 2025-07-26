"use server";

import { render } from "@react-email/components";
import nodemailer from "nodemailer";

import ContactFormSubmission from "../email/contact-template";
import { contactSchema } from "../schema/contact-schema";

export type ContactActionResult = { success: boolean; error?: string };

export async function sendContactEmail(values: {
  name: string;
  companyName: string;
  email: string;
  phoneNumber: string;
  subject?: string;
  message: string;
}): Promise<ContactActionResult> {
  const { name, companyName, email, phoneNumber, subject, message } = values;

  // Validate data
  const parsed = contactSchema.safeParse({
    name,
    companyName,
    email,
    phoneNumber,

    subject,
    message,
  });

  if (!parsed.success) {
    return { success: false, error: "Invalid form data" };
  }

  // Configure transporter
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const emailHtml = await render(<ContactFormSubmission data={parsed.data} />);

  // Compose email
  const mailOptions = {
    from: `${name} <${process.env.EMAIL_USER}>`,
    replyTo: email,
    to: process.env.CONTACT_RECEIVER_EMAIL,
    subject: subject || "New Contact Form Submission",
    html: emailHtml,
  };

  try {
    await transporter.sendMail(mailOptions);

    return { success: true };
  } catch (error) {
    return { success: false, error: "Failed to send email" };
  }
}
