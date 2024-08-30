import { BookText, CircleDollarSign, WandSparkles, Kanban } from "lucide-react";

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
    icon: <WandSparkles />,
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
    icon: <BookText />,
  },
  {
    id: "3",
    href: "#roadmap",
    label: "ROADMAP",
    icon: <Kanban />,
  },
];

export default links;
