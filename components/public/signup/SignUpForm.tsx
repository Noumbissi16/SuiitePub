"use client";
import React from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import AnimatedButton from "@/components/ui/animated-button";
import {
  getSignUpFormSchema,
  SignUpFormValues,
} from "@/lib/validations/signup/zodSchema";
import { useState } from "react";
import { Link, useRouter } from "@/i18n/navigation";
import { Eye, EyeClosed } from "lucide-react";
import { useTranslations } from "next-intl";
import { signUp } from "@/lib/actions/authentication.actions";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SignUpForm = () => {
  const router = useRouter();
  const t = useTranslations("SignUpPage.signupForm");
  const tSchema = useTranslations("SignUpPage.validation");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const form = useForm<SignUpFormValues>({
    resolver: zodResolver(getSignUpFormSchema(tSchema)),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      enterpriseRole: "user",
    },
  });

  async function onSubmit(values: SignUpFormValues) {
    setIsSubmitting(true);
    try {
      const response = await signUp(
        values.username,
        values.email,
        values.password
      );
      if (response.success) {
        toast.success(response.message);
        router.push("/dashboard");
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      toast.error("An error occurred during sign up");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-md">{t("username")}</FormLabel>
              <FormControl>
                <Input
                  className="h-12 max-md:h-14 focus-visible:ring-0"
                  placeholder={t("username")}
                  {...field}
                  type="text"
                  required
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-md">{t("email")}</FormLabel>
              <FormControl>
                <Input
                  className="h-12 max-md:h-14 focus-visible:ring-0"
                  placeholder={t("email")}
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
              <FormLabel className="text-md">{t("password")}</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    className="relative h-12 max-md:h-14 focus-visible:ring-0"
                    placeholder={t("password")}
                    {...field}
                    type={showPassword ? "text" : "password"}
                    autoComplete="password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute top-[50%] right-4 -translate-y-1/2"
                  >
                    {showPassword ? <Eye /> : <EyeClosed />}
                  </button>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-md">{t("confirmPassword")}</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    className="h-12 max-md:h-14 focus-visible:ring-0"
                    placeholder={t("confirmPassword")}
                    {...field}
                    type={showConfirmPassword ? "text" : "password"}
                    autoComplete="password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute top-[50%] right-4 -translate-y-1/2"
                  >
                    {showConfirmPassword ? <Eye /> : <EyeClosed />}
                  </button>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="enterpriseRole"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-md">
                {t("placeholder.enterpriseRoleLabel")}
              </FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="h-12 max-md:h-14   w-full focus-visible:ring-0">
                    <SelectValue
                      placeholder={t("placeholder.enterpriseRoleLabel")}
                    />
                  </SelectTrigger>
                  <SelectContent className="w-full">
                    <SelectItem value="admin">
                      {t("placeholder.admin")}
                    </SelectItem>
                    <SelectItem value="user">
                      {t("placeholder.user")}
                    </SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="text-sm text-gray-500 my-6">
          {t("privacyNotice")}{" "}
          <Link href="/privacy" className="text-blue-600 hover:underline">
            {t("privacyPolicy")}
          </Link>{" "}
          <Link href="/terms" className="text-blue-600 hover:underline">
            {t("termsOfService")}
          </Link>{" "}
          {t("companyName")}
        </div>
        <div className="flex items-center justify-between">
          <AnimatedButton
            btnText={isSubmitting ? t("submitting") : t("submit")}
            btnType="primary"
            disabled={isSubmitting}
            type="submit"
            btnClassName="w-full disabled:cursor-not-allowed disabled:opacity-80"
          />
        </div>
      </form>
    </Form>
  );
};

export default SignUpForm;
