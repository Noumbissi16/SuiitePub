"use client";
import React, { Dispatch, JSX, SetStateAction, useState } from "react";

import { IconType } from "react-icons";

import {
  FiBarChart,
  FiChevronDown,
  FiChevronsRight,
  FiDollarSign,
  FiHome,
  FiMonitor,
  FiShoppingCart,
  FiTag,
  FiUsers,
} from "react-icons/fi";

import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Users,
  Key,
  MessageSquare,
  CheckSquare,
  Search,
  Download,
  ChevronDown,
  Info,
} from "lucide-react";
import { useSideBarStore } from "@/providers/sidebar-store-provider";

type SectionType =
  | "dashboard"
  | "contacts"
  | "api-tokens"
  | "sms"
  | "verify"
  | "whatsapp"
  | "number-lookup"
  | "viber"
  | "integrations"
  | "import-export";

const Sidebar = () => {
  // const [isSideBarOpen, setIsSideBarOpen] = useState(false);
    const { isSideBarOpen, setIsSideBarOpen } = useSideBarStore((state) => state);
  

  const [selected, setSelected] = useState("Dashboard");
  const [activeSection, setActiveSection] = useState<SectionType>("dashboard");

  return (
    <div>
      <motion.nav
        layout
        className="sticky top-0 h-full shrink-0 border-r border-slate-300 bg-white p-2 max-md:hidden"
        style={{
          width: isSideBarOpen ? "225px" : "fit-content",
        }}
      >
        <TitleSection isSideBarOpen={isSideBarOpen} />

        <div className="space-y-1">
          <Option
            Icon={FiHome}
            title="Dashboard"
            selected={selected}
            setSelected={setSelected}
            isSideBarOpen={isSideBarOpen}
          />

          <Option
            Icon={FiDollarSign}
            title="Sales"
            selected={selected}
            setSelected={setSelected}
            isSideBarOpen={isSideBarOpen}
            notifs={3}
          />

          <Option
            Icon={FiMonitor}
            title="View Site"
            selected={selected}
            setSelected={setSelected}
            isSideBarOpen={isSideBarOpen}
          />

          <Option
            Icon={FiShoppingCart}
            title="Products"
            selected={selected}
            setSelected={setSelected}
            isSideBarOpen={isSideBarOpen}
          />

          <Option
            Icon={FiTag}
            title="Tags"
            selected={selected}
            setSelected={setSelected}
            isSideBarOpen={isSideBarOpen}
          />

          <Option
            Icon={FiBarChart}
            title="Analytics"
            selected={selected}
            setSelected={setSelected}
            isSideBarOpen={isSideBarOpen}
          />

          <Option
            Icon={FiUsers}
            title="Members"
            selected={selected}
            setSelected={setSelected}
            isSideBarOpen={isSideBarOpen}
          />
        </div>

        <ToggleClose isSideBarOpen={isSideBarOpen} setIsSideBarOpen={setIsSideBarOpen} />
      </motion.nav>

      <div className="">
        <div
          className={`${
            isSideBarOpen &&
            "absolute top-0 left-0 z-50 md:hidden bg-black/50 w-full h-full"
          } `}
          onClick={() => setIsSideBarOpen(false)}
        />
        <motion.nav
          layout
          className="fixed top-0 h-screen shrink-0 border-r border-slate-300 bg-white p-2 md:hidden z-[100] w-3/5"
          style={{
            translateX: isSideBarOpen ? "0" : "-100%",
          }}
        >
          <div className="space-y-1">
            <NavItem
              icon={<LayoutDashboard className="h-5 w-5" />}
              label="Dashboard"
              active={activeSection === "dashboard"}
              onClick={() => setActiveSection("dashboard")}
            />
            <NavItem
              icon={<Users className="h-5 w-5" />}
              label="Contacts"
              active={activeSection === "contacts"}
              onClick={() => setActiveSection("contacts")}
            />
            <NavItem
              icon={<Key className="h-5 w-5" />}
              label="API Tokens"
              active={activeSection === "api-tokens"}
              onClick={() => setActiveSection("api-tokens")}
            />
            <NavItem
              icon={<MessageSquare className="h-5 w-5" />}
              label="SMS"
              active={activeSection === "sms"}
              onClick={() => setActiveSection("sms")}
              hasDropdown
            />
            <NavItem
              icon={<CheckSquare className="h-5 w-5" />}
              label="Verify"
              active={activeSection === "verify"}
              onClick={() => setActiveSection("verify")}
              hasDropdown
            />
            <NavItem
              icon={<MessageSquare className="h-5 w-5" />}
              label="Whatsapp"
              active={activeSection === "whatsapp"}
              onClick={() => setActiveSection("whatsapp")}
              hasDropdown
            />
            <NavItem
              icon={<Search className="h-5 w-5" />}
              label="Number Lookup"
              active={activeSection === "number-lookup"}
              onClick={() => setActiveSection("number-lookup")}
              hasDropdown
            />
            <NavItem
              icon={<MessageSquare className="h-5 w-5" />}
              label="Viber"
              active={activeSection === "viber"}
              onClick={() => setActiveSection("viber")}
              hasDropdown
            />
          </div>

          <ToggleClose isSideBarOpen={isSideBarOpen} setIsSideBarOpen={setIsSideBarOpen} />
        </motion.nav>
      </div>
    </div>
  );
};
export default Sidebar;

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
  hasDropdown?: boolean;
}

