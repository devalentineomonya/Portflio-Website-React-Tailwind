import { BiUser, BiMehBlank, BiHeart, BiBook, BiMessage }from "react-icons/bi";
import { CgUserlane }from "react-icons/cg";
import { GiHandBag }from "react-icons/gi";

const navbarItems = [
  {
    name: "profile",
    icon:<BiUser/>
  },
  {
    name: "Education",
    icon:<BiMehBlank/>
  },
  {
    name: "Experience",
    icon:<GiHandBag/>
  },
  {
    name: "My Value",
    icon:<BiHeart/>
  },
  {
    name: "Testimonials",
 icon:<CgUserlane/>
  },
  {
    name: "Projects",
    icon:<BiBook/>
  },
  {
    name: "Contact",
    icon:<BiMessage/>
  },
];

export default navbarItems
