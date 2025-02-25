import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { AvatarFallback, AvatarImage, Avatar } from "@/components/ui/avatar";
import { MdVerified } from "react-icons/md";
import { FiLink } from "react-icons/fi";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { techStacks } from "../../../../lib/techStackIconsMap";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Profile = () => {
  return (
    <Card className="py-10 rounded-none border-none bg-transparent  shadow-none">
      <CardContent className="flex flex-col items-center justify-center">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Avatar className="w-28 h-28">
                <AvatarImage src="https://github.com/account" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </TooltipTrigger>
            <TooltipContent>
              <p>Click to view gallery</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <div className="flex items-center gap-x-1">
          <h1 className="font-semibold text-xl mt-4 mb-1">Valentine Omonya</h1>
          <MdVerified className="text-foreground" />
        </div>
        <p className="text-gray-600 dark:text-gray-200 text-center mb-1">Software Engineer</p>
        <div className="flex items-center gap-x-4 text-xs my-2">
          <p>Junior Engineer</p>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Link
                  href="/"
                  className="flex items-center gap-x-1 hover:underline"
                >
                  <FiLink />
                  Read Resume
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>Download or read my resume</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <div className="flex  justify-center flex-wrap gap-3 mt-5">
          {techStacks.map((techStack) => (
            <Badge
              className="min-w-32 flex-shrink-0 flex items-center gap-x-3  py-1 min-h-8 max-h-8 hover:bg-background/80 cursor-pointer"
              variant="outline"
              key={techStack.name}
            >
              <Image
                width={20}
                height={20}
                src={techStack.icon}
                alt={techStack.name}
              />
              <span>{techStack.name}</span>
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Profile;
