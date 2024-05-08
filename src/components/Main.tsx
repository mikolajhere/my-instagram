import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <main className=" flex min-h-dvh flex-grow flex-col sm:pl-64">
      <Outlet />
    </main>
  );
};

export default Main;
