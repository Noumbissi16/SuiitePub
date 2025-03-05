"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
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

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

const NewsLetterForm = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <div className="flex flex-col items-start gap-3 justify-center w-fit max-lg:w-full">
      <h2 className="text-xl font-semibold">Sign up for our newsletter</h2>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full flex justify-center items-center gap-2 max-sm:flex-col"
        >
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Enter your email"
                    className="w-60 h-13  rounded-full border-none pl-5 py-2 bg-gray-100 active:!outline-none focus:!outline-none focus:!ring-0 focus-visible:!outline-none focus-visible:ring-0"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <AnimatedButton btnText="Subscribe" type="submit" btnType="black" btnClassName="!py-2.5" />
        </form>
      </Form>
    </div>
  );
};

export default NewsLetterForm;
