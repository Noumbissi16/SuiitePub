import React from "react";
import PricingCardHeader from "./PricingCardHeader";
import PricingPriceInfos from "./PricingPriceInfos";
import { Link } from "@/i18n/navigation";
import AnimatedButton from "@/components/ui/animated-button";

const WhatsappPricingCard = () => {
  return (
    <div className="pricing-card">
      <PricingCardHeader
        title="Whatsapp"
        icon={{
          alt: "Whatsapp",
          src: "/assets/pricing/Whatsapp_Business.svg",
        }}
      />
      <PricingPriceInfos title="Send / Recieve">
        <p className="flex flex-col gap-1">
          <a
            href="https://developers.facebook.com/docs/whatsapp/pricing"
            target="_blank"
            className="underline text-xs font-medium text-blue-700"
          >
            Meta Fee+
          </a>
          <span className="text-lg font-bold text-gray-900">
            6.5FCFa{" "}
            <span className="text-gray-500 text-base font-bold">
              (Platform fee) / Business Initaited Message
            </span>
          </span>
        </p>
      </PricingPriceInfos>
      <PricingPriceInfos title="Chatbots / Automations">
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

export default WhatsappPricingCard;
