"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { contactUsFormSchema } from "@/lib/validations/contact/zodContactSchema";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import AnimatedButton from "@/components/ui/animated-button";
import { Textarea } from "@/components/ui/textarea";

const ContactPage = () => {
  const form = useForm<z.infer<typeof contactUsFormSchema>>({
    resolver: zodResolver(contactUsFormSchema),
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof contactUsFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <>
      <main className="page-width hero-main ">
        <section className="hero-content-flex items-start">
          <article className="hero-content-flex-right ">
            <h1 className="text-black font-bold text-6xl max-sm:text-4xl lg:mb-12 mb-6">
              Let's have a discourse.
            </h1>
            <div className="lg:mb-6 mb-4">
              <span className="capitalize text-gray-400 font-bold">
                Phone number
              </span>
              <p className="font-bold lg:text-3xl text-xl">
                <a href="tel:+237655210453">+237 655 210 453</a>
              </p>
            </div>
            <div>
              <span className="capitalize text-gray-400 font-bold">Email</span>
              <p className="font-bold lg:text-3xl text-xl max-w-md">
                <a href="mailto:orlydevignyngahe@gmail.com">
                  orlydevignyngahe@gmail.com
                </a>
              </p>
            </div>
          </article>
          <article className="h-full lg:w-[67%] w-full">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8 grid lg:grid-cols-2 max-lg:grid-cols-1 gap-4"
              >
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem className="!mb-0">
                      <FormLabel className="text-gray-700 capitalize">Full Name</FormLabel>
                      <FormControl>
                        <Input
                          className="focus-visible:ring-0 h-14 rounded-[10px] bg-white"
                          {...field}
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
                    <FormItem className="!mb-0">
                      <FormLabel className="text-gray-700 capitalize">Full Name</FormLabel>
                      <FormControl>
                        <Input
                          className="focus-visible:ring-0 h-14 rounded-[10px] bg-white"
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem className="!mb-0">
                      <FormLabel className="text-gray-700 capitalize">Full Name</FormLabel>
                      <FormControl>
                        <Input
                          className="focus-visible:ring-0 h-14 rounded-[10px] bg-white"
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="whatsappNumber"
                  render={({ field }) => (
                    <FormItem className="!mb-0">
                      <FormLabel className="text-gray-700 capitalize">Full Name</FormLabel>
                      <FormControl>
                        <Input
                          className="focus-visible:ring-0 h-14 rounded-[10px] bg-white"
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="lg:col-span-2 !mb-0">
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Textarea
                          className="bg-white resize-none focus-visible:ring-0  rounded-[10px]"
                          rows={4}
                          placeholder="shadcn"
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="w-full">
                  <AnimatedButton btnText="Submit" btnType="primary" btnClassName="w-full" />
                </div>
              </form>
            </Form>
          </article>
        </section>
      </main>
    </>
  );
};

export default ContactPage;
