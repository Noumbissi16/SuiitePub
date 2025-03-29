import AnimatedButton from '@/components/ui/animated-button';
import Image from 'next/image';
import React from 'react'

const NbrLookupHeroSection = () => {
  return (
    <main className="hero-main">
      <section className="hero-content-flex">
        <article className="hero-content-flex-right">
          <section className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8">
              <Image
                src={"/assets/pricing/Number_Lookup.svg"}
                width={100}
                height={100}
                alt={"Number Lookup"}
              />
            </div>
            <p className="text-lg font-bold">Number Lookup API</p>
          </section>
          <h1 className="title mb-10 text-black lg:text-6xl max-sm:text-4xl">
            Number Lookup <br />
            API to Search Valid Numbers
          </h1>
          <p className="subtitle mb-10">
            Ensure that you send messages exclusively to active and valid phone
            numbers to enhance the efficiency of your communication and minimize
            unnecessary expenses.
          </p>

          <AnimatedButton
            btnText="Book a Demo"
            btnType="primary"
            btnClassName="h-14"
          />
        </article>
        <div className="hero-content-flex-left">
          <Image
            src="/assets/NbrLookup/Number_API_Lookup_.svg"
            alt="Number Lookup API"
            width={200}
            height={200}
            className="w-[90%] h-full object-contain"
          />
        </div>
      </section>
    </main>
  );
}

export default NbrLookupHeroSection