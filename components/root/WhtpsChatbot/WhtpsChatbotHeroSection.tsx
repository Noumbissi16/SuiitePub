import React from 'react'
import AnimatedButton from "@/components/ui/animated-button";
import Image from "next/image";

const WhtpsChatbotHeroSection = () => {
  return (
    <main className="hero-main">
      <section className="hero-content-flex">
        <article className="hero-content-flex-right">
          <section className="flex items-center gap-1 mb-4">
            <div className="w-11 h-11">
              <Image
                src={"/assets/WhtpsChatbot/Whatsapp_Chatbot.svg"}
                width={100}
                height={100}
                alt={"Whatsapp Chatbot"}
              />
            </div>
            <p className="text-lg font-bold">WhatsApp Chatbot</p>
          </section>
          <h1 className="title mb-10 text-black lg:text-6xl max-sm:text-4xl">
            24/7 Customer
            <br />
            Engagement with Chatbots
          </h1>
          <p className="subtitle mb-10">
            Provide fast and personalized support for customer questions and
            orders via WhatsApp Business Chatbots using the Cloud API.
          </p>

          <AnimatedButton
            btnText="Book a Demo"
            btnType="primary"
            btnClassName="h-14"
          />
        </article>
        <div className="hero-content-flex-left">
          <Image
            src="/assets/WhtpsChatbot/Whatsapp_chatbot_solution_banner_Image.svg"
            alt=" WhatsApp Chatbot Solution Banner Image"
            width={200}
            height={200}
            className="w-[90%] h-full object-contain"
          />
        </div>
      </section>
    </main>
  );
}

export default WhtpsChatbotHeroSection