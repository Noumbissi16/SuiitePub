import AnimatedButton from '@/components/ui/animated-button';
import Image from 'next/image';
import React from 'react'

const SmsMarketSolutionHeroSection = () => {
  return (
    <main className="hero-main">
      <section className="hero-content-flex">
        <article className="hero-content-flex-right">
          <section className="flex items-center gap-1 mb-4">
            <div className="w-11 h-11">
              <Image
                src={"/assets/SMSMarketingSolution/SMS_Marketing.svg"}
                width={100}
                height={100}
                alt={"SMS Marketing Solution"}
              />
            </div>
            <p className="text-lg font-bold">SMS MARKETING</p>
          </section>
          <h1 className="title mb-10 text-black lg:text-6xl max-sm:text-4xl">
            Targeted SMS <br />
            Marketing to Drive More Sales
          </h1>
          <p className="subtitle mb-10">
            Connect with customers instantly with personalized messages,
            promotions, and updates, driving increased sales.
          </p>

          <AnimatedButton
            btnText="Book a Demo"
            btnType="primary"
            btnClassName="h-14"
          />
        </article>
        <div className="hero-content-flex-left">
          <Image
            src="/assets/SMSMarketingSolution/SMS_Marketing_Solution_Banner_Image.svg"
            alt=" SMS Marketing Solution Banner Image"
            width={200}
            height={200}
            className="w-[90%] h-full object-contain"
          />
        </div>
      </section>
    </main>
  );
}

export default SmsMarketSolutionHeroSection