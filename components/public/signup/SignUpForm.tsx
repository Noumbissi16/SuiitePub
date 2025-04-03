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
import * as z from "zod";
import { Input } from "@/components/ui/input";
import AnimatedButton from "@/components/ui/animated-button";
import { signUpFormSchema } from "@/lib/public/signup/zodSchema";
import { useState } from "react";
import { Link,useRouter } from "@/i18n/navigation";
import { Eye, EyeClosed } from "lucide-react";

const SignUpForm = () => {
const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const form = useForm<z.infer<typeof signUpFormSchema>>({
      resolver: zodResolver(signUpFormSchema),
      defaultValues: {
          username: "",
          email: "",
          password: "",
          confirmPassword: "",
      }
  });

  async function onSubmit(values: z.infer<typeof signUpFormSchema>) {
    setIsSubmitting(true);
    try {
      console.log(values);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        router.push("/dashboard")
    } catch (error) {
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
              <FormLabel className="text-md">Username</FormLabel>
              <FormControl>
                <Input
                  className="h-12 max-md:h-14 focus-visible:ring-0"
                  placeholder="Enter your username"
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
              <FormLabel className="text-md">Email Address</FormLabel>
              <FormControl>
                <Input
                  className="h-12 max-md:h-14 focus-visible:ring-0"
                  placeholder="Enter your email"
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
        <>
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-md">Password</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      className="relative h-12 max-md:h-14 focus-visible:ring-0"
                      placeholder="Enter a strong password"
                      {...field}
                      type={showPassword ? "text" : "password"}
                      autoComplete="password"
                      required
                    ></Input>
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
        </>
        <>
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-md">Confirm Password</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      className="h-12 max-md:h-14 focus-visible:ring-0"
                      placeholder="Confirm your password"
                      {...field}
                      type={showConfirmPassword ? "text" : "password"}
                      autoComplete="password"
                      required
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
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
        </>

        <div className="text-sm text-gray-500 my-6">
          By signing up, I agree to the{" "}
          <Link href="/privacy" className="text-blue-600 hover:underline">
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link href="/terms" className="text-blue-600 hover:underline">
            Terms of Service
          </Link>{" "}
          of Signtaper Technologies FZCO
        </div>

        <div className="flex items-center justify-between">
          <AnimatedButton
            btnText={isSubmitting ? "Signing up..." : "Sign Up"}
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
