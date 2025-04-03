import { Dispatch, SetStateAction } from "react";
import { IconType } from "react-icons";

export interface OptionProps {
  navItem: NavItem;
  selected: { main: string; sub: string | null };
  setSelected: Dispatch<SetStateAction<{ main: string; sub: string | null }>>;
  isSideBarOpen: boolean;
  activeDropdown: string | null;
  setActiveDropdown: Dispatch<SetStateAction<string | null>>;
  onClick: (item: NavItem) => void;
  router: any;
  setIsSideBarOpen?: (value: boolean) => void;
}
export interface SubNavItem {
  id: string;
  title: string;
  path: string;
  Icon: IconType;
}

export interface NavItem {
  id: string;
  title: string;
  path: string;
  Icon: IconType;
  subItems?: SubNavItem[];
}
