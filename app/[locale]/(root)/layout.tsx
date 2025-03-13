import { NextIntlClientProvider } from "next-intl";
import "./globals.css";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import ResponsiveHeader from "@/components/root/Shared/header/ResponsiveHeader";
import { Metadata } from "next";
import Footer from "@/components/root/Shared/footer/footer";

export const metadata: Metadata = {
  title: "Solution for online advertisement",
  description: "The solution for your online advertissement needs",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className=" relative antialiased font-sans bg-gray-100">
        <NextIntlClientProvider messages={messages}>
          <ResponsiveHeader />
          <main className="w-[80vw] max-w-6xl xl:max-w-7xl mx-auto">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
