import React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Blogs from "./Blogs";
import Resume from "./Resume";
import Work from "./Work";
const Presentation = () => {
  return (
    <section className="w-full ">
      <Tabs defaultValue="work">
        <TabsList className="border-b bg-transparent w-full flex justify-center  gap-x-4 rounded-none">
          <TabsTrigger value="work">Work</TabsTrigger>
          <TabsTrigger value="resume">Resume</TabsTrigger>
          <TabsTrigger value="blogs">Blogs</TabsTrigger>
        </TabsList>
        <Work />
        <Resume />
        <Blogs />
      </Tabs>
    </section>
  );
};

export default Presentation;
