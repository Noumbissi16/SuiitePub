import Image from "next/image";
import React from "react";

interface PricingCardHeaderProps {
  title: string;
  description?: string;
  icon: {
    src: string;
    alt: string;
  };
}

const PricingCardHeader = ({
  title,
  description,
  icon,
}: PricingCardHeaderProps) => {
  return (
    <div className="pricing-card-spacer">
      <div className="w-11 h-11">
        <Image
          src={icon.src}
          width={100}
          height={100}
          alt={icon.alt}
        />
      </div>
      <h2 className="text-5xl font-bold max-sm:text-4xl">{title}</h2>
      {description && (
        <span className="mt-2 text-sm text-gray-600">{description}</span>
      )}
    </div>
  );
};

export default PricingCardHeader;
