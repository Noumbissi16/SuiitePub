import { Menu } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import NavbarElement from "./navbar/NavbarElement";
import ProductContent from "./navbar/ProductContent";
import SolutionsContent from "./navbar/SolutionsContent";
import AnimatedButton from "../../ui/animated-button";
import { Button } from "../../ui/button";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const HeaderComponent = () => {
  const [isMobileNavBarOpen, setIsMobileNavBarOpen] = useState(false);
  return (
    <header className="relative w-full h-20 bg-white">
      <div className=" mx-auto px-4 flex items-center justify-between h-full">
        <nav className="flex items-center justify-between gap-6 w-full md:w-7xl  mx-auto  h-full">
          <Link href="/" className="flex items-center">
            <div className="w-40 h-10 relative flex items-center justify-center gap-2">
              <Image src={'/logo.svg'} alt={'logo'} width={40} height={40} />
              Direct <br />NetWork
              
            </div>
          </Link>
          <div className="flex justify-center items-center gap-5 h-full max-lg:hidden">
            <NavbarElement
              title="Product"
              FlyoutContent={ProductContent}
              href=""
            />
            <NavbarElement
              title="Solutions"
              FlyoutContent={SolutionsContent}
              href=""
            />
            <NavbarElement title="Integrations" href="/integrations" />
            <NavbarElement
              title="Documentation"
              href ={""}
              FlyoutContent={DocumentationContent}
              isFullPageFlyout={false}
            />
            <NavbarElement title="Pricing" href="/pricing" />
          </div>
          <div className="flex justify-center items-center gap-4">
            <NavbarElement
              title="Contact Sales"
              href="/contact"
              containerElementStyle="max-lg:hidden"
            />
            <AnimatedButton btnText="Login" btnType="black" />
            <Button
              variant={"outline"}
              onClick={() => setIsMobileNavBarOpen(!isMobileNavBarOpen)}
              className="hidden max-lg:block"
            >
              <Menu />
            </Button>
          </div>
        </nav>
      </div>
      <AnimatePresence>
        {isMobileNavBarOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="bg-white p-4 font-bold text-[18px] w-full"
          >
            <div className=" flex justify-between items-center p-4 py-6 border-b cursor-pointer">
              <NavbarElement
                title="Product"
                FlyoutContent={ProductContent}
                href=""
              />
            </div>
            <div className=" flex justify-between items-center p-4 py-6 border-b cursor-pointer w-full">
              <NavbarElement
                title="Solutions"
                FlyoutContent={SolutionsContent}
                href=""
              />
            </div>
            <div className=" flex justify-between items-center p-4 py-6 border-b cursor-pointer">
              <NavbarElement title="Integrations" href="/integrations" />
            </div>
            <div className=" flex justify-between items-center p-4 py-6 border-b cursor-pointer">
              <NavbarElement
                title="Documentation"
                href=""
                FlyoutContent={DocumentationContent}
                isFullPageFlyout={true}
              />
            </div>
            <div className=" flex justify-between items-center p-4 py-6 border-b cursor-pointer">
              <NavbarElement title="Pricing" href="/pricing" />
            </div>
            <div className=" flex justify-between items-center p-4 py-6 ">
              <AnimatedButton
                btnText="Contact Sales"
                btnType="black"
                btnClassName="!w-full"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

function DocumentationContent() {
  return (
    <div className="bg-white  p-4 w-56 space-y-3 ">
      <p>Api reference</p>
      <p>Api docs</p>
    </div>
  );
}

export default HeaderComponent;
