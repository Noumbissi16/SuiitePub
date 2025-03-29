import AnimatedButton from '@/components/ui/animated-button';
import Image from 'next/image';
import React from 'react'

const WApiHeroSection = () => {
  return (
    <main className="hero-main">
      <section className="hero-content-flex">
        <article className="hero-content-flex-right">
          <section className="flex items-center gap-1 mb-4">
            <div className="w-11 h-11">
              <Image
                src={"/assets/pricing/Whatsapp_Business.svg"}
                width={100}
                height={100}
                alt={"Whatsapp Business"}
              />
            </div>
            <p className="text-lg font-bold">WhatsApp Business API</p>
          </section>
          <h1 className="title mb-10 text-black lg:text-6xl max-sm:text-4xl">
            Boost Customer <br />
            Engagement with WhatsApp API
          </h1>
          <p className="subtitle mb-10">
            Enables conversations that connect people and businesses, fostering
            trust and driving growth.
          </p>

          <AnimatedButton
            btnText="Book a Demo"
            btnType="primary"
            btnClassName="h-14"
          />
        </article>
        <div className="hero-content-flex-left">
          <Image
            src="/assets/WApi/whatspp-banner1.png"
            alt="WhatsApp Business API"
            width={200}
            height={200}
            className="w-[90%] h-full object-contain"
          />
        </div>
      </section>
    </main>
  );
}

export default WApiHeroSection