"use client";

import { motion } from "framer-motion";
import { BadgeCheck, CircleX } from "lucide-react";
import { useTranslations } from "next-intl";
import SectionBadgeTitle, { SectionTitle } from "../Shared/SectionBadgeTitle";

const ProblemsSection = () => {
  const listVariants = {
    open: (delay: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: delay * 0.125,
        ease: "easeOut",
        duration: 0.5,
      },
    }),
    closed: {
      y: 50,
      opacity: 0,
    },
  };
  const t = useTranslations("HomePage.problemSection");

  const problemList = Object.values(t.raw("problems.list")) as string[];

  const solutionsList = Object.values(t.raw("solutions.list")) as {
    title: string;
    subtitle: string;
  }[];

  return (
    <section className="pt-16 px-4 bg-white rotate">
      <SectionBadgeTitle title={t("title")} />
      <div className="max-w-5xl mx-auto">
        <SectionTitle title={t("subtitle")} />

        <div className="flex max-md:flex-col gap-8 max-md:gap-0 justify-between items-start max-w-4xl mx-auto">
          <ul className="p-6    md:mb-12 w-fit">
            <p className="mb-3 font-bold capitalize">
              {t("problems.withoutSolution")}
            </p>
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.5,
                  ease: "easeOut",
                },
              }}
              exit={{
                opacity: 0,
                y: 20,
                transition: {
                  duration: 0.5,
                  ease: "easeOut",
                },
              }}
              viewport={{ once: true, amount: 0.5 }}
              className="grid grid-cols-2 lg:grid-cols-1 gap-x-5 max-sm:grid-cols-1 w-fit"
            >
              {problemList.map((problem, index) => (
                <li
                  key={index}
                  className="rounded py-2 flex items-center justify-start gap-2 "
                >
                  <CircleX className="w-5 h-5 text-red-800 shrink-0" />
                  <p className="w-fit">{problem}</p>
                </li>
              ))}
            </motion.div>
          </ul>
          <ul className="grid p-6 w-fit">
            <p className="mb-3 font-bold capitalize">
              {t("solutions.withSolution")}
            </p>
            <div className="grid grid-cols-2 gap-x-5 max-sm:grid-cols-1 ">
              {solutionsList.map((solution, index) => (
                <motion.li
                  key={index}
                  custom={index}
                  initial="closed"
                  whileInView={"open"}
                  exit={"closed"}
                  viewport={{ once: true, amount: 0.3 }}
                  variants={listVariants}
                  className="rounded py-2 flex items-start gap-2 "
                >
                  <BadgeCheck className="w-5 h-5 text-green-800 mt-1 shrink-0" />
                  <div>
                    <p className="p-0 m-0 text-green-800 font-medium ">
                      {solution.title}
                    </p>
                    <p className="text-sm text-gray-500 mt-0.5">
                      {solution.subtitle}
                    </p>
                  </div>
                </motion.li>
              ))}
            </div>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
