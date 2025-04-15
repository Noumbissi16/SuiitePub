/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://suiite-pub.vercel.app",
  generateRobotsTxt: true, 
  generateIndexSitemap: false,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ["/404", "/500"],
  i18n: {
    defaultLocale: "fr",
    locales: ["fr", "en"],
  },
  alternateRefs: [
    {
      href: "https://suiite-pub.vercel.app/en",
      hreflang: "en",
    },
    {
      href: "https://suiite-pub.vercel.app/fr",
      hreflang: "fr",
    },
  ],
  transform: async (config, path) => {
    // Remove dynamic locale root path only
    if (path === '/[locale]') return null

    console.log(config.siteUrl, path)

    // Return different locale versions
    return config.i18n.locales.map((locale) => {
      return {
        loc: `${config.siteUrl}/${locale}${path.replace('/[locale]', '')}`,
        changefreq: config.changefreq,
        priority: config.priority,
        lastmod: new Date().toISOString(),
        alternateRefs: config.alternateRefs,
      }
    })
  },
}