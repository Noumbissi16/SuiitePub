import React from 'react'
import AnimatedButton from "@/components/ui/animated-button";
import Image from "next/image";

const WhtpsIBHeroSection = () => {
  return (
    <main className="hero-main">
      <section className="hero-content-flex">
        <article className="hero-content-flex-right">
          <section className="flex items-center gap-1 mb-4">
            <div className="w-11 h-11">
              <Image
                src={"/assets/WhtpsIBSolution/Whatsapp_Inbox.svg"}
                width={100}
                height={100}
                alt={"Whatsapp Inbox Solution"}
              />
            </div>
            <p className="text-lg font-bold">WhatsApp Inbox</p>
          </section>
          <h1 className="title mb-10 text-black lg:text-6xl max-sm:text-4xl">
            WhatsApp Inbox <br />
            for Managing Customer Chats
          </h1>
          <p className="subtitle mb-10">
            An efficient solution for businesses to manage customer interactions
            and easily keep detailed chat histories.
          </p>

          <AnimatedButton
            btnText="Book a Demo"
            btnType="primary"
            btnClassName="h-14"
          />
        </article>
        <div className="hero-content-flex-left">
          <Image
            src="/assets/WhtpsIBSolution/WhatsApp_Inbox_Solution_Banner_Image.svg"
            alt="WhatsApp Inbox Solution API Banner Image"
            width={200}
            height={200}
            className="w-[90%] h-full object-contain"
          />
        </div>
      </section>
    </main>
  );
}

export default WhtpsIBHeroSection