import { Check } from "lucide-react";
import Image from "next/image";
import React from "react";
import AnimatedButton from "../../ui/animated-button";

const HeroSection = () => {
  return (
    <main className="hero-main">
      <section className="hero-content-flex">
        <article className="hero-content-flex-right">
          <h1 className="title">
            Effective Business
            <br />
            <span className="">
              Messaging API
            </span>
          </h1>
          <p className="subtitle">
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
        </article>
        <div className="hero-content-flex-left">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20%2832%29-iwRhvihwpx8M56OD050ZjXKsqqUNOK.png"
            alt="Direct7 Networks Dashboard"
            width={900}
            height={900}
            className="object-contain"
            priority
          />
        </div>
      </section>
    </main>
  );
};

export default HeroSection;
