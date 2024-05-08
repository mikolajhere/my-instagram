import { Bars3Icon } from "@heroicons/react/24/solid";
import Navbar from "./Navbar";

const Aside = () => {
  return (
    <aside className="hidden min-h-dvh flex-col items-start border-r border-slate-300 px-3 pb-5 pt-2 sm:flex sm:w-64">
      <div className=" mb-5 w-full px-3 pt-6">
        <img src="/instagram.svg" className="h-10" alt="" />
      </div>
      <div className="w-full flex-grow">
        <Navbar />
      </div>
      <div className="w-full">
        <button className="group flex w-full items-center rounded p-3 transition hover:bg-zinc-100">
          <span className="relative">
            <Bars3Icon className="h-6 w-6 transition group-hover:scale-110" />
          </span>
          <span className="pl-4">More</span>
        </button>
      </div>
    </aside>
  );
};

export default Aside;
