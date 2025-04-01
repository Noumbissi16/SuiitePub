import AnimatedButton from "@/components/ui/animated-button";
import Image from "next/image";
import React from "react";

const SmsHeroSection = () => {
  return (
    <main className="hero-main page-width">
      <section className="hero-content-flex">
        <article className="hero-content-flex-right">
          <section className="flex items-center gap-1 mb-4">
            <div className="w-11 h-11">
              <Image
                src={"/assets/pricing/SMS.svg"}
                width={100}
                height={100}
                alt={"SMS"}
              />
            </div>
            <p className="text-lg font-bold">SMS API</p>
          </section>
          <h1 className="title mb-10 text-black lg:text-6xl max-sm:text-4xl">
            SMS API for <br />
            Direct Business Communication
          </h1>
          <p className="subtitle mb-10">
            Expand your business reach with a scalable SMS platform designed for
            instant global communication.
          </p>

          <AnimatedButton
            btnText="Book a Demo"
            btnType="primary"
            btnClassName="h-14"
          />
        </article>
        <div className="hero-content-flex-left">
          <Image
            src="/assets/sms/sms-banner.original.png"
            alt="Sms Banner"
            width={200}
            height={200}
            className="w-[90%] h-full object-contain"
          />
        </div>
      </section>
    </main>
  );
};

export default SmsHeroSection;
