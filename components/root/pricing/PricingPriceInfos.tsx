import { Check, CircleCheck } from "lucide-react";
import React, { JSX } from "react";

interface PricingPriceInfosProps {
  title?: string;
  children: React.ReactNode;
}
const PricingPriceInfos = ({ title, children }: PricingPriceInfosProps) => {
  return (
    <div className="flex flex-col items-start justify-center gap-2 pricing-card-spacer pb-10 mb-8">
      {title && (
        <div className="flex items-center justify-center gap-1">
          <CircleCheck size={20} color="blue" />
          <h3 className="text-lg font-semibold text-gray-500">{title}</h3>
        </div>
      )}
      {children}
    </div>
  );
};

export default PricingPriceInfos;
