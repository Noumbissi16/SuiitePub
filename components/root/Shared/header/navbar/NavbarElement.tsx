import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ChevronLeft, ChevronRight, X } from "lucide-react";
import { Link } from "@/i18n/navigation";

const NavBarElement = ({
  title,
  href,
  FlyoutContent,
  isFullPageFlyout = true,
  containerElementStyle,
}: {
  title: string;
  href: string;
  FlyoutContent?: React.ElementType;
  isFullPageFlyout?: boolean;
  containerElementStyle?: string;
}) => {
  const [open, setOpen] = useState(false);

  const responsiveDesiredWidth = 1024;
  const showFlyout = FlyoutContent && open;

  const flyoutVariants = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 15 },
  };

  const flyoutVariantsMd = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 },
  };
  const mergedVariants = {
    initial: (viewportWidth: number) => {
      return viewportWidth < responsiveDesiredWidth
        ? flyoutVariantsMd.initial
        : flyoutVariants.initial;
    },
    animate: (viewportWidth: number) => {
      return viewportWidth < responsiveDesiredWidth
        ? flyoutVariantsMd.animate
        : flyoutVariants.animate;
    },
    exit: (viewportWidth: number) => {
      return viewportWidth < responsiveDesiredWidth
        ? flyoutVariantsMd.exit
        : flyoutVariants.exit;
    },
  };

  return (
    <div
      className={`w-full h-full  ${containerElementStyle}`}
      onMouseEnter={(e) => {
        if (window.innerWidth > responsiveDesiredWidth) setOpen(true);
      }}
      onMouseLeave={(e) => {
        if (window.innerWidth > responsiveDesiredWidth) setOpen(false);
      }}
    >
      <Link
        href={FlyoutContent ? "#" : (href as any)}
        onClick={() => setOpen(true)}
        className="cursor-pointer lg:hidden h-full flex items-center gap-1 font-bold text-[18px] justify-center w-fit max-lg:justify-between max-lg:w-full"
      >
        {title}
        {FlyoutContent && (
          <>
            <ChevronDown className="w-4 h-4 max-lg:hidden" />
            <ChevronRight className="w-4 h-4 hidden max-lg:block" />
          </>
        )}
      </Link>
      <Link
        href={href as any}
        className="max-lg:hidden h-full flex items-center gap-1 font-bold text-[18px] justify-center w-fit max-lg:justify-between max-lg:w-full"
      >
        {title}
        {FlyoutContent && (
          <>
            <ChevronDown className="w-4 h-4 max-lg:hidden" />
            <ChevronRight className="w-4 h-4 hidden max-lg:block" />
          </>
        )}
      </Link>

      <AnimatePresence>
        {showFlyout && (
          <motion.div
            className={` bg-white absolute z-50 top-16 max-lg:top-24  ${
              isFullPageFlyout
                ? "w-full h-fit pb-8 max-lg:h-screen left-1/2 -translate-x-1/2 border-b"
                : "w-fit"
            }`}
            custom={typeof window !== "undefined" ? window.innerWidth : 0}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={mergedVariants}
          >
            <div className="px-8 pb-8 overflow-y-scroll h-[calc(100vh-150px)] xl:h-fit">
              <div
                onClick={() => setOpen(false)}
                className=" max-lg:flex items-center justify-start gap-2 hidden overflow-y-scroll"
              >
                <ChevronLeft />
                Back
              </div>
              {<FlyoutContent />}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavBarElement;
