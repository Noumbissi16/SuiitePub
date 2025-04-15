"use client";
import { motion } from "framer-motion";
import {
  SmsPricingCard,
  VerifyApiPricingCard,
  WhatsappPricingCard,
} from "@/components/root/pricing";
import { useTranslations } from "next-intl";
import SectionBadgeTitle, { SectionTitle } from "../Shared/SectionBadgeTitle";

const PricingHome = () => {
  const t = useTranslations("HomePage.pricing");
  const pricingCards = [
    { component: SmsPricingCard, delay: 0.4 },
    { component: WhatsappPricingCard, delay: 0.8 },
    { component: VerifyApiPricingCard, delay: 1.2 },
  ];
  const flyoutVariants = {
    open: (delay: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: delay * 0.1875,
        ease: "easeOut",
        duration: 0.5,
      },
    }),
    closed: {
      y: 50,
      opacity: 0,
    },
  };
  return (
    <section className="py-16 px-4 bg-gray-100">
      <SectionBadgeTitle title={t("title")} />
      <SectionTitle title={t("description")} />
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
    </section>
  );
};

export default PricingHome;
