"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Link } from "@/i18n/navigation";

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
import AnimatedButton from "@/components/ui/animated-button";

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
});

const SignUpPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      console.log(values);
      await new Promise((resolve) => setTimeout(resolve, 1000));
    } catch (error) {
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <div className="w-full max-w-md mx-auto space-y-10">
        <div className="space-y-4">
          <h1 className="text-4xl font-semibold tracking-tight">Sign Up</h1>
          <p className="text-md text-gray-500">
            Already have an account ?{" "}
            <Link href="/signin" className="text-blue-600 hover:underline">
              Sign In
            </Link>
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-md">Email Address</FormLabel>
                  <FormControl>
                    <Input
                      className="h-10 max-md:h-12"
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

            <div className="text-sm text-gray-500">
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
      </div>
    </>
  );
};

export default SignUpPage;
