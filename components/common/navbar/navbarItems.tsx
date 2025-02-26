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
    name: null,
    items: [
      { name: "Explorer", link: "/", icon: MdOutlineExplore, count: 0 },
      { name: "Experience", link: "/experience", icon: PiBriefcase, count: 0 },
      {
        name: "Education",
        link: "/education",
        icon: PiGraduationCapLight,
        count: 0,
      },
      { name: "Projects", link: "/projects", icon: LuFolderGit2, count: 0 },
      { name: "About", link: "/about", icon: GoPerson, count: 0 },
      { name: "Services", link: "/services", icon: GoBell, count: 0 },
    ],
  },
  {
    name: "Resources",
    items: [
      { name: "Blogs", link: "/blogs", icon: FiBook, count: 0 },
      {
        name: "Achievements",
        link: "/achievements",
        icon: TbLayoutGridAdd,
        count: 0,
      },
      { name: "Stack", link: "/stack", icon: GoStack, count: 0 },
      { name: "Chat", link: "/chat", icon: PiRobot, count: 0 },
    ],
  },
  {
    name: "Connect",
    items: [
      { name: "Contact", link: "/contact", icon: TbLetterC, count: null },
      { name: "LinkedIn", link: "https://www.linkedin.com/in/devalentineomonya/", icon: LuLink, count: null },
      { name: "GitHub", link: "https://github.com/devalentineomonya", icon: LuLink, count: null },
      { name: "Resume", link: "https://devalentine.vercel.app/resume.pdf", icon: LuLink, count: null },
      { name: "Email", link: "mailto:devalentineomonya@gmail.com", icon: LuLink, count: null },
      { name: "Phone", link: "tel:+254742223344", icon: LuLink, count: null },
      { name: "Facebook", link: "https://www.facebook.com/devalentineomonya", icon: LuLink, count: null },
      { name: "Twitter", link: "https://x.com/devalentineomonya", icon: LuLink, count: null },
      { name: "Instagram", link: "https://www.instagram.com/devalentineomonya", icon: LuLink, count: null },
      { name: "Portfolio", link: "https://devalentine.vercel.app", icon: LuLink, count: null },
    ],
  },
];
