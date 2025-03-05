import Image from "next/image";
import React from "react";
import NewsLetterForm from "./news-letter-form";

const Footer = () => {
  return (
    <footer className="w-full h-[calc(100vh-100px)] bg-white py-16">
      <main className="w-[90vw] max-w-7xl max-lg:max-w-xl mx-auto text-center">
        <section className="flex justify-between py-10 max-lg:flex-col max-lg:gap-12">
          <div className="w-40 h-10 relative flex items-center justify-center gap-2">
            <Image src={"/logo.svg"} alt={"logo"} width={40} height={40} />
            Direct <br />
            NetWork
          </div>
          <NewsLetterForm />
        </section>
        <section className="border-b border-t p-12 "></section>

        <span className="text-gray-500 ">
          Copyright &copy;2025 Suiite E-Sarl, Yaounde Nsimeyong
        </span>
      </main>
    </footer>
  );
};

export default Footer;
