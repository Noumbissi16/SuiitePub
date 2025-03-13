"use client";
import { HeroSection, ScrolAnimatedSection } from "@/components/root/Home";
import { useTranslations } from "next-intl";

const fadeUpVariant = {
  initial: { opacity: 0, y: 100 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function HomePage() {
  const t = useTranslations("HomePage");
  return (
    <>
      <HeroSection />
      <ScrolAnimatedSection />
    </>
  );
}
