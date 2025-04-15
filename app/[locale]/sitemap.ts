import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.SITE_URL || "https://suiite-pub.vercel.app";

  const locales = ["fr", "en"];
  const staticPaths = [
    "",
    "/about",
    "/contact",
    "/dashboard",
    "/pricing",
    "/privacy",
    "/signin",
    "/signup",
    "/sms",
    "/sms-marketing-solution",
    "/sms/getting-started",
    "/sms/numbers",
    "/sms/settings",
    "/sms/template",
    "/terms",
    "/whatsapp-business-api",
    "/whatsapp-chatbot",
    "/whatsapp-inbox-solution",
    "/whatsapp-meta/getting-started",
    "/whatsapp-meta/numbers",
    "/whatsapp-meta/settings",
    "/whatsapp-meta/template",
  ];

  const routes: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const path of staticPaths) {
      routes.push({
        url: `${baseUrl}/${locale}${path}`,
        lastModified: new Date(),
      });
    }
  }

  return routes;
}
