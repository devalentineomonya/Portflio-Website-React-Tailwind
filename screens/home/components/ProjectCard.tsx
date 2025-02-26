import React from "react";
import Image from "next/image";
import { IoBookmarkOutline } from "react-icons/io5";
import { BiComment } from "react-icons/bi";
import { AiOutlineTag } from "react-icons/ai";
import { Card, CardContent } from "@/components/ui/card";
import { PiArrowFatUpFill } from "react-icons/pi";
import project1 from "@/public/project1.png";
const ProjectCard = () => {
  return (
    <Card className="border-none shadow-none hover:bg-gray-50 dark:hover:bg-gray-900/40 transition-all duration-300">
      <CardContent className="p-3">
        <div className="flex items-center justify-between gap-x-3 h-full">
          <Image
            src={project1}
            className=" min-w-32 rounded-md aspect-video bg-red-500"
            alt="Project 1"
            width={100}
            height={100}
          />
          <div className="flex flex-1 justify-start items-start flex-col">
            <h3 className="text-base font-medium">Project 1</h3>
            <p className="text-sm text-gray-500">Project Description</p>
            <div className="flex items-center gap-x-2 mt-2">
              <div className="flex items-center gap-x-1">
                <IoBookmarkOutline size={14} />
                <span className="text-[10px] text-gray-500">100</span>
              </div>
              <div className="flex items-center gap-x-1">
                <BiComment size={14} />
                <span className="text-[10px] text-gray-500">100</span>
              </div>
              <div className="flex items-center gap-x-1">
                <AiOutlineTag size={16} />
                <span className="text-[10px] text-gray-500">100</span>
              </div>
            </div>
          </div>
          <div className="rounded-md bg-gray-200/50 dark:bg-gray-800/50  text-green-500 border border-green-500 px-3 py-1 h-[54px] grid place-items-center">
            <PiArrowFatUpFill size={18} />
            <span className="text-sm font-medium">100</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
