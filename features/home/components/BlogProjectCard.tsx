import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import blog from "@/public/blog.png";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
const BlogProjectCard = () => {
  return (
    <Card
      className="bg-transparent overflow-hidden outline-none focus-within:border-gray-400 transition-all
    flex flex-col justify-between flex-1 group border border-gray-700 hover:shadow-md hover:shadow-gray-700  rounded-lg "
    >
      <CardContent className="p-0">
        <Link href="/">
          <figure className="relative h-[150px] w-full overflow-hidden">
            <Image
              placeholder="blur"
              src={blog}
              alt="Card Image"
              className="w-full h-full absolute object-cover"
            />
          </figure>
        </Link>
      </CardContent>
      <CardFooter className="w-full p-4 flex-1 flex flex-col justify-between h-full">
        <Link href="/">
          <div className="flex items-start justify-start">
            <h1 className="text-sm font-semibold text-white">
              Is Create React App Really Dead? What Are Other Options?
            </h1>
          </div>
        </Link>
        <div className="w-full flex items-center mt-3 ">
            <Avatar className="h-7 w-7">
                <AvatarImage/>
                <AvatarFallback>Cn</AvatarFallback>
            </Avatar>
            <Avatar className="h-7 w-7 -ml-4">
                <AvatarImage/>
                <AvatarFallback>Cn</AvatarFallback>
            </Avatar>
            <Avatar className="h-7 w-7 -ml-4">
                <AvatarImage/>
                <AvatarFallback>Cn</AvatarFallback>
            </Avatar>
        </div>
      </CardFooter>
    </Card>
  );
};

export default BlogProjectCard;
