import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["en", "fr"],

  // Used when no locale matches
  defaultLocale: "en",
  pathnames: {
    "/":"/",
    "/about": {
      en: "/about",
      fr: "/à-propos",
    },
    "/contact": {
      en: "/contact",
      fr: "/contact",
    },
    "/integrations": {
      en: "/integrations",
      fr: "/intégrations",
    },
    "/pricing": {
      en: "/pricing",
      fr: "/prix",
    },
    "/privacy": {
      en: "/privacy",
      fr: "/confidentialité",
    },
    "/terms": {
      en: "/terms",
      fr: "/conditions",
    },
    "/signup": {
      en: "/signup",
      fr: "/inscription",
    },
    "/signin": {
      en: "/login",
      fr: "/connexion",
    },
  },
});

export type Locale = typeof routing.locales[number];
