"use client";
import AnimatedButton from "@/components/ui/animated-button";
import { useRouter } from "@/i18n/navigation";
import React from "react";

const PricingCTASection = () => {
    const router = useRouter()
  return (
    <section className="page-width bg-green-900/10 py-20 text-center rounded-lg mb-16">
      <p className="uppercase font-medium text-amber-600 lg:text-center ">
        Pricing
      </p>
      <h1 className="text-4xl font-bold lg:text-6xl/16 xl:max-w-[80%] lg:text-center mx-auto mb-8 lg:mb-12">
        Ready to get started ? Consult our pricing page.
      </h1>
      <div className="flex items-center justify-center gap-10 mt-20">
        <AnimatedButton btnClassName="" onClick={() => router.push("/pricing")} btnText="See Pricing" btnType="primary" />
        <AnimatedButton btnClassName="" onClick={() => router.push("/contact")} btnText="Contact Us" btnType="secondary" />
      </div>
    </section>
  );
};

export default PricingCTASection;
