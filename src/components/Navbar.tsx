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

const items = [
  {
    name: "Home",
    icon: <HomeIcon className="h-6 w-6 transition group-hover:scale-110" />,
  },
  {
    name: "Search",
    icon: (
      <MagnifyingGlassIcon className="h-6 w-6 transition group-hover:scale-110" />
    ),
  },
  {
    name: "Explore",
    icon: (
      <GlobeAmericasIcon className="h-6 w-6 transition group-hover:scale-110" />
    ),
  },
  {
    name: "Reels",
    icon: (
      <PlayCircleIcon className="h-6 w-6 transition group-hover:scale-110" />
    ),
  },
  {
    name: "Messages",
    icon: (
      <InboxArrowDownIcon className="h-6 w-6 transition group-hover:scale-110" />
    ),
  },
  {
    name: "Notifications",
    icon: <HeartIcon className="h-6 w-6 transition group-hover:scale-110" />,
  },
  {
    name: "Create",
    icon: <PlusIcon className="h-6 w-6 transition group-hover:scale-110" />,
  },
  {
    name: "Profile",
    icon: <UserIcon className="h-6 w-6 transition group-hover:scale-110" />,
  },
];

const Navbar = () => {
  return (
    <nav>
      <ul className="flex flex-col gap-2">
        {items.map((item, index) => (
          <li key={index} className="block">
            <a
              className="group flex w-full items-center rounded p-3 transition hover:bg-zinc-100"
              href=""
            >
              <span className="relative">{item.icon}</span>
              <span className="pl-4">{item.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
