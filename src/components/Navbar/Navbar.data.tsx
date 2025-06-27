import {
  House,
  User,
  BookOpen,
  BriefcaseBusiness,
  Mail,
  ThumbsUp,
} from "lucide-react";

import { NavbarItem } from "./Navbar.types";

export const itemsNavbar: NavbarItem[] = [
  {
    id: 1,
    title: "Home",
    icon: <House size={20} />,
    link: "#home",
  },
  {
    id: 2,
    title: "User",
    icon: <User size={20} />,
    link: "#about",
  },
  {
    id: 3,
    title: "Book",
    icon: <BookOpen size={20} />,
    link: "#experience",
  },
  {
    id: 4,
    title: "Target",
    icon: <BriefcaseBusiness size={20} />,
    link: "#portfolio",
  },
  {
    id: 6,
    title: "Testominials",
    icon: <ThumbsUp size={20} />,
    link: "#testimonials",
  },
  {
    id: 5,
    title: "Contact",
    icon: <Mail size={20} />,
    link: "#contact",
  },
];
