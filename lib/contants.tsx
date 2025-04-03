import {
  LayoutDashboard,
  Lightbulb,
  Grid2x2Check,
  Settings,
  MessageCircle,
  Key,
} from "lucide-react";
import { NavItem } from "@/components/dashboard/types";
import { FaWhatsapp } from "react-icons/fa";

// Main navigation structure
export const NAVIGATION_ITEMS: NavItem[] = [
  {
    id: "dashboard",
    title: "Dashboard",
    path: "/dashboard",
    Icon: LayoutDashboard,
  },
  {
    id: "api-tokens",
    title: "API Tokens",
    path: "/api-tokens",
    Icon: Key,
  },
  {
    id: "whatsapp",
    title: "Whatsapp",
    path: " ",
    Icon: MessageCircle,
    subItems: [
      {
        id: "whatsapp-meta-get-started",
        title: "Get Started",
        path: "/whatsapp-meta/getting-started",
        Icon: Lightbulb,
      },
      {
        id: "whatsapp-meta-template",
        title: "Templates",
        path: "/whatsapp-meta/template",
        Icon: Grid2x2Check,
      },
      {
        id: "whatsapp-meta-settings",
        title: "Settings",
        path: "/whatsapp-meta/settings",
        Icon: Settings,
      },
      {
        id: "whatsapp-meta-numbers",
        title: "Numbers",
        path: "/whatsapp-meta/numbers",
        Icon: Settings,
      },
    ],
  },
  {
    id: "sms",
    title: "SMS",
    path: " ",
    Icon: FaWhatsapp,
    subItems: [
      {
        id: "sms-get-started",
        title: "Get Started",
        path: "/sms/getting-started",
        Icon: Lightbulb,
      },
      {
        id: "sms-template",
        title: "Templates",
        path: "/sms/template",
        Icon: Grid2x2Check,
      },
      {
        id: "sms-settings",
        title: "Settings",
        path: "/sms/settings",
        Icon: Settings,
      },
      {
        id: "sms-numbers",
        title: "Numbers",
        path: "/sms/numbers",
        Icon: Settings,
      },
    ],
  },
];

// Function to find a nav item by its ID
// export const findNavItemById = (id: string): NavItem | undefined => {
//   // First check top-level items
//   const topLevelItem = NAVIGATION_ITEMS.find((item) => item.id === id);
//   if (topLevelItem) return topLevelItem;

//   // Then check sub-items
//   for (const item of NAVIGATION_ITEMS) {
//     if (item.subItems) {
//       const subItem = item.subItems.find((sub) => sub.id === id);
//       if (subItem) {
//         return {
//           ...item,
//           subItems: [subItem],
//         };
//       }
//     }
//   }

//   return undefined;
// };

// // Function to get all possible paths
// export const getAllPaths = (): string[] => {
//   const paths: string[] = [];

//   NAVIGATION_ITEMS.forEach((item) => {
//     paths.push(item.path);

//     if (item.subItems) {
//       item.subItems.forEach((subItem) => {
//         paths.push(subItem.path);
//       });
//     }
//   });

//   return paths;
// };
