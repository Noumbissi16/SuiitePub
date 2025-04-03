import { createStore } from "zustand/vanilla";

export type SideBarOpenState = {
  isSideBarOpen: boolean;
};

export type SideBarOpenActions = {
  setIsSideBarOpen: (isOpen: boolean) => void;
};

export type SideBarOpenStore = SideBarOpenState & SideBarOpenActions;

export const defaultInitState: SideBarOpenState = {
  isSideBarOpen: false,
};

export const createSideBarOpenStore = (
  initState: SideBarOpenState = defaultInitState
) => {
  return createStore<SideBarOpenStore>((set) => ({
    ...initState,
    setIsSideBarOpen: (isOpen: boolean) => set({ isSideBarOpen: isOpen }),
  }));
};
