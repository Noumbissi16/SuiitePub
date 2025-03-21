import React from "react";
import PricingCardHeader from "./PricingCardHeader";
import PricingPriceInfos from "./PricingPriceInfos";
import AnimatedButton from "@/components/ui/animated-button";
import { Link } from "@/i18n/navigation";

const SmsPricingCard = () => {
  return (
    <div className="pricing-card">
      <PricingCardHeader
        title="SMS"
        icon={{
          alt: "SMS",
          src: "/assets/pricing/sms.svg",
        }}
        description="Send SMS to your customers"
      />
      <PricingPriceInfos title="To send an SMS">
        <div className="">
          <span className="text-base mb-1 block font-semibold text-gray-500">
            Local
          </span>
          <p className="text-lg font-bold text-gray-900">
            7.5FCFa <span className="text-gray-500">/SMS</span>
          </p>
        </div>
      </PricingPriceInfos>
      <PricingPriceInfos title="Recieve SMS">
        <Link
          href={"/contact"}
          className="underline underline-offset-8 hover:text-blue-500 text-lg font-bold"
        >
          Contact Us for pricing 🎧
        </Link>
      </PricingPriceInfos>
      <AnimatedButton
        btnText="Buy Now"
        btnType="secondary"
        btnClassName="w-full mt-4"
      />
    </div>
  );
};

export default SmsPricingCard;
