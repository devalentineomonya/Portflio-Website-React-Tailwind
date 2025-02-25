import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";

const SidebarRight = () => {
  return (
    <Sidebar side="right" className="bg-background">
      <SidebarHeader className="border-b py-4">
        <div className="flex items-center justify-center gap-x-4">
          <Button>H</Button>
          <Button>H</Button>
        </div>
      </SidebarHeader>
      <SidebarContent className="pt-12 px-4">
        <div className="w-full bg-red-500 h-72 rounded-lg">

        </div>
      </SidebarContent>
    </Sidebar>
  );
};

export default SidebarRight;
