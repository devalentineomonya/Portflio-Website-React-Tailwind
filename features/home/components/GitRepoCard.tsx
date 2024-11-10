import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Link from "next/link";
import React from "react";
import { techStacks } from "@/lib/techStackIconsMap";
import Image from "next/image";
import { CiStar } from "react-icons/ci";
import { GoRepoForked } from "react-icons/go";
const GitRepoCard = () => {
  const description =
    "This is a description of the project Elit est ex id nulla cillum velit nulla sit excepteur incididunt consequat eu laboris do. Ullamco id quis nostrud non laboris mollit duis. Nisi irure officia proident aliqua officia.";
  return (
    <Link href="/">
      <Card
        className="p-4 bg-transparent flex flex-col justify-between flex-1
       group border border-gray-700 hover:shadow-md hover:shadow-gray-700 rounded-md overflow-hidden
        outline-none focus-within:border-gray-300 transition-all"
      >
        <CardHeader className="p-0">
          <h1 className="text-sm text-white font-medium truncate ">
            Git Repo Card
          </h1>
        </CardHeader>
        <CardContent className="p-0">
          <div className="flex gap-2 items-center my-2">
            <span className="text-xs text-gray-300">
              {description?.length > 95
                ? `${description.slice(0, 95)}...`
                : description}
            </span>
          </div>
        </CardContent>
        <CardFooter className="p-0">
          <div className="flex items-center gap-x-3">
            <Image
              src={techStacks[0].icon}
              alt={techStacks[0].name}
              width={20}
              height={20}
            />
            <p className="text-xs text-gray-400 truncate">
              {techStacks[0].name}
            </p>
          </div>
          <div className="flex items-center gap-x-0.5">
            <CiStar className="text-white ml-2" />
            <span className="text-xs text-gray-400"> 100</span>
          </div>
          <div className="flex items-center gap-x-0.5">
            <GoRepoForked size={12} className="text-white ml-2" />
            <span className="text-xs text-gray-400"> 100</span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default GitRepoCard;
