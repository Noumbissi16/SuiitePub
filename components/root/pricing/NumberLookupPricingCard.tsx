import { Link } from '@/i18n/navigation';
import React from 'react'
import PricingPriceInfos from './PricingPriceInfos';
import AnimatedButton from '@/components/ui/animated-button';
import PricingCardHeader from './PricingCardHeader';

const NumberLookupPricingCard = () => {
  return (
    <div className="pricing-card h-fit">
      <PricingCardHeader
        title="Number Lookup"
        icon={{
          alt: "Number Lookup",
          src: "/assets/pricing/Number_Lookup.svg",
        }}
      />

      <PricingPriceInfos >
        <div className="">
          <span className="text-base mb-1 block font-semibold text-gray-500">
            Starts at
          </span>
          <p className="text-lg font-bold text-gray-900">
            5FCFa <span className="text-gray-500">/Lookup</span>
          </p>
        </div>
        <Link
          href={"/contact"}
          className="underline underline-offset-8 hover:text-blue-500 text-lg font-bold"
        >
          Contact Us for Volume Discount 🎧
        </Link>
      </PricingPriceInfos>
      <AnimatedButton
        btnText="Buy Now"
        btnType="secondary"
        btnClassName="w-full mt-4"
      />
    </div>
  );
}

export default NumberLookupPricingCard