import Image from "next/image";
import React from "react";
import { SectionTitle } from "../Shared/SectionBadgeTitle";
import { useTranslations } from "next-intl";

const DashboardImg = () => {
  const t = useTranslations("HomePage.dashboard");
  return (
    <section className="flex flex-col items-center justify-center w-full h-full  py-10 bg-gray-100 ">
      <SectionTitle title={t("title")} />
      <p className="text-gray-600 text-center max-w-xl mb-8 text-base   max-sm:w-[90%]">
        {t("description")}
      </p>
      <Image
        src="/assets/nord-vpn-page.jpg"
        alt="dashboard"
        width={500}
        height={500}
        className="rounded-lg md:w-3/4 lg:w-1/2 max-sm:w-[95%] shadow-lg transition-transform duration-300 transform"
      />
    </section>
  );
};

export default DashboardImg;
