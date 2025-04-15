"use client";
import React, { useEffect } from "react";
import SocialProofsCard from "./SocialProofsCard";
import useMeasure from "react-use-measure";
import { animate, motion, useMotionValue } from "framer-motion";

const images = [
  "/assets/whatspp-banner1.png",
  "/assets/whatspp-banner1.png",
  "/assets/whatspp-banner1.png",
  "/assets/whatspp-banner1.png",
  "/assets/whatspp-banner1.png",
  "/assets/whatspp-banner1.png",
  "/assets/whatspp-banner1.png",
  "/assets/whatspp-banner1.png",
];
const SocialProofs = () => {
  let [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);
  useEffect(() => {
    let controls;
    let finalPosition = -width / 2 - 8;
    controls = animate(xTranslation, [0, finalPosition], {
      ease: "linear",
      duration: 50,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });
    return controls.stop;
  }, [xTranslation, width]);

  return (
    <main className=" h-64 w- overflow-y-hidden">
      <motion.div className="flex gap-2  overflow-y-clip" ref={ref} style={{ x: xTranslation }}>
        {[...images, ...images, ...images].map((item, idx) => (
          <SocialProofsCard image={`${item}`} key={idx} />
        ))}
      </motion.div>
    </main>
  );
};

export default SocialProofs;