// NavItem component with TypeScript props
function NavItem({
  icon,
  label,
  active,
  onClick,
  hasDropdown = false,
}: NavItemProps): JSX.Element {
  return (
    <li>
      <button
        className={`flex items-center w-full px-4 py-2 text-left ${
          active ? "text-blue-600" : "text-gray-700"
        }`}
        onClick={onClick}
      >
        <span className="mr-3 text-gray-500">{icon}</span>
        <span className="flex-1">{label}</span>
        {hasDropdown && <ChevronDown className="h-4 w-4 text-gray-400" />}
      </button>
    </li>
  );
}
const Option = ({
  Icon,

  title,

  selected,

  setSelected,

  isSideBarOpen,

  notifs,
}: {
  Icon: IconType;

  title: string;

  selected: string;

  setSelected: Dispatch<SetStateAction<string>>;

  isSideBarOpen: boolean;

  notifs?: number;
}) => {
  return (
    <motion.button
      layout
      onClick={() => setSelected(title)}
      className={`relative flex h-10 w-full items-center rounded-md transition-colors ${
        selected === title
          ? "bg-indigo-100 text-indigo-800"
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
          className="text-xs font-medium"
        >
          {title}
        </motion.span>
      )}

      {notifs && isSideBarOpen && (
        <motion.span
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            opacity: 1,

            scale: 1,
          }}
          style={{ y: "-50%" }}
          transition={{ delay: 0.5 }}
          className="absolute right-2 top-1/2 size-4 rounded bg-indigo-500 text-xs text-white"
        >
          {notifs}
        </motion.span>
      )}
    </motion.button>
  );
};

const TitleSection = ({ isSideBarOpen }: { isSideBarOpen: boolean }) => {
  return (
    <div className="mb-3 border-b border-slate-300 pb-3">
      <div className="flex cursor-pointer items-center justify-between rounded-md transition-colors hover:bg-slate-100">
        <div className="flex items-center gap-2">
          <Logo />

          {isSideBarOpen && (
            <motion.div
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.125 }}
            >
              <span className="block text-xs font-semibold">TomIsLoading</span>

              <span className="block text-xs text-slate-500">Pro Plan</span>
            </motion.div>
          )}
        </div>

        {isSideBarOpen && <FiChevronDown className="mr-2" />}
      </div>
    </div>
  );
};

const Logo = () => {
  // Temp logo from https://logoipsum.com/

  return (
    <motion.div
      layout
      className="grid size-10 shrink-0 place-content-center rounded-md bg-indigo-600"
    >
      <svg
        width="24"
        height="auto"
        viewBox="0 0 50 39"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="fill-slate-50"
      >
        <path
          d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
          stopColor="#000000"
        ></path>

        <path
          d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
          stopColor="#000000"
        ></path>
      </svg>
    </motion.div>
  );
};

const ToggleClose = ({
  isSideBarOpen,

  setIsSideBarOpen,
}: {
  isSideBarOpen: boolean;

  setIsSideBarOpen: (value: boolean)=>void;
}) => {
  return (
    <motion.button
      layout
      onClick={() => setIsSideBarOpen(!isSideBarOpen)}
      className="absolute bottom-0 left-0 right-0 border-t border-slate-300 transition-colors hover:bg-slate-100"
    >
      <div className="flex items-center p-2">
        <motion.div
          layout
          className="grid size-10 place-content-center text-lg"
        >
          <FiChevronsRight
            className={`transition-transform ${isSideBarOpen && "rotate-180"}`}
          />
        </motion.div>

        {isSideBarOpen && (
          <motion.span
            layout
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.125 }}
            className="text-xs font-medium"
          >
            Hide
          </motion.span>
        )}
      </div>
    </motion.button>
  );
};

const ExampleContent = () => <div className="h-[200vh] w-full"></div>;
