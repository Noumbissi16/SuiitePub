import type { Metadata } from "next";
// import { Cabin } from "next/font/google";
import "./globals.css";
import ResponsiveHeader from "@/components/Shared/header/ResponsiveHeader";
import Footer from "@/components/Shared/footer/footer";

export const metadata: Metadata = {
  title: "Solution for online advertisement",
  description: "The solution for your online advertissement needs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` relative
           antialiased font-sans bg-gray-100 `}
      >
        <ResponsiveHeader />
        <div className="w-[90vw] max-w-7xl max-lg:max-w-xl mx-auto">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
