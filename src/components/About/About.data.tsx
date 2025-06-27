import { Briefcase, UsersRound, Wrench } from "lucide-react";
import { AboutProps } from "./About.types";

export const dataAbout: AboutProps[] = [
  {
    id: 1,
    name: "Experience",
    icon: <Briefcase />,
    description: "+5 years of experience",
  },
  {
    id: 2,
    name: "Customers",
    icon: <UsersRound />,
    description: "+50 customers satisfied",
  },
  {
    id: 3,
    name: "Projects",
    icon: <Wrench />,
    description: "+50 projects completed",
  },
];
