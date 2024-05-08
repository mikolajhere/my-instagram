import {
  HomeIcon,
  MagnifyingGlassIcon,
  GlobeAmericasIcon,
  PlayCircleIcon,
  InboxArrowDownIcon,
  HeartIcon,
  PlusIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import { path } from "./path";

export const navbarItems = [
  {
    name: "Home",
    icon: <HomeIcon className="h-6 w-6 transition group-hover:scale-110" />,
    href: path.home,
  },
  {
    name: "Search",
    icon: (
      <MagnifyingGlassIcon className="h-6 w-6 transition group-hover:scale-110" />
    ),
    href: "#",
  },
  {
    name: "Explore",
    icon: (
      <GlobeAmericasIcon className="h-6 w-6 transition group-hover:scale-110" />
    ),
    href: path.explore,
  },
  {
    name: "Reels",
    icon: (
      <PlayCircleIcon className="h-6 w-6 transition group-hover:scale-110" />
    ),
    href: path.reels,
  },
  {
    name: "Messages",
    icon: (
      <InboxArrowDownIcon className="h-6 w-6 transition group-hover:scale-110" />
    ),
    href: path.messages,
  },
  {
    name: "Notifications",
    icon: <HeartIcon className="h-6 w-6 transition group-hover:scale-110" />,
    href: "#",
  },
  {
    name: "Create",
    icon: <PlusIcon className="h-6 w-6 transition group-hover:scale-110" />,
    href: "#",
  },
  {
    name: "Profile",
    icon: <UserIcon className="h-6 w-6 transition group-hover:scale-110" />,
    href: path.profile,
  },
];
