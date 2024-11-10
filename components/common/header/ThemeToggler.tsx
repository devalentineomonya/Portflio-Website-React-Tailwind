"use client";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import React from "react";
import { IoIosMoon } from "react-icons/io";
import { IoSunnySharp } from "react-icons/io5";
const ThemeToggler = () => {
  const { setTheme, theme } = useTheme();
  return (
    <Button
      variant="outline"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2aspect-square rounded-full border border-gray-400 box-border relative overflow-hidden transition-all duration-300 ease-in-out"
    >
      <IoSunnySharp
        className="absolute transform transition-all duration-500 ease-in-out dark:translate-y-0 dark:rotate-0 translate-y-10 rotate-180"
      />
      <IoIosMoon
        className="absolute transform transition-all duration-500 ease-in-out dark:translate-y-10 dark:rotate-180 translate-y-0 rotate-0"
      />
    </Button>
  );
};

export default ThemeToggler;
