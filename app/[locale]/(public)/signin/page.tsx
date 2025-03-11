"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import ReCAPTCHA from "react-google-recaptcha";
import { ArrowRight, Eye, EyeOff } from "lucide-react";
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

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters long.",
  }),
  recaptcha: z.string().min(1, {
    message: "Please complete the reCAPTCHA verification.",
  }),
});

const SingInPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      recaptcha: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      // Here you would typically send the form data to your API
      console.log(values);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast.success("Sign in successful", {
        description: "Welcome back to Direct7 Networks!",
      });

      // Here you might redirect the user to their dashboard
    } catch (error) {
      toast("Error", {
        description: "Invalid email or password. Please try again.",
        // variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen flex justify-between">
      {/* Left Side - Form */}
      <div className="flex flex-col justify-center p-4 sm:p-8 lg:p-12 xl:p-16 w-full">
        <div className="w-full max-w-md mx-auto space-y-6">
          <div className="space-y-2">
            <h1 className="text-2xl font-semibold tracking-tight">Sign In</h1>
            <p className="text-sm text-gray-500">
              Don't have an account?{" "}
              <Link href="/signup" className="text-blue-600 hover:underline">
                Sign Up
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
                    <FormLabel>Email</FormLabel>
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
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          placeholder="Enter your password"
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

              {/* <div className="flex items-center justify-between">
                <Link
                  href="/forgot-password"
                  className="text-sm text-blue-600 hover:underline"
                >
                  Forgot password?
                </Link>
              </div> */}

              <FormField
                control={form.control}
                name="recaptcha"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <ReCAPTCHA
                        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                        onChange={(value) => field.onChange(value)}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Signing in..." : "Sign In"}
                {!isSubmitting && <ArrowRight className="w-4 h-4 ml-2" />}
              </Button>
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

        <div className="  flex flex-col justify-center p-12 xl:p-16">
          <div className="max-w-md mx-auto">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20%2835%29-ECsFa5PvDBFc4JkBcb9fJ6MYShPZQf.png"
              alt="Welcome Illustration"
              width={400}
              height={300}
              className="mb-8"
            />
            <h2 className="text-3xl font-semibold mb-4">Welcome Back to D7</h2>
            <p className="text-lg opacity-90">
              Access your account to manage your messaging solutions and explore
              our global coverage.
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
      <Toaster richColors className="!bg-gray-100 text-red-950" />
    </div>
  );
};

export default SingInPage;
