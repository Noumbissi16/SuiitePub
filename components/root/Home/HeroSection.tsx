import React from "react";
import AnimatedButton from "../../ui/animated-button";
import { useTranslations } from "next-intl";
import {motion} from "framer-motion";

const HeroSection = () => {
  const t = useTranslations("HomePage");
  return (
    <main className="hero-bg max-md:h-fit bg-blue-50 ">
      <section className="hero-main page-width ">
        <article className="flex flex-col items-center gap-4 max-md:items-start">
          <h1  className="text-7xl/17  font-bold tracking-tight max-md:text-6xl max-sm:text-4xl text-center md:max-w-4xl ">
            {t("hero.title")}
          </h1>
          <p className="text-xl max-sm:text-lg text-gray-800 mt-4 md:max-w-xl text-center ">
            {t("hero.subtitle")}
          </p>
          <div className="flex flex-wrap gap-4 max-md:flex-col mt-4 max-md:w-full">
            <AnimatedButton
              btnText={t("hero.primaryButton")}
              btnType="primary"
            />
            <AnimatedButton
              btnText={t("hero.secondaryButton")}
              btnType="secondary"
            />
          </div>
        </article> 
      </section>
    </main>
  );
};

export default HeroSection;
