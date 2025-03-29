"use client";
import { type ReactNode, createContext, useRef, useContext } from "react";
import { useStore } from "zustand";

import {
  type SideBarOpenStore,
  createSideBarOpenStore,
} from "@/stores/sidebar-store";

export type SideBarStoreApi = ReturnType<typeof createSideBarOpenStore>;

export const SideBarStoreContext = createContext<SideBarStoreApi | null>(null);

export interface SideBarStoreProviderProps {
  children: ReactNode;
}

export const SideBarStoreProvider = ({
  children,
}: SideBarStoreProviderProps) => {
  const storeRef = useRef<SideBarStoreApi | null>(null);
  if (storeRef.current === null) {
    storeRef.current = createSideBarOpenStore();
  }
  return (
    <SideBarStoreContext.Provider value={storeRef.current}>
      {children}
    </SideBarStoreContext.Provider>
  );
};

export const useSideBarStore = <T,>(
  selector: (store: SideBarOpenStore) => T
): T => {
  const sidebarStoreContext = useContext(SideBarStoreContext);

  if (!sidebarStoreContext) {
    throw new Error(
      "useSideBarStore must be used within a SideBarStoreProvider"
    );
  }

  return useStore(sidebarStoreContext, selector);
};
