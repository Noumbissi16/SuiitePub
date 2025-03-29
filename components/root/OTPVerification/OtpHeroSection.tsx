import React from 'react'
import AnimatedButton from '@/components/ui/animated-button';
import Image from 'next/image';

const OtpHeroSection = () => {
  return (
    <main className="hero-main">
      <section className="hero-content-flex">
        <article className="hero-content-flex-right">
          <section className="flex items-center gap-1 mb-4">
            <div className="w-11 h-11">
              <Image
                src={"/assets/pricing/OTP_Verification.svg"}
                width={100}
                height={100}
                alt={"OTP Verification"}
              />
            </div>
            <p className="text-lg font-bold">Verify API</p>
          </section>
          <h1 className="title mb-10 text-black lg:text-6xl max-sm:text-4xl">
            Secured OTP <br />
            Verification API
          </h1>
          <p className="subtitle mb-10">
            Enables fast, reliable, and secure one-time password authentication
            to enhance user account protection and prevent unauthorized access.
          </p>

          <AnimatedButton
            btnText="Book a Demo"
            btnType="primary"
            btnClassName="h-14"
          />
        </article>
        <div className="hero-content-flex-left">
          <Image
            src="/assets/OTPVerification/api-banner.original.png"
            alt="OTP Verification API"
            width={200}
            height={200}
            className="w-[90%] h-full object-contain"
          />
        </div>
      </section>
    </main>
  );
}

export default OtpHeroSection