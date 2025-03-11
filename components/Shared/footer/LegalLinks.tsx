import {Link} from "@/i18n/navigation";
import React from "react";

const LegalLinks = ({
  title,
  link,
}: {
  title: string;
  link: {
    href: string;
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
