"use client";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import HeroSection from "@/components/Home/HeroSection";
import { motion } from "framer-motion";

const fadeUpVariant = {
  initial: { opacity: 0, y: 100 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function HomePage() {
  const t = useTranslations("HomePage");
  return (
    <div>
      <h1>{t("title")}</h1>
      <Link href="/about">{t("about")}</Link>
      <div className=" ">
        <HeroSection />
        <motion.div
          variants={fadeUpVariant}
          initial="initial"
          animate="animate"
          className="grid place-items-center"
        >
          Messaging API Globally
        </motion.div>
      </div>
    </div>
  );
}
