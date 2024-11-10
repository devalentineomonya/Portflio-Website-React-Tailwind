"use client";
import { TabsContent } from "@/components/ui/tabs";
import { useTheme } from "next-themes";
import Link from "next/link";
import React, { useState, useCallback, useEffect } from "react";
import { FaGithub } from "react-icons/fa6";
import { Skeleton } from "@/components/ui/skeleton";
import { fetchProfile } from "../../actions/refchGithub";
import { userProfile } from "../../types/githubResponse";

const Work = () => {
  const { theme } = useTheme();
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState<userProfile | undefined>(undefined);
  const url = `https://jandee.vercel.app/devalentineomonya?theme=${theme}`;

  const handleIframeLoad = useCallback(() => {
    setLoading(false);
  }, []);

  useEffect(() => {
    const getProfile = async () => {
      try {
        const data = await fetchProfile();
        setProfile(data);
      } catch (error) {
        console.error("Failed to fetch profile:", error);
      }
    };

    getProfile();
  }, []);
  console.log(profile)

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
      <div className="relative w-full">
        {loading && <Skeleton className="absolute inset-0" />}
        <iframe
          suppressHydrationWarning
          onLoad={handleIframeLoad}
          className="w-full h-full"
          src={url}
          title="Github Profile"
        />
      </div>

      <div className="flex items-center justify-between">
        <h3>Total {profile?.public_repos ?? 0} repositories</h3>
      </div>
    </TabsContent>
  );
};

export default Work;
