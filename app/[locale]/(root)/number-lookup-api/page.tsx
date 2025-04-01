import NbrLookupHeroSection from "@/components/root/NbrLookup/NbrLookupHeroSection";
import PricingCTASection from "@/components/root/pricing/PricingCTASection";
import UniqueFeaturesApiPages from "@/components/root/Shared/unique-feature";
import { CircleCheckBig } from "lucide-react";
import React from "react";

const NumberLookupApiPage = () => {
  return (
    <div className="">
      <NbrLookupHeroSection />
      <UniqueFeaturesApiPages
        title="Why D7 SMS is the Perfect Solution for Your Business"
        features={[
          {
            title: "Save Time and Money",
            description:
              "With D7 SMS, you can save time and money on your phone bill. Our solution is easy to use and can help you save up to 80% on your phone bill.",
            icon: <CircleCheckBig size={20} />,
          },
          {
            title: "Instant Communication",
            description:
              "With D7 SMS, you can communicate with your customers in real-time. Our solution is easy to use and can help you save up to 80% on your phone bill.",
            icon: <CircleCheckBig size={20} />,
          },
          {
            title: "24/7 Support",
            description:
              "With D7 SMS, you can communicate with your customers in real-time. Our solution is easy to use and can help you save up to 80% on your phone bill.",
            icon: <CircleCheckBig size={20} />,
          },
        ]}
      />
      <PricingCTASection />
    </div>
  );
};

export default NumberLookupApiPage;
