"use client";
import AnimatedButton from "@/components/ui/animated-button";
import React from "react";

const SignUpInvitationSection = () => {
  return (
    <section className="bg-blue-100 py-20  text-center ">
      <div className="w-full max-w-[1200px] mx-auto flex flex-col items-center">
        <h1 className="text-6xl font-bold  mb-8 text-center max-sm:text-3xl">
          Sign Up and Try Suiite-E
          <br />
          API for free
        </h1>
        <p className="text-xl max-sm:text-lg">
          Start today and enhance your communication workflows.
        </p>
        <div className="flex gap-4 mt-10 max-sm:mt-6">
          <AnimatedButton
            btnText="Sign Up Now"
            btnType="primary"
            btnClassName="h-14"
          />
          <AnimatedButton
            btnText="Contact Sales"
            btnType="secondary"
            btnClassName="h-14"
          />
        </div>
      </div>
    </section>
  );
};

export default SignUpInvitationSection;
