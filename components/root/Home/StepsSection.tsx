"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Package2, FileText, CreditCard } from "lucide-react";
import SectionBadgeTitle, { SectionTitle } from "../Shared/SectionBadgeTitle";
import { useTranslations } from "next-intl";

const StepsSection = () => {
  const t = useTranslations("HomePage.steps");
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  const steps = [
    {
      icon: Package2,
      title: t("step1.title"),
      description: t("step1.description"),
    },
    {
      icon: FileText,
      title: t("step2.title"),
      description: t("step2.description"),
    },
    {
      icon: CreditCard,
      title: t("step3.title"),
      description: t("step3.description"),
    },
  ];
  return (
    <section className="py-16 px-4 bg-blue-900">
      <SectionBadgeTitle title={t("sectionTitle")} />
      <SectionTitle title={t("headline")} className="text-white" />

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              exit={"hidden"}
              viewport={{ once: true }}
              custom={index}
              className="group relative bg-white rounded-xl p-6"
            >
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                  <Icon className="w-6 h-6 text-amber-600" />
                </div>
                <div className="relative">
                  <span className="absolute -left-2 -top-6 text-7xl font-bold text-gray-200 select-none">
                    {index + 1}
                  </span>
                  <h3 className="text-xl font-bold mb-2 relative">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              </div>
              <div className="absolute right-4 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowRight className="w-5 h-5 text-amber-600" />
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default StepsSection;
