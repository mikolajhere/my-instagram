import Aside from "./Aside";
import { Outlet } from "react-router-dom";
const Home = () => {
  return (
    <div className="flex">
      <Aside />
      <main className="flex min-h-dvh flex-grow flex-col sm:pl-64">
        <Outlet />
      </main>
    </div>
  );
};

export default Home;
