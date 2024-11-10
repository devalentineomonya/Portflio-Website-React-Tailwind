import React from "react";
import { Sidebar } from "@/components/ui/sidebar";
import SideBarLeftHeader from "./SideBarLeftHeader";
import SidebarLeftNavigation from "./SidebarLeftNavigation";
import SidebarLeftFooter from "./SidebarLeftFooter";
const SidebarLeft = () => {
  return (
    <Sidebar className="bg-slate-900/60">
      <SideBarLeftHeader />
      <SidebarLeftNavigation />
      <SidebarLeftFooter />
    </Sidebar>
  );
};

export default SidebarLeft;
