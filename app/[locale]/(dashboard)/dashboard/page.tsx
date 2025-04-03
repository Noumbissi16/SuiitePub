import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import React from 'react'


export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("DashboardPage");
  return {
    title: t("title"),
    description: t("description"),
  };
}

const DashboardPage = () => {
  return (
    <div>DashboardPage</div>
  )
}

export default DashboardPage