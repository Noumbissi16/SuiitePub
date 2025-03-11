"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import ReCAPTCHA from "react-google-recaptcha";

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  recaptcha: z.string().min(1, {
    message: "Please complete the reCAPTCHA verification.",
  }),
});

const SignUpPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      recaptcha: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      console.log(values);

      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast("Sign up initiated", {
        description: "Please check your email to complete the sign up process.",
      });

      // Here you might redirect the user or show a success message
    } catch (error) {
      toast("Error", {
        description:
          "There was a problem with your submission. Please try again.",
        // variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  console.log("recaptcha key ", process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY);

  return (
    <div>
      <div className="min-h-screen flex justify-between">
        {/* Left Side - Form */}
        <div className="flex flex-col justify-center p-4 sm:p-8 lg:p-12 xl:p-16 w-full">
          <div className="w-full max-w-md mx-auto space-y-6">
            <div className="space-y-2">
              <h1 className="text-2xl font-semibold tracking-tight">Sign Up</h1>
              <p className="text-sm text-gray-500">
                Already have an account?{" "}
                <Link href="/signin" className="text-blue-600 hover:underline">
                  Sign In
                </Link>
              </p>
            </div>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Email <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
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

                <FormField
                  control={form.control}
                  name="recaptcha"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <ReCAPTCHA
                          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                          onChange={onChange}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="text-sm text-gray-500">
                  By signing up, I agree to the{" "}
                  <Link
                    href="/privacy"
                    className="text-blue-600 hover:underline"
                  >
                    Privacy Policy
                  </Link>{" "}
                  and{" "}
                  <Link href="/terms" className="text-blue-600 hover:underline">
                    Terms of Service
                  </Link>{" "}
                  of Signtaper Technologies FZCO
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">Step 1/2</div>
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Next"}
                    {!isSubmitting && <ArrowRight className="w-4 h-4 ml-2" />}
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>

        {/* Right Side - Banner */}
        <div className="hidden lg:flex relative bg-blue-600 text-white w-2/5">
          <div className="absolute top-4 right-4">
            <svg viewBox="0 0 200 50" className="w-32 h-8">
              <g fill="currentColor">
                <path d="M30,10 C40,10 48,18 48,28 C48,38 40,46 30,46 C20,46 12,38 12,28 C12,18 20,10 30,10 Z M30,18 C24.5,18 20,22.5 20,28 C20,33.5 24.5,38 30,38 C35.5,38 40,33.5 40,28 C40,22.5 35.5,18 30,18 Z" />
                <path d="M30,0 L40,10 L20,10 Z" />
                <path d="M30,56 L40,46 L20,46 Z" />
              </g>
              <text
                x="60"
                y="25"
                fontFamily="Arial"
                fontSize="16"
                fontWeight="bold"
                fill="currentColor"
              >
                Direct7
              </text>
              <text
                x="60"
                y="40"
                fontFamily="Arial"
                fontSize="16"
                fontWeight="bold"
                fill="currentColor"
              >
                Networks
              </text>
            </svg>
          </div>

          <div className="relative flex flex-col justify-center p-12 xl:p-16">
            <div className="max-w-md mx-auto">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20%2835%29-ECsFa5PvDBFc4JkBcb9fJ6MYShPZQf.png"
                alt="Welcome Illustration"
                width={400}
                height={300}
                className="mb-8"
              />
              <h2 className="text-3xl font-semibold mb-4">Welcome to D7</h2>
              <p className="text-lg opacity-90">
                Reliable and Budget friendly Messaging solution with Global
                coverage and 24/7 Support.
              </p>
            </div>

            <div className="absolute bottom-4 left-4 right-4 flex justify-center gap-4 text-sm opacity-90">
              <Link href="/terms" className="hover:underline">
                Terms of Service
              </Link>
              <span>|</span>
              <Link href="/privacy" className="hover:underline">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default SignUpPage;

function onChange(value:string | null) {
  console.log("Captcha value:", value);
}