import { z } from "zod/v4";

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(100, "Full name must not exceed 100 characters")
    .regex(/^[a-zA-Z\s]*$/, "Full name should only contain letters and spaces"),

  companyName: z
    .string()
    .min(2, "Company name must be at least 2 characters")
    .max(100, "Company name must not exceed 100 characters"),

  email: z
    .email("Please enter a valid email address")
    .min(5, "Email must be at least 5 characters")
    .max(100, "Email must not exceed 100 characters"),

  phoneNumber: z
    .string()
    .regex(
      /^(\+\d{1,3}[- ]?)?\(?\d{3}\)?[- ]?\d{3}[- ]?\d{4}$/,
      "Please enter a valid phone number"
    ),

  subject: z
    .string()
    .min(5, "Subject must be at least 5 characters")
    .max(200, "Subject must not exceed 200 characters")
    .optional(),

  message: z
    .string()
    .min(6, "Message must be at least 6 characters")
    .max(1000, "Message must not exceed 1000 characters"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
