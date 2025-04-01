import UniqueFeaturesApiPages from "@/components/root/Shared/unique-feature";
import SmsHeroSection from "@/components/root/sms/SmsHeroSection";
import React from "react";
import { CircleCheckBig } from "lucide-react";
import { Workflow } from "lucide-react";
import { Clock2 } from "lucide-react";
import PricingCTASection from "@/components/root/pricing/PricingCTASection";

const SmsPage = () => {
  return (
    <>
      <SmsHeroSection />
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
            icon: <Workflow size={20} />,
          },
          {
            title: "24/7 Support",
            description:
              "With D7 SMS, you can communicate with your customers in real-time. Our solution is easy to use and can help you save up to 80% on your phone bill.",
            icon: <Clock2 size={20} />,
          },
        ]}
      />
      <PricingCTASection />
    </>
  );
};

export default SmsPage;
