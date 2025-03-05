"use client";

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
export default function Home() {
  return (
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
  );
}
