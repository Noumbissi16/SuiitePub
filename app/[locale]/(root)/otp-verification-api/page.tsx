import OtpHeroSection from "@/components/root/OTPVerification/OtpHeroSection";
import PricingCTASection from "@/components/root/pricing/PricingCTASection";
import UniqueFeaturesApiPages from "@/components/root/Shared/unique-feature";
import { CircleCheckBig } from "lucide-react";
import React from "react";

const OtpVerificationApiPage = () => {
  return (
    <div className="">
      <OtpHeroSection />
      <UniqueFeaturesApiPages
        title="Strengthen Security with the D7 2FA Verify API"
        features={[
          {
            title: "Enhanced Security and Reliability",
            description:
              "With D7 2FA Verify API, you can protect your users from unauthorized access. Our solution is easy to use and can help you save up to 80% on your phone bill.",
            icon: <CircleCheckBig size={20} />,
          },
          {
            title: "Instant Communication",
            description:
              "With D7 2FA Verify API, you can communicate with your customers in real-time. Our solution is easy to use and can help you save up to 80% on your phone bill.",
            icon: <CircleCheckBig size={20} />,
          },
          {
            title: "24/7 Support",
            description:
              "With D7 2FA Verify API, you can communicate with your customers in real-time. Our solution is easy to use and can help you save up to 80% on your phone bill.",
            icon: <CircleCheckBig size={20} />,
          },
          {
            title: "Enhanced Security and Reliability",
            description:
              "With D7 2FA Verify API, you can protect your users from unauthorized access. Our solution is easy to use and can help you save up to 80% on your phone bill.",
            icon: <CircleCheckBig size={20} />,
          },
          {
            title: "Instant Communication",
            description:
              "With D7 2FA Verify API, you can communicate with your customers in real-time. Our solution is easy to use and can help you save up to 80% on your phone bill.",
            icon: <CircleCheckBig size={20} />,
          },
          {
            title: "24/7 Support",
            description:
              "With D7 2FA Verify API, you can communicate with your customers in real-time. Our solution is easy to use and can help you save up to 80% on your phone bill.",
            icon: <CircleCheckBig size={20} />,
          },
        ]}
      />   
      <PricingCTASection />
    </div>
  );
};

export default OtpVerificationApiPage;
