import { MdOutlineExplore } from "react-icons/md";
import { PiBriefcase, PiRobot } from "react-icons/pi";
import { FiBook } from "react-icons/fi";
import { LuFolderGit2 } from "react-icons/lu";
import { PiGraduationCapLight } from "react-icons/pi";
import { GoBell, GoPerson, GoStack } from "react-icons/go";
import { TbLayoutGridAdd, TbLetterC } from "react-icons/tb";
import { LuLink } from "react-icons/lu";

export const navbarItems = [
  {
    name:null,
    items: [
      { name: "Explorer", link: "/", icon: MdOutlineExplore },
      { name: "Experience", link: "/experience", icon: PiBriefcase },
      { name: "Education", link: "/education", icon: PiGraduationCapLight },
      { name: "Projects", link: "/projects", icon: LuFolderGit2 },
      { name: "About", link: "/about", icon: GoPerson },
      { name: "Services", link: "/services", icon: GoBell },
    ],
  },
  {
    name: "Resources",
    items: [
      { name: "Blogs", link: "/blogs", icon: FiBook },
      { name: "Achievements", link: "/achievements", icon: TbLayoutGridAdd },
      { name: "Stack", link: "/stack", icon: GoStack },
      { name: "Chat", link: "/chat", icon: PiRobot },
    ],
  },
  {
    name: "Connect",
    items: [
      { name: "Contact", link: "/contact", icon: TbLetterC },
      { name: "LinkedIn", link: "/linkedin", icon: LuLink },
      { name: "GitHub", link: "/github", icon: LuLink },
      { name: "Resume", link: "/resume", icon: LuLink },
      { name: "Email", link: "/email", icon: LuLink },
      { name: "Phone", link: "/phone", icon: LuLink },
      { name: "Facebook", link: "/facebook", icon: LuLink },
      { name: "Twitter", link: "/twitter", icon: LuLink },
      { name: "Instagram", link: "/instagram", icon: LuLink },
      { name: "Portfolio", link: "/portfolio", icon: LuLink },
    ],
  },
];
