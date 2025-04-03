"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, CircleX } from "lucide-react";
import { useSideBarStore } from "@/providers/sidebar-store-provider";
import { NavItem, OptionProps } from "./types";
import { NAVIGATION_ITEMS } from "@/lib/contants";
import { usePathname, useRouter } from "@/i18n/navigation";

const Sidebar = () => {
  const { isSideBarOpen, setIsSideBarOpen } = useSideBarStore((state) => state);
  const [selected, setSelected] = useState<{
    main: string;
    sub: string | null;
  }>({ main: "Dashboard", sub: null });
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const handleResize = () => {
       if (typeof window === "undefined") return;
      if (window.innerWidth >= 768) {
        setIsSideBarOpen(true);
      }
    };
    handleResize();

    console.log("window width", window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [setIsSideBarOpen]);

  const handleOptionClick = (item: NavItem) => {
    const hasSubItems = !!item.subItems && item.subItems.length > 0;
    if (!hasSubItems) {
      setSelected({ main: item.title, sub: null });
      router.push(item.path as any);
    }

    setActiveDropdown((prev) => (prev === item.title ? null : item.title));
  };

  return (
    <>
      <motion.nav
        layout
        className="sticky top-0 h-full shrink-0 border-r border-slate-300 bg-white max-md:hidden"
        style={{
          width: isSideBarOpen ? "230px" : "fit-content",
        }}
      >
        <div className="space-y-1 mt-8 overflow-y-scroll w-full h-full flex flex-col justify-start">
          {NAVIGATION_ITEMS.map((item) => (
            <Option
              key={item.id}
              navItem={item}
              selected={selected}
              setSelected={setSelected}
              isSideBarOpen={isSideBarOpen}
              activeDropdown={activeDropdown}
              setActiveDropdown={setActiveDropdown}
              onClick={handleOptionClick}
              router={router}
            />
          ))}
        </div>
      </motion.nav>
      <AnimatePresence>
        <div
          className={`${
            isSideBarOpen &&
            "absolute top-0 left-0 z-50 md:hidden bg-black/50 w-full h-full"
          } `}
          onClick={() => setIsSideBarOpen(false)}
        />

        <motion.nav
          layout
          className="fixed top-0 h-screen shrink-0 border-r border-slate-300 bg-white px-2 pt-10 md:hidden z-[100] w-[40%] min-w-[300px] overflow-y-scroll transition-all ease-in-out duration-300"
          style={{
            translateX: isSideBarOpen ? "0" : "-100%",
          }}
        >
          <motion.div className="flex h-7 items-center justify-end absolute top-2 right-4 cursor-pointer">
            <CircleX
              className="cursor-pointer w-full h-full"
              onClick={() => setIsSideBarOpen(false)}
            />
          </motion.div>

          <div className="space-y-2">
            {NAVIGATION_ITEMS.map((item) => (
              <Option
                key={item.id}
                navItem={item}
                selected={selected}
                setSelected={setSelected}
                isSideBarOpen={isSideBarOpen}
                activeDropdown={activeDropdown}
                setActiveDropdown={setActiveDropdown}
                onClick={handleOptionClick}
                router={router}
                setIsSideBarOpen={setIsSideBarOpen}
              />
            ))}
          </div>
        </motion.nav>
      </AnimatePresence>
    </>
  );
};
export default Sidebar;

const Option = ({
  navItem,
  selected,
  setSelected,
  isSideBarOpen,
  activeDropdown,
  setActiveDropdown,
  onClick,
  router,
  setIsSideBarOpen,
}: OptionProps) => {
  const { Icon, title, subItems, path } = navItem;
  const isDropdownOpen = activeDropdown === title;
  const hasSubOptions = !!subItems && subItems.length > 0;

  return (
    <div className="relative">
      <motion.button
        layout
        onClick={() => {
          onClick(navItem);
          setIsSideBarOpen && setIsSideBarOpen(false);
        }}
        className={`relative flex h-10 w-full items-center transition-colors py-5 ease-in-out duration-300 cursor-pointer mb-1 ${
          selected.main === title && (!hasSubOptions || selected.sub !== null)
            ? " text-blue-800 bg-blue-100"
            : "text-slate-500 hover:text-blue-500"
        }
          ${isSideBarOpen && "pl-3"}
          `}
      >
        <motion.div
          layout
          className="grid h-5 w-10 place-content-center text-lg"
        >
          <Icon size={23} />
        </motion.div>

        {isSideBarOpen && (
          <motion.span
            layout
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.125 }}
            className="text-md font-medium"
          >
            {title}
          </motion.span>
        )}

        {isSideBarOpen && hasSubOptions && (
          <motion.div
            layout
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.125 }}
            className="grid h-full w-10 place-content-center text-lg"
          >
            <ChevronDown
              className={`transition-transform ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
            />
          </motion.div>
        )}
      </motion.button>

      <AnimatePresence>
        {isDropdownOpen && hasSubOptions && isSideBarOpen && (
          <motion.div
            layout
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className=" space-y-1"
          >
            {subItems.map((subOption) => (
              <motion.button
                key={subOption.id}
                layout
                onClick={() => {
                  setSelected({ main: title, sub: subOption.title });
                  setActiveDropdown(title);
                  router.push(subOption.path);
                  setIsSideBarOpen?.(false);
                }}
                className={`flex h-8 w-full items-center text-left pl-10 py-5 transition-colors ease-in-out duration-300  cursor-pointer ${
                  selected.main === title && selected.sub === subOption.title
                    ? "text-blue-800 bg-blue-100"
                    : "text-slate-500  hover:text-blue-500"
                }`}
              >
                <subOption.Icon className="mr-2" size={21} />
                {subOption.title}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
