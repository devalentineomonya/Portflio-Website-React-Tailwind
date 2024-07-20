import { BiHeart, BiBook }from "react-icons/bi";
import { GoPerson } from "react-icons/go";
import { PiBuildingsLight } from "react-icons/pi";
import { BiBriefcaseAlt2 } from "react-icons/bi";
import { PiUserList } from "react-icons/pi";
import { RiMessage2Line } from "react-icons/ri";

const navbarItems = [
  {
    name: "profile",
    icon:<GoPerson size={20} className="text-gray-400"/>
  },
  {
    name: "Education",
    icon:<PiBuildingsLight size={20} className="text-gray-400"/>
  },
  {
    name: "Experience",
    icon:<BiBriefcaseAlt2 size={20} className="text-gray-400"/>
  },
  {
    name: "My Value",
    icon:<BiHeart size={20} className="text-gray-400"/>
  },
  {
    name: "Testimonials",
 icon:<PiUserList size={20} className="text-gray-400"/>
  },
  {
    name: "Projects",
    icon:<BiBook size={20} className="text-gray-400"/>
  },
  {
    name: "Contact",
    icon:<RiMessage2Line size={20} className="text-gray-400"/>
  },
];

export default navbarItems
