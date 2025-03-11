import Image from "next/image";
import React from "react";
import NewsLetterForm from "./news-letter-form";
import EnterPriseInformation from "./enterprise-informations";
import LegalLinks from "./LegalLinks";

const Footer = () => {
  return (
    <footer className="w-full max-h-fit min-h-[calc(100vh-100px)] bg-white">
      <main className=" max-w-6xl  w-[80vw]  mx-auto text-center">
        <section className="xl:py-[3.875rem] py-10 flex items-center justify-between max-xl:flex-col max-xl:justify-start max-xl:items-start max-xl:gap-5 max-sm:gap-5">
          <div className="h-10  flex items-center justify-center gap-2">
            <Image src={"/logo.svg"} alt={"logo"} width={40} height={40} />
            Direct <br />
            NetWork
          </div>
          <NewsLetterForm />
        </section>
        <section className="flex max-md:flex-col gap-12 items-start xl:py-[3.875rem] py-10 border-b border-t text-start">
          <div className="md:w-80 max-md:w-full">
            <EnterPriseInformation />
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex gap-5 max-md:flex-col max-md:items-start">
              <LegalLinks
                title="Company"
                link={[
                  { href: "/about", title: "About Us" },
                  { href: "", title: "Blog" },
                  { href: "#", title: "Customer Support" },
                  { href: "#", title: "Careers" },
                ]}
              />

              <LegalLinks
                title="Support"
                link={[
                  { href: "/integrations", title: "Integrations" },
                  { href: "/pricing", title: "Pricing" },
                  { href: "", title: "Developer" },
                ]}
              />
              <LegalLinks
                title="Legal"
                link={[
                  { href: "/privacy", title: "Privacy Policy" },
                  { href: "/terms", title: "Terms of Service" },
                  { href: "#", title: "Service Status" },
                ]}
              />
            </div>
          </div>
        </section>

        <div className="xl:py-[3.875rem] py-10">
          <span className="text-gray-500 ">
            Copyright &copy;2025 Suiite E-Sarl, Yaounde Nsimeyong
          </span>
        </div>
      </main>
    </footer>
  );
};

export default Footer;
