// lib/validations/contactForm.ts
import { z } from "zod";

export const contactFormSchema = z.object({
  firstName: z.string().min(2, "First Name must be at least 2 characters"),
  lastName: z.string().min(2, "Last Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  city: z.string().min(2, "City must be at least 2 characters"),
  postalCode: z.string().regex(/^\d{10}$/, "Postal Code must be 10 digits"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactFormInputs = z.infer<typeof contactFormSchema>;
