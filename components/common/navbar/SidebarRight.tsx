import React from "react";
import Image from "next/image";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const SidebarRight = () => {
  return (
    <Sidebar side="right" className="bg-background hidden">
      <SidebarHeader className="border-b p-2.5">
        <div className="flex items-center justify-center gap-x-4">
          <Button variant="default" className="bg-primary">
            Create Account
          </Button>
          <Button variant="outline">Login</Button>
        </div>
      </SidebarHeader>
      <SidebarContent className="pt-12 px-4">
        <div
          className="relative flex flex-col gap-4 rounded-xl bg-background bg-[linear-gradient(204deg,rgba(209,213,218,0.70)0%,rgba(255,255,255,0.00)50.85%)]
         dark:bg-gray-00 dark:bg-[linear-gradient(204deg,rgba(209,213,218,0.40)0%,rgba(23,23,23,0.00)50.85%)] p-4 border border-gray-200 dark:border-gray-800"
        >
          <div className="flex items-center justify-between">
            <div className="flex gap-2 items-center">
              <span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 12C9.26747 12 12 9.363 12 3C12 9.363 14.7134 12 21 12C14.7134 12 12 14.7134 12 21C12 14.7134 9.26747 12 3 12Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                    vectorEffect="non-scaling-stroke"
                  ></path>
                </svg>
              </span>
              <p className="text-gray-950 dark:text-gray-200 font-semibold text-sm ">
                Profile Highlights
              </p>
            </div>
          </div>
          <div
            className="h-0 overflow-hidden transition-[height] duration-300 ease-in-out"
            style={{ height: 136 }}
          >
            <ul
              className="text-xs text-gray-500 list-disc h-fit bg-white bg-[linear-gradient(204deg,rgba(209,213,218,0.70)0%,rgba(255,255,255,0.00)50.85%)]
             dark:bg-gray-00 dark:bg-[linear-gradient(204deg,rgba(209,213,218,0.40)0%,rgba(23,23,23,0.00)50.85%)]"
              style={{ backgroundClip: "text" }}
            >
              <li className="text-gray-800 dark:text-gray-400 font-normal text-sm !leading-5 mb-2">
                Currently works at
                <span className="items-center whitespace-pre-wrap">
                  <Image
                    src="/python.svg"
                    alt="company logo"
                    width={16}
                    height={16}
                    className="w-4 h-4 rounded-full border-2 border-gray-00 inline-block mr-1 mb-0.5"
                  />
                  <span
                    className="text-gray-800 dark:text-gray-400 font-semibold text-sm "
                    style={{}}
                  >
                    Your Brand Mate
                  </span>
                </span>
                as a Full Stack Engineer Intern since about 2 months.
              </li>
              <li className="text-gray-800 dark:text-gray-400 font-normal text-sm !leading-5 mb-2">
                Previously worked at
                <span className="items-center whitespace-pre-wrap">
                  <span className="text-gray-800 dark:text-gray-400 font-semibold text-sm ">
                    tracksandtowers
                  </span>
                </span>
                .
              </li>
              <li
                className="text-gray-800 dark:text-gray-400 font-normal text-sm !leading-5 mb-2"
                style={{}}
              >
                Launched <strong>5 projects </strong>on Launchpad.
              </li>
            </ul>
          </div>
          <div className="flex items-center justify-center">
            <Avatar className="w-14 h-14">
              <AvatarImage src="https://github.com/account" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
          <div className="flex flex-col items-center justify-center gap-y-2">
            <h3 className="text-gray-950 dark:text-gray-200 font-semibold text-base text-center">
              Thank you for visiting my portfolio
            </h3>
            <p className="text-gray-800 dark:text-gray-400 font-normal text-sm text-center">
              If you have a comment, notice or advice, kindly login or create an
              account and share your thoughts.
            </p>
            <Button variant="default" className="bg-primary">
              Create Account
            </Button>
          </div>
        </div>
      </SidebarContent>
    </Sidebar>
  );
};

export default SidebarRight;
