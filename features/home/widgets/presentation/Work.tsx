"use client";
import { TabsContent } from "@/components/ui/tabs";
import { useTheme } from "next-themes";
import Link from "next/link";
import React, { useState, useCallback, useEffect } from "react";
import { FaGithub } from "react-icons/fa6";
import { Skeleton } from "@/components/ui/skeleton";
import { fetchPinnedReposAndContributions } from "../../actions/refchGithub";
import GitRepoCard from "../../components/GitRepoCard";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import BlogProjectCard from "../../components/BlogProjectCard";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { blogSites } from "@/lib/blogSitesMap";
import { PiCubeLight } from "react-icons/pi";
import { GithubRepo } from "../../types/githubResponse";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Work = () => {
  const { theme } = useTheme();
  const [loading, setLoading] = useState(true);
  const [fetching, setFetching] = useState(true);
  const [contributions, setContributions] = useState<any[]>([]);
  const [pinnedRepos, setPinnedRepos] = useState<GithubRepo[]>([]);
  const [showAll, setShowAll] = useState(false);
  const url = `https://jandee.vercel.app/devalentineomonya?theme=${theme}`;

  const handleIframeLoad = useCallback(() => {
    setLoading(false);
  }, []);

  useEffect(() => {
    setFetching(true);
    const fetchFromGithub = async () => {
      try {
        const { pinnedRepos, contributions } =
          (await fetchPinnedReposAndContributions()) || [];
        setPinnedRepos(pinnedRepos);
        setContributions(contributions);
      } catch (error) {
        console.error("Failed to fetch profile:", error);
      } finally {
        setFetching(false);
      }
    };

    fetchFromGithub();
  }, []);

  const displayedRepos = showAll ? pinnedRepos : pinnedRepos?.slice(0, 4);
  console.log({ pinnedRepos, contributions });
  return (
    <TabsContent value="work">
      <div className="flex items-center gap-x-3 my-8 text-xl font-medium">
        <FaGithub />
        <Link
          href="http://github.com/devalentineomonya"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </Link>
      </div>

      <div className="relative w-full h-28">
        {loading && <Skeleton className="absolute inset-0" />}
        <iframe
          suppressHydrationWarning
          onLoad={handleIframeLoad}
          className="w-full h-fit"
          src={url}
          title="Github Profile"
        />
      </div>

      <div className="py-4 flex items-center justify-between">
        <h3 className="text-sm text-foreground">
          Total
          <span className="text-base font-semibold mx-1">
            {pinnedRepos.length}
          </span>
          repositories
        </h3>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {fetching ? (
            <>
              <Skeleton className="inset-0 w-full h-28" />
              <Skeleton className="inset-0 w-full h-28" />
              <Skeleton className="inset-0 w-full h-28" />
              <Skeleton className="inset-0 w-full h-28" />
            </>
          ) : displayedRepos.length > 0 ? (
            displayedRepos.map((repo, index) => (
              <GitRepoCard key={index} repo={repo} />
            ))
          ) : (
            <div className="text-center col-span-2">No data available</div>
          )}
        </div>

        {contributions.length > 4 && (
          <div className="flex justify-center">
            <Button
              variant="outline"
              onClick={() => setShowAll(!showAll)}
              className="gap-2 bg-transparent py-0 h-7 border-gray-400 rounded-full text-xs"
            >
              {showAll ? (
                <>
                  Show Less <ChevronUp className="h-4 w-4" />
                </>
              ) : (
                <>
                  Show More <ChevronDown className="h-4 w-4" />
                </>
              )}
            </Button>
          </div>
        )}
      </div>
      <section className="mt-24">
        <div className="flex items-center gap-x-1 my-3 mb-6 text-xl font-medium">
          {blogSites.map((blogSite) => (
            <Badge
              key={blogSite.name}
              className="bg-transparent shadow-transparent text-sm text-gray-500  dark:text-white border hover:bg-transparent min-w-28 flex-shrink-0 flex items-center gap-x-3  py-1 min-h-8 max-h-8 cursor-pointer"
            >
              <Image
                width={24}
                height={24}
                src={blogSite.icon}
                alt={blogSite.name}
              />
              <span>{blogSite.name}</span>
            </Badge>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-4 ">
          <BlogProjectCard />
          <BlogProjectCard />
          <BlogProjectCard />
          <BlogProjectCard />
          <BlogProjectCard />
          <BlogProjectCard />
        </div>
      </section>
      <section className="mt-24">
        <div className="flex items-center gap-x-1 my-3 mb-6 text-xl font-medium">
          <Badge className="bg-transparent shadow-transparent text-lg text-foreground border hover:bg-transparent min-w-28 flex-shrink-0 flex items-center gap-x-3  py-1 min-h-8 max-h-8 cursor-pointer">
            <PiCubeLight size={24} />
            <span>Projects</span>
          </Badge>
        </div>
        <div className="grid grid-cols-2 gap-4 ">
          <BlogProjectCard />
          <BlogProjectCard />
          <BlogProjectCard />
          <BlogProjectCard />
          <BlogProjectCard />
          <BlogProjectCard />
        </div>
      </section>
    </TabsContent>
  );
};

export default Work;
