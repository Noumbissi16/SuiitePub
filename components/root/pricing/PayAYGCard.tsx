import AnimatedButton from "@/components/ui/animated-button";
import Image from "next/image";
import React from "react";

interface PayAYGCardProps {
  title: string;
  description: string;
  btnText: string;
}
const PayAYGCard = ({ title, description, btnText }: PayAYGCardProps) => {
  return (
    <div className="max-w-lg max-sm:w-[90%] bg-white rounded-2xl p-10 flex flex-col gap-5 max-sm:gap-3 justify-center items-center text-center">
      <div className="w-11 h-11">
        <Image
          src={"/assets/pricing/icon-1.svg"}
          width={100}
          height={100}
          alt={"alt"}
        />
      </div>

      <h1 className="text-4xl font-bold max-w-3/4 text-center max-sm:text-2xl">
        {title}
      </h1>
      <p className="text-gray-500 my-3 text-xl">{description}</p>
      <AnimatedButton btnText={btnText} btnType="primary" />
    </div>
  );
};

export default PayAYGCard;
