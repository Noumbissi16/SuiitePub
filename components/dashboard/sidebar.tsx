"use client";
import React, { Dispatch, JSX, SetStateAction, useState } from "react";

import { IconType } from "react-icons";

import {
  FiBarChart,
  FiChevronDown,
  FiDollarSign,
  FiHome,
} from "react-icons/fi";

import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Grid2x2Check,
  LayoutDashboard,
  Lightbulb,
  MessageSquareMore,
  Settings,
} from "lucide-react";
import { useSideBarStore } from "@/providers/sidebar-store-provider";

const Sidebar = () => {
  const { isSideBarOpen, setIsSideBarOpen } = useSideBarStore((state) => state);

  const [selected, setSelected] = useState("Dashboard");
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleOptionClick = (title: string) => {
    setSelected(title);
    setActiveDropdown((prev) => (prev === title ? null : title));
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
        <div className="space-y-2 mt-8 overflow-y-scroll w-full h-full flex flex-col justify-start">
          <Option
            Icon={LayoutDashboard}
            title="Dashboard"
            selected={selected}
            setSelected={setSelected}
            isSideBarOpen={isSideBarOpen}
            activeDropdown={activeDropdown}
            setActiveDropdown={setActiveDropdown}
            onClick={handleOptionClick}
          />

          <Option
            Icon={MessageSquareMore}
            title="SMS"
            selected={selected}
            setSelected={setSelected}
            isSideBarOpen={isSideBarOpen}
            activeDropdown={activeDropdown}
            setActiveDropdown={setActiveDropdown}
            onClick={handleOptionClick}
            subOptions={[
              { Icon: Lightbulb, title: "Get Started" },
              { Icon: Grid2x2Check, title: "Templates" },
              { Icon: Settings, title: "Settings" },
            ]}
          />
        </div>
      </motion.nav>
    </>
  );
};
export default Sidebar;

interface OptionProps {
  Icon: IconType;
  title: string;
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
  isSideBarOpen: boolean;
  subOptions?: { Icon: IconType; title: string }[];
  activeDropdown: string | null;
  setActiveDropdown: Dispatch<SetStateAction<string | null>>;
  onClick: (title: string) => void;
}
const Option = ({
  Icon,
  title,
  selected,
  setSelected,
  isSideBarOpen,
  subOptions,
  activeDropdown,
  setActiveDropdown,
  onClick,
}: OptionProps) => {
  const isDropdownOpen = activeDropdown === title;

  return (
    <div className="relative">
      <motion.button
        layout
        onClick={() => onClick(title)}
        className={`relative flex h-10 w-full items-center transition-colors pl-4 ${
          selected === title
            ? "bg-blue-100 text-blue-800"
            : "text-slate-500 hover:bg-slate-100"
        }`}
      >
        <motion.div
          layout
          className="grid h-full w-10 place-content-center text-lg"
        >
          <Icon />
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

        {subOptions && (
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
        {isDropdownOpen && subOptions && (
          <motion.div
            layout
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-2 space-y-1"
          >
            {subOptions.map((subOption, index) => (
              <motion.button
                key={index}
                layout
                onClick={() => setActiveDropdown(subOption.title)}
                className={`flex h-8 w-full items-center text-left text-slate-500 hover:bg-slate-100 pl-10 ${
                  selected === subOption.title ? "text-blue-800" : ""
                }`}
              >
                <subOption.Icon className="mr-2" />
                {subOption.title}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
