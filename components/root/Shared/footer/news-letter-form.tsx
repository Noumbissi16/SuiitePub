"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
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
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    form.reset();
  }
  return (
    <div className=" flex flex-col items-start gap-3 justify-center w-fit max-xl:w-full max-sm:w-[90vw]">
      <h2 className="text-xl font-semibold">Sign up for our newsletter</h2>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full flex justify-center items-center gap-2 max-sm:flex-col max-xl:justify-between"
        >
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem className="max-xl:w-full w-60">
                <FormControl>
                  <Input
                    placeholder="Enter your email"
                    className="h-13  rounded-full border-none pl-5 py-2 bg-gray-100 active:!outline-none focus:!outline-none focus:!ring-0 focus-visible:!outline-none focus-visible:ring-0"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <AnimatedButton
            btnText="Subscribe"
            type="submit"
            btnType="primary"
            btnClassName="!py-2.5 max-sm:w-full max-sm:mt-2 max-sm:!py-1.5"
          />
        </form>
      </Form>
    </div>
  );
};

export default NewsLetterForm;
