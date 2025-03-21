import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "../../ui/button";
import AnimatedButton from "../../ui/animated-button";

const HeroSection = () => {
  return (
    <main className="mx-auto  min-h-[calc(9k0vh-80px)] pt-56 pb-40 grid place-items-center max-lg:py-20 max-sm:py-16">
      <div className="flex justify-between items-center max-lg:flex-col max-lg:gap-20  ">
        <div className="space-y-3 w-1/2 max-lg:w-full">
          <h1 className="text-8xl/21 font-bold tracking-tight text-gray-600 max-md:text-7xl">
            Effective Business
            <br />
            <span className="text-gray-800 text-7xl/25 font-bold tracking-tight max-md:text-6xl">
              Messaging API
            </span>
          </h1>
          <p className="text-xl text-gray-800">
            Enhance your business with D7's scalable API for global marketing,
            engagement, and authentication.
          </p>
          <div className="flex flex-wrap gap-4 max-sm:flex-col max-sm:mt-4">
            <AnimatedButton btnText="Try for Free" btnType="primary" />
            <AnimatedButton btnText=" Book a Demo" btnType="secondary" />
          </div>
          <div className="grid sm:grid-cols-3 gap-6 pt-8">
            <div className="flex items-start gap-2">
              <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <Check className="w-3 h-3 text-blue-600" />
              </div>
              <div>
                <h3 className="font-medium">Free Credits</h3>
                <p className="text-sm text-gray-500">Start with no cost</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <Check className="w-3 h-3 text-blue-600" />
              </div>
              <div>
                <h3 className="font-medium">Unlimited Credit</h3>
                <p className="text-sm text-gray-500">Validity</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <Check className="w-3 h-3 text-blue-600" />
              </div>
              <div>
                <h3 className="font-medium">Top Notch Integration</h3>
                <p className="text-sm text-gray-500">Assistance</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-1/2 max-lg:w-full">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20%2832%29-iwRhvihwpx8M56OD050ZjXKsqqUNOK.png"
            alt="Direct7 Networks Dashboard"
            width={800}
            height={800}
            className="object-contain"
            priority
          />
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
