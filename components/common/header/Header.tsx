import React from "react";
import { MdVerified } from "react-icons/md";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { FaRegCommentDots } from "react-icons/fa6";
import { LiaExternalLinkAltSolid } from "react-icons/lia";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ThemeToggler from "./ThemeToggler";
import { Caveat } from "next/font/google";
const caveat = Caveat({
  subsets: ["latin"],
  display: "swap",
});
const Header = () => {
  return (
    <header className="border-b py-2 px-4 flex justify-between items-center sticky top-0 z-10 backdrop-blur">
      <div className="flex items-center gap-x-6">
        <div className="relative max-w-5">
          <Avatar className="h-10 w-10 shrink-0 overflow-hidden">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <MdVerified className="text-foreground absolute -bottom-1 -right-6 z-10" />
        </div>
        <h2
          className={`font-semibold text-3xl ${caveat.className} ${caveat.style}`}
        >
          Devalentine
        </h2>
      </div>
      <div className="flex items-center gap-x-2">
        <ThemeToggler />
        <Button
          variant="outline"
          className="h-8 px-2 rounded-md border border-gray-400 box-border"
        >
          <FaRegCommentDots />
        </Button>
        <Button
          size="sm"
          className="rounded-md px-1 flex items-center gap-x-4 py-1 px-2"
        >
          <Link href="mailto:valomosh254@gmail.com?subject=Job%20Opportunity&body=Hi%20Valentine%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20was%20impressed%20by%20your%20work.%20We%20have%20an%20exciting%20opportunity%20that%20matches%20your%20skills.%20Would%20you%20be%20interested%20in%20discussing%20this%20further%3F%0A%0ABest%20regards">
            Mail
          </Link>
          <LiaExternalLinkAltSolid size={16} />
        </Button>
      </div>
    </header>
  );
};

export default Header;
