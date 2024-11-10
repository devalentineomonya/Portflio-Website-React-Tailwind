"use client"
import React from 'react'
import { SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarMenuBadge } from '@/components/ui/sidebar'
import { navbarItems } from './navbarItems'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
const SidebarLeftNavigation = () => {
    const pathName = usePathname()
    console.log(pathName)

  return (
    <SidebarContent>
    {navbarItems.map((navbarItem) => (
      <SidebarGroup key={navbarItem.name}>
        <SidebarGroupLabel>{navbarItem.name}</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            {navbarItem.items?.map((item) => (
              <SidebarMenuItem className='flex items-center' key={item.name}>
                <SidebarMenuButton
                  className={cn("rounded-md gap-3 flex items-center p-2.5 py-1.5 transition-all hover:border min-h-10 text-gray-400 hover:text-white", {
                    " bg-sidebar-accent": pathName === item.link,
                    "shadow-sm shadow-gray-700": pathName === item.link,
                  })}
                  asChild
                >
                  <Link href={item.link}>
                    <item.icon />
                    <span>{item.name}</span>
                  </Link>
                </SidebarMenuButton>
                <SidebarMenuBadge className='text-center border border-gray-600 hover:border-white text-gray-400 hover:text-white mt-1'>23</SidebarMenuBadge>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    ))}
  </SidebarContent>
  )
}

export default SidebarLeftNavigation