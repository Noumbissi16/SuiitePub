import "@/app/[locale]/(root)/globals.css";
import Sidebar from "@/components/dashboard/sidebar";
import { routing } from "@/i18n/routing";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";

import { SideBarStoreProvider } from "@/providers/sidebar-store-provider";
import DashboardTopbar from "@/components/dashboard/topbar";

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
          <SideBarStoreProvider>
            <main className="flex flex-col">
              <DashboardTopbar />
              <div className="flex h-[calc(100vh-64px)]">
                <Sidebar />
                <div className="w-full mt-6 ml-6">{children}</div>
              </div>
            </main>
          </SideBarStoreProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
