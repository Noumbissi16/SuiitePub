import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["en", "fr"],

  // Used when no locale matches
  defaultLocale: "en",
  pathnames: {
    "/": "/",
    " ": " ",
    "#": "#",
    "": "",
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
    "/sms": {
      en: "/sms",
      fr: "/sms",
    },
    "/sms-marketing-solution": {
      en: "/sms-marketing-solution",
      fr: "/solution-marketing-sms",
    },
    "/number-lookup-api": {
      en: "/number-lookup-api",
      fr: "/api-recherche-numero",
    },
    "/otp-verification-api": {
      en: "/otp-verification-api",
      fr: "/api-verification-otp",
    },
    "/whatsapp-business-api": {
      en: "/whatsapp-business-api",
      fr: "/api-whatsapp-business",
    },
    "/whatsapp-inbox-solution": {
      en: "/whatsapp-inbox-solution",
      fr: "/solution-inbox-whatsapp",
    },
    "/whatsapp-chatbot": {
      en: "/whatsapp-chatbot",
      fr: "/chatbot-whatsapp",
    },
  },
});

export type Locale = (typeof routing.locales)[number];
