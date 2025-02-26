import React from "react";
import { TabsContent } from "@/components/ui/tabs";
import ExperienceCard from "@/screens/home/components/ExperienceCard";

const Resume = () => {
  return (
    <TabsContent value="resume">
      <div className="flex items-center gap-x-3 my-6 text-xl font-medium">
        <p>Experience</p>
      </div>
      <div className="mt-12">
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </TabsContent>
  );
};

export default Resume;
