"use client";
import React from "react";
import {
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuBadge,
} from "@/components/ui/sidebar";
import { navbarItems } from "./navbarItems";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { GoArrowUpRight } from "react-icons/go";

const SidebarLeftNavigation = () => {
  const pathName = usePathname();
  console.log(pathName);

  return (
    <SidebarContent>
      {navbarItems.map((navbarItem) => (
        <SidebarGroup key={navbarItem.name}>
          <SidebarGroupLabel>{navbarItem.name}</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navbarItem.items?.map((item) => (
                <SidebarMenuItem className="flex items-center" key={item.name}>
                  <SidebarMenuButton
                    className={cn(
                      "rounded-md   gap-3 flex items-center p-2.5  transition-all hover:border text-gray-600 dark:text-gray-300 hover:text-foreground/80",
                      {
                        " bg-primary-foreground text-foreground font-semibold border-2 border-border":
                          pathName === item.link,
                      }
                    )}
                    asChild
                  >
                    <Link
                      target={item.count === null ? "_blank" : undefined}
                      href={item.link}
                    >
                      <item.icon />
                      <span>{item.name}</span>
                    </Link>
                  </SidebarMenuButton>
                  {item.count !== null ? (
                    <SidebarMenuBadge
                      className={cn(
                        "text-center border border-border text-gray-600 dark:text-gray-300 hover:text-white",
                        { "border-transparent": pathName === item.link }
                      )}
                    >
                      {item.count}
                    </SidebarMenuBadge>
                  ) : (
                    <SidebarMenuBadge
                      className={cn(
                        "text-center border border-border text-gray-600 dark:text-gray-300 hover:text-white"
                      )}
                    >
                      <GoArrowUpRight />
                    </SidebarMenuBadge>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      ))}
    </SidebarContent>
  );
};

export default SidebarLeftNavigation;
