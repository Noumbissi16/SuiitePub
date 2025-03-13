import {Link} from "@/i18n/navigation";
import React from "react";
import { UrlObject } from "url";

const LegalLinks = ({
  title,
  link,
}: {
  title: string;
  link: {
    href: "/" | "/about" | "/contact" | "/integrations" | "/pricing" | "/privacy" | "/terms" | "/signup" | "/signin" | " " | "#" | ({ pathname: "/"; } & Omit<UrlObject, "pathname">) | ({ pathname: "/about"; } & Omit<UrlObject, "pathname">) | ({ pathname: "/contact"; } & Omit<UrlObject, "pathname">) | ({ pathname: "/integrations"; } & Omit<UrlObject, "pathname">) | ({ pathname: "/pricing"; } & Omit<UrlObject, "pathname">) | ({ pathname: "/privacy"; } & Omit<UrlObject, "pathname">) | ({ pathname: "/terms"; } & Omit<UrlObject, "pathname">) | ({ pathname: "/signup"; } & Omit<UrlObject, "pathname">) | ({ pathname: "/signin"; } & Omit<UrlObject, "pathname">);
    title: string;
  }[];
}) => {
  return (
    <main className="flex flex-col gap-3 h-fit">
      <span>{title}</span>
      <ul className="flex flex-col gap-3">
        {link.map((item, index) => (
          <li key={index} className="hover:text-blue-500 cursor-pointer">
            <Link href={item.href}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default LegalLinks;
