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
import { GithubRepo } from "../types/githubResponse";
const GitRepoCard = ({ repo }: { repo: GithubRepo }) => {
  const description = repo.description;
  return (
    <Link href={repo.url} target="_blank" >
      <Card className="px-3 py-2 flex flex-col justify-between flex-1 group border border-border hover:shadow-lg rounded-xl overflow-hidden outline-none focus-within:border-green-light transition-all min-h-24">
        <CardHeader className="p-0">
          <h1 className="text-sm text-foreground font-medium truncate ">
            {repo.nameWithOwner}
          </h1>
        </CardHeader>
        <CardContent className="p-0">
          <div className="flex gap-2 items-center my-2">
            <span className="text-xs text-gray-800 dark:text-gray-300">
              {description?.length > 95
                ? `${description.slice(0, 95)}...`
                : description}
            </span>
          </div>
        </CardContent>
        <CardFooter className="p-0 text-[10px]">
          <div className="flex items-center gap-x-1">
            {repo.languages.nodes.map((language) => {
              const techStack = techStacks.find(
                (stack) => stack.name.toLowerCase() === language.name.toLowerCase()
              );
              return techStack ? (
                <>
                  <Image
                    key={language.name}
                    src={techStack.icon}
                    alt={techStack.name}
                    width={12}
                    height={12}
                  />
                  <p className=" text-gray-500 dark:text-gray-400 truncate">
                    {techStack.name}
                  </p>
                </>
              ) : null;
            })}
          </div>
          <div className="flex items-center gap-x-0.5">
            <CiStar size={12} className="text-foreground ml-2" />
            <span className=" text-gray-500 dark:text-gray-400 ">
              {repo.stargazers.totalCount}
            </span>
          </div>
          {repo.forkCount && (
            <div className="flex items-center gap-x-0.5">
              <GoRepoForked size={14} className="text-foreground ml-2" />
              <span className=" text-gray-500 dark:text-gray-400 ">
                {repo.forkCount}
              </span>
            </div>
          )}
        </CardFooter>
      </Card>
    </Link>
  );
};

export default GitRepoCard;
