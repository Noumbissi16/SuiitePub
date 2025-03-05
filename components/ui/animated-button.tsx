import React, { useState } from "react";
import { motion } from "framer-motion";
import { IoMdArrowForward } from "react-icons/io";

interface AnimatedButtonProps {
  btnClassName?: string;
  iconClassName?: string;
  btnType?: "primary" | "secondary" | "black" | "custom";
  btnText: string;
  onClick?: () => void;
  [key: string]: any;
}

const AnimatedButton = ({
  btnClassName,
  iconClassName,
  btnType,
  btnText,
  onClick,
  ...props
}: AnimatedButtonProps) => {
  const [hovered, setHovered] = useState(false)
  return (
    <motion.button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      className={` 
            ${
              btnType === "primary" && "bg-blue-800  border-blue-800 text-white"
            } 
            ${btnType === "secondary" && "bg-white border-gray-300"}
            ${btnType === "black" && "bg-black text-white border-black "} 
             font-semibold py-[6px] px-[5px] pl-5 rounded-full flex items-center justify-center cursor-pointer border
            ${btnClassName}
            
            `
        
      }
      initial="initial"
      animate="animate"
      { ...props}
    >
      {btnText}
      <motion.div
        className={`
                ${btnType === "primary" && "bg-white "} 
                ${btnType === "secondary" && "bg-gray-200"}
                ${btnType === "black" && "bg-white"} 
                p-1 rounded-full flex justify-center items-center ml-3
                ${iconClassName}
             `}
      >
        <IoMdArrowForward color="black" size={24} />
      </motion.div>
    </motion.button>
  );
};

export default AnimatedButton;
