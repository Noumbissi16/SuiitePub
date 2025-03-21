import { Metadata } from "next";
import PricingPageClient from "@/components/root/pricing/PricingPageClient"; // Import the Client Component
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("PricingPage");

  return {
    title: t("title"),
    description: t("description"),
  };
}

const PrincingPage = () => {
  const t = useTranslations("HomePage");

  return <PricingPageClient />;
};

export default PrincingPage;
