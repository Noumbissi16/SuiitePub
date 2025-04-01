import { z } from "zod";

export const contactUsFormSchema = z.object({
  fullName: z.string(),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phoneNumber: z.string(),
  whatsappNumber: z.string(),
  message: z.string(),
});
