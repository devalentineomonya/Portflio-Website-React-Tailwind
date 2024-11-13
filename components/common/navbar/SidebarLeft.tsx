import React from "react";
import { Sidebar } from "@/components/ui/sidebar";
import SideBarLeftHeader from "./SideBarLeftHeader";
import SidebarLeftNavigation from "./SidebarLeftNavigation";
import SidebarLeftFooter from "./SidebarLeftFooter";
const SidebarLeft = () => {
  return (
    <Sidebar className="bg-background">
      <SideBarLeftHeader />
      <SidebarLeftNavigation />
      <SidebarLeftFooter />
    </Sidebar>
  );
};

export default SidebarLeft;
