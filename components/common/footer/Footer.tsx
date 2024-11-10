import React from "react";
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { navbarItems } from "../navbar/navbarItems";
const Footer = () => {
  return (
    <footer className="w-full p-4 pb-24 bg-gray-900/60 pt-24 flex flex-col justify-center">
      <NavigationMenu className="grid grid-cols-3 justify-center  items-start w-full max-w-full border-t-2 ">
        {navbarItems.map((item) => (
          <div key={item.name} className="w-full mx-auto">
            <p className="mt-5 font-semibold">{item.name || "Index"}</p>
            {item.items.slice(0, 6).map((subItem) => (
              <NavigationMenuList className="flex justify-start  items-start w-full text-gray-500 text-sm my-2" key={subItem.name}>
                <NavigationMenuLink href={subItem.link} target="_blank">
                  {subItem.name}
                </NavigationMenuLink>
              </NavigationMenuList>
            ))}
            
          </div>
        ))}
      </NavigationMenu>
      <div className="grid grid-cols-2 gap-x-3">
        <div className="border-t-2"></div>
        <div className="border-t-2"></div>
      </div>
    </footer>
  );
};

export default Footer;
