import React from "react";
import Image from "next/image";
import { TabsContent } from "@/components/ui/tabs";
import BlogProjectCard from "../../components/BlogProjectCard";
import { Badge } from "@/components/ui/badge";
import { blogSites } from "@/lib/blogSitesMap";

const Blogs = () => {
  return (
    <TabsContent value="blogs">
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
    </TabsContent>
  );
};

export default Blogs;
