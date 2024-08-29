import { CircleDollarSign, ListTodo, User } from "lucide-react";

type NavLink = {
  id: string;
  href: string;
  label: string;
  icon?: React.ReactNode;
};

const links: NavLink[] = [
  {
    id: "0",
    href: "#features",
    label: "FEATURES",
    icon: <ListTodo />,
  },
  {
    id: "1",
    href: "#pricing",
    label: "PRICING",
    icon: <CircleDollarSign />,
  },
  {
    id: "2",
    href: "#how-to-use",
    label: "HOW TO USE",
    icon: <ListTodo />,
  },
  {
    id: "3",
    href: "#roadmap",
    label: "ROADMAP",
    icon: <ListTodo />,
  },
];

export default links;
