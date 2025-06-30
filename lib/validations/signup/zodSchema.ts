import { z } from "zod";

const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export const getSignUpFormSchema = (t: (key: string) => string) => {
  return z
    .object({
      enterpriseRole: z.enum(["admin", "user"]),
      email: z.string().email({
        message: t("email"),
      }),
      username: z.string().min(3, {
        message: t("username"),
      }),
      password: z.string().min(8, {
        message: t("passwordLength"),
      }),
      // .regex(passwordRegex, {
      //   message: t("passwordFormat"),
      // })
      confirmPassword: z.string().min(8, {
        message: t("confirmPasswordLength"),
      }),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: t("passwordMismatch"),
      path: ["confirmPassword"],
    });
};

export type SignUpFormValues = z.infer<
  Awaited<ReturnType<typeof getSignUpFormSchema>>
>;
