import { z } from "zod";

export const getSignInFormSchema = (t: (key: string) => string) =>
  z.object({
    email: z.string().email({
      message: t("validation.invalid_email"),
    }),
    password: z.string().min(8, {
      message: t("validation.password_min"),
    }),
  });

export type SignInFormValues = z.infer<ReturnType<typeof getSignInFormSchema>>;
