"use client";
import { TabsContent } from "@/components/ui/tabs";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa6";
import { Skeleton } from "@/components/ui/skeleton";
import {
  fetchAllPublicRepositories,
  fetchPinnedReposAndContributions,
} from "../../actions/refchGithub";
import GitRepoCard from "../../components/GitRepoCard";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import BlogProjectCard from "../../components/BlogProjectCard";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { blogSites } from "@/lib/blogSitesMap";
import { PiCubeLight } from "react-icons/pi";
import { ContributionData, GithubRepo } from "../../types/githubResponse";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ContributionHeatmap from "../../components/ContributionHeatmap";

const Work = () => {
  const [fetching, setFetching] = useState(true);
  const [fetchingAllRepos, setFetchingAllRepos] = useState(false);
  const [contributions, setContributions] = useState<ContributionData | null>(
    null
  );
  const [pinnedRepos, setPinnedRepos] = useState<GithubRepo[]>([]);
  const [allRepositories, setAllRepositories] = useState<GithubRepo[]>([]);
  const [showAll, setShowAll] = useState(false);
  const [viewType, setViewType] = useState<"pinned" | "all">("pinned");

  // Fetch pinned repos and contributions on initial load
  useEffect(() => {
    const fetchInitialData = async () => {
      setFetching(true);
      try {
        const result = await fetchPinnedReposAndContributions();
        if (result) {
          setPinnedRepos(result.pinnedRepos);
          setContributions(result.contributions);
        }
      } catch (error) {
        console.error("Failed to fetch profile:", error);
      } finally {
        setFetching(false);
      }
    };

    fetchInitialData();
  }, []);

  // Fetch all repositories when switching to 'all' view
  useEffect(() => {
    if (viewType === "all" && allRepositories.length === 0) {
      const fetchAllRepos = async () => {
        setFetchingAllRepos(true);
        try {
          const repositories = await fetchAllPublicRepositories();
          if (repositories) {
            setAllRepositories(repositories);
          }
        } catch (error) {
          console.error("Failed to fetch all repositories:", error);
        } finally {
          setFetchingAllRepos(false);
        }
      };

      fetchAllRepos();
    }
  }, [viewType, allRepositories.length]);
  console.log(allRepositories);

  const currentRepos = viewType === "pinned" ? pinnedRepos : allRepositories;
  const displayedRepos = showAll ? currentRepos : currentRepos?.slice(0, 4);
  const isLoading = fetching || (viewType === "all" && fetchingAllRepos);

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
      {isLoading ? (
        <Skeleton className="inset-0 w-full h-28" />
      ) : (
        <ContributionHeatmap data={contributions} />
      )}

      <div className="py-4 flex items-center justify-between">
        <h3 className="text-sm text-foreground">
          Total
          <span className="text-base font-semibold mx-1">
            {viewType === "pinned"
              ? pinnedRepos.length
              : allRepositories.length}
          </span>
          repositories
        </h3>
        <div className="flex gap-4">
          <Select
            value={viewType}
            onValueChange={(value: "pinned" | "all") => {
              setViewType(value);
              setShowAll(false);
            }}
          >
            <SelectTrigger className="w-[180px] py-0">
              <SelectValue className="h-6" placeholder="Repository View">
                {viewType === "pinned"
                  ? "Pinned Repositories"
                  : "All Repositories"}
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="pinned">Pinned Repositories</SelectItem>
              <SelectItem value="all">All Repositories</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {isLoading ? (
            <>
              <Skeleton className="inset-0 w-full h-28" />
              <Skeleton className="inset-0 w-full h-28" />
              <Skeleton className="inset-0 w-full h-28" />
              <Skeleton className="inset-0 w-full h-28" />
            </>
          ) : displayedRepos?.length > 0 ? (
            displayedRepos.map((repo) => (
              <GitRepoCard key={repo.id} repo={repo} />
            ))
          ) : (
            <div className="text-center col-span-2">
              No repositories available
            </div>
          )}
        </div>

        {currentRepos?.length > 4 && (
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
              className="bg-transparent shadow-transparent text-sm text-gray-500 dark:text-white border hover:bg-transparent min-w-28 flex-shrink-0 flex items-center gap-x-3 py-1 min-h-8 max-h-8 cursor-pointer"
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
        <div className="grid grid-cols-2 gap-4">
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
          <Badge className="bg-transparent shadow-transparent text-lg text-foreground border hover:bg-transparent min-w-28 flex-shrink-0 flex items-center gap-x-3 py-1 min-h-8 max-h-8 cursor-pointer">
            <PiCubeLight size={24} />
            <span>Projects</span>
          </Badge>
        </div>
        <div className="grid grid-cols-2 gap-4">
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
