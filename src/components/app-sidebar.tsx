"use client";

import * as React from "react";
import {
  Folders,
  GalleryHorizontalEnd,
  LucideIcon,
  UsersRound,
  Contact,
  Inbox,
  LayoutDashboard,
  Pill,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { UserRole } from "@/generated/prisma";

export function AppSidebar({
  role,
  ...props
}: React.ComponentProps<typeof Sidebar> & {
  role: UserRole;
}) {
  let links: {
    title: string;
    url: string;
    icon?: LucideIcon;
    isActive?: boolean;
    items?: {
      title: string;
      url: string;
    }[];
  }[] = [];
  switch (role) {
    case "ADMIN":
      links = [
        {
          title: "Dashboard",
          url: "/admin/dashboard",
          icon: LayoutDashboard,
        },
        {
          title: "utilisateurs",
          url: "/admin/users",
          icon: UsersRound,
        },
        {
          title: "Services",
          url: "/admin/services",
          icon: Inbox,
        },
        {
          title: "Fournisseurs",
          url: "/admin/suppliers",
          icon: Contact,
        },
        {
          title: "Classes Thérapeutiques",
          url: "/admin/therapeutic-classes",
          icon: Folders,
        },
        {
          title: "Sous classes",
          url: "/admin/subclasses",
          icon: GalleryHorizontalEnd,
        },
      ];
      break;
    case "PHARMACIST":
      links = [
        {
          title: "Dashboard",
          url: "/pharmacist/dashboard",
          icon: LayoutDashboard,
        },
        {
          title: "Classes Thérapeutiques",
          url: "/pharmacist/therapeutic-classes",
          icon: UsersRound,
        },
      ];
      break;
    case "SERVICE_COORDINATOR":
      links = [
        {
          title: "Dashboard",
          url: "/service-coordinator/dashboard",
          icon: LayoutDashboard,
        },
        {
          title: "Utilisateurs",
          url: "/service-coordinator/users",
          icon: UsersRound,
        },
        {
          title: "Services",
          url: "/service-coordinator/services",
          icon: Inbox,
        },
        {
          title: "Fournisseurs",
          url: "/service-coordinator/suppliers",
          icon: Contact,
        },
      ];
      break;
    case "ORDER_PREPARER":
      links = [
        {
          title: "Dashboard",
          url: "/order-preparer/dashboard",
          icon: LayoutDashboard,
        },
        {
          title: "Utilisateurs",
          url: "/order-preparer/users",
          icon: UsersRound,
        },
        {
          title: "Services",
          url: "/order-preparer/services",
          icon: Inbox,
        },
        {
          title: "Fournisseurs",
          url: "/order-preparer/suppliers",
          icon: Contact,
        },
      ];
      break;
    default:
      links = [];
      break;
  }

  let roleLabel: string;
  switch (role) {
    case "ADMIN":
      roleLabel = "Administrateur";
      break;
    case "PHARMACIST":
      roleLabel = "Pharmacien";
      break;
    case "SERVICE_COORDINATOR":
      roleLabel = "Coordinateur de service";
      break;
    case "ORDER_PREPARER":
      roleLabel = "Préparateur de commande";
      break;
    default:
      roleLabel = "Utilisateur";
      break;
  }
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className="group-data-[collapsible=icon]:hidden">
        <div className="relative overflow-hidden px-3 py-2.5 rounded-md bg-gradient-to-br from-blue-600 to-blue-700 flex items-center gap-6 text-xl text-white font-medium shadow-md">
          <div className="absolute -top-6 -right-6 w-20 aspect-square rounded-full bg-blue-500/40" />
          <div className="absolute -bottom-6 -right-6 w-16 aspect-square rounded-full bg-blue-500/50" />
          <div className="bg-blue-800 p-2 rounded-md shadow-inner">
            <Pill size={20} className="text-white" />
          </div>
          <div className="relative z-10 flex flex-col">
            <span className="leading-5 text-lg font-semibold">CHU PHARM</span>
            <span className="text-sm text-white/90 font-normal">
              {roleLabel}
            </span>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <NavMain items={links} />
      </SidebarContent>

      <SidebarFooter>
        <SidebarSeparator className="my-2" />
        <div className="px-4 py-2 text-sm text-gray-500 group-data-[collapsible=icon]:hidden">
          © {new Date().getFullYear()} CHU PHARM
        </div>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  );
}
