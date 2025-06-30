"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  getSignInFormSchema,
  SignInFormValues,
} from "@/lib/validations/signin/zodSchema";
import AnimatedButton from "@/components/ui/animated-button";
import { useRouter } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { signIn } from "@/lib/actions/authentication.actions";
import { toast } from "sonner";

const SignInForm = () => {
  const router = useRouter();
  const t = useTranslations("SignInPage.signInForm");
  const tSchema = useTranslations("SignInPage");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<SignInFormValues>({
    resolver: zodResolver(getSignInFormSchema(tSchema)),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: SignInFormValues) {
    setIsSubmitting(true);
    try {
      const response = await signIn(values.email, values.password);
      if (response.success) {
        toast.success(response.message);
        router.push("/dashboard");
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      toast.error("An error occurred during sign in");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-md">{t("email.label")}</FormLabel>
              <FormControl>
                <Input
                  className="h-10 max-md:h-12"
                  placeholder={t("email.placeholder")}
                  {...field}
                  type="email"
                  autoComplete="email"
                  required
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-md">{t("password.label")}</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    className="h-10 max-md:h-12"
                    placeholder={t("password.placeholder")}
                    {...field}
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2"
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-gray-500" />
                    ) : (
                      <Eye className="h-4 w-4 text-gray-500" />
                    )}
                  </button>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <AnimatedButton
          btnText={isSubmitting ? t("button.loading") : t("button.submit")}
          btnType="primary"
          disabled={isSubmitting}
          type="submit"
          btnClassName="w-full disabled:cursor-not-allowed disabled:opacity-80"
        />
      </form>
    </Form>
  );
};

export default SignInForm;
