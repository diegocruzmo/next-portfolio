import { Code2, Inbox, Phone } from "lucide-react";
import { ContactData } from "./Contact.types";

export const dataContact: ContactData = [
  {
    id: 1,
    title: "Phone",
    subtitle: "+57 300 7725367",
    link: "tel:+573007725367",
    icon: <Phone />,
  },
  {
    id: 2,
    title: "Github",
    subtitle: "github.com/diegocruzmo",
    link: "https://github.com/diegocruzmo/",
    icon: <Code2 />,
  },
  {
    id: 3,
    title: "Email",
    subtitle: "diegocruzska@gmail.com",
    link: "mailto:diegocruzska@gmail.com",
    icon: <Inbox />,
  },
];
