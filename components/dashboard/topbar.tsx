"use client";
import { Menu } from "lucide-react";
import React from "react";
import { useSideBarStore } from "@/providers/sidebar-store-provider";

const DashboardTopbar = () => {
  const { isSideBarOpen, setIsSideBarOpen } = useSideBarStore((state) => state);

  return (
    <div className="h-10 w-full py-2.5 px-4">
      <Menu
        width={20}
        height={20}
        onClick={() => setIsSideBarOpen(!isSideBarOpen)}
      />
    </div>
  );
};

export default DashboardTopbar;
