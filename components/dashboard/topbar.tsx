"use client";
import { PanelRightOpen, PanelLeftOpen } from "lucide-react";
import React from "react";
import { useSideBarStore } from "@/providers/sidebar-store-provider";

const DashboardTopbar = () => {
  const { isSideBarOpen, setIsSideBarOpen } = useSideBarStore((state) => state);

  return (
    <div className="h-16 flex items-center justify-between border-b border-slate-300 bg-white w-full py-2.5 px-12 max-md:px-6">
      <div className="flex items-center cursor-pointer h-6 w-6 justify-center">
        {isSideBarOpen ? (
          <PanelLeftOpen
            className="w-full h-full"
            onClick={() => setIsSideBarOpen(!isSideBarOpen)}
          />
        ) : (
          <PanelRightOpen
            className="w-full h-full"
            onClick={() => setIsSideBarOpen(!isSideBarOpen)}
          />
        )}
      </div>
      <div className="flex h-full items-center gap-2">
        <div></div>
        <div className="h-full border-1 border-slate-300" />
        <div className="text-xl w-10 h-10 flex items-center justify-center rounded-full bg-blue-800 text-white">
          S
        </div>
      </div>
    </div>
  );
};

export default DashboardTopbar;
