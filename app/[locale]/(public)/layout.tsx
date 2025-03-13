import "@/app/[locale]/(root)/globals.css";
import RightSideComponent from "@/components/public/right-side-banner";
import { routing } from "@/i18n/routing";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";

export default async function PublicLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <main className="min-h-screen flex justify-between max-md:items-center ">
            <div className="flex flex-col justify-center w-full max-md:w-[85%] mx-auto">
              {children}
            </div>
            <RightSideComponent />
          </main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
