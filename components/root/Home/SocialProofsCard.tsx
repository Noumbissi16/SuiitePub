import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

interface CardProps {
  image: string;
}
const SocialProofsCard = ({ image }: CardProps) => {
  return (
    <motion.div
      key={image}
      className="min-w-[300px] h-full bg-slate-400 "
    >
      <Image src={image} alt={image} width={100} height={100} className="w-full h-full object-cover" />
    </motion.div>
  );
};

export default SocialProofsCard;
