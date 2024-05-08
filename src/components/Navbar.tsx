import { navbarItems } from "../constants/navbar-items";

const Navbar = () => {
  return (
    <nav>
      <ul className="flex flex-col gap-2">
        {navbarItems.map((item, index) => (
          <li key={index} className="block">
            <a
              className="group flex w-full items-center rounded p-3 transition hover:bg-zinc-100"
              href={item.href}
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
