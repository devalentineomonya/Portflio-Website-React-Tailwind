import React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Blogs from "./Blogs";
import Resume from "./Resume";
import Work from "./Work";
const Presentation = () => {
  return (
    <section className="w-full ">
      <Tabs defaultValue="work">
        <TabsList className="border-b bg-transparent w-full flex justify-center  gap-x-4 rounded-none sticky top-14 backdrop-blur z-10">
          <TabsTrigger className="shadow-transparent" value="work">Work</TabsTrigger>
          <TabsTrigger className="shadow-transparent" value="resume">Resume</TabsTrigger>
          <TabsTrigger className="shadow-transparent" value="blogs">Blogs</TabsTrigger>
        </TabsList>
        <Work />
        <Resume />
        <Blogs />
      </Tabs>
    </section>
  );
};

export default Presentation;
