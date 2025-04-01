"use client";

import { motion } from "framer-motion";
import {
  NumberLookupPricingCard,
  PayForMessagesSection,
  SmsPricingCard,
  VerifyApiPricingCard,
  WhatsappPricingCard,
} from "@/components/root/pricing";
import React from "react";

const flyoutVariants = {
  open: (delay: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: delay * 0.25,
      ease: "easeOut",
      duration: 0.5,
    },
  }),
  closed: {
    y: 50,
    opacity: 0,
  },
};

const pricingCards = [
  { component: SmsPricingCard, delay: 0.4 },
  { component: WhatsappPricingCard, delay: 0.8 },
  { component: VerifyApiPricingCard, delay: 1.2 },
  { component: NumberLookupPricingCard, delay: 1.6 },
];

const PricingPageClient = () => {
  return (
    <main className="min-h-screen mb-4">
      <header className="text-center mt-20 max-sm:mt-10">
        <motion.h1
          variants={flyoutVariants}
          initial="closed"
          custom={0}
          whileInView="open"
          viewport={{ once: true, amount: 1 }}
          className="text-7xl font-bold max-sm:text-4xl max-md:text-6xl lg:max-w-6xl text-center mx-auto"
        >
          Competitive and Transparent Pricing
        </motion.h1>
        <motion.p
          variants={flyoutVariants}
          initial="closed"
          whileInView="open"
          custom={0.45}
          viewport={{ once: true, amount: 1 }}
          className="mt-6 text-center text-xl lg:max-w-xl mx-auto max-sm:text-base"
        >
          You will only pay for what you use. Please take a look at our detailed
          pricing table below for each country in which you want to use the
          messaging services.
        </motion.p>
      </header>
      <section className="flex page-width flex-wrap gap-4 max-md:flex-col justify-center mt-20 max-sm:mt-6">
        {pricingCards.map(({ component: Component, delay }, index) => (
          <motion.div
            key={index}
            variants={flyoutVariants}
            initial="closed"
            whileInView="open"
            viewport={{ once: true, amount: 0.4 }}
            exit="closed"
            custom={delay}
            className="w-[30%] max-xl:w-[45%] max-md:w-full"
          >
            <Component />
          </motion.div>
        ))}
      </section>
      <PayForMessagesSection />
    </main>
  );
};

export default PricingPageClient;
