import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="relative h-screen w-screen overflow-hidden grid place-items-center bg-gradient-to-br from-[#4568DC] to-[#B06AB3] ">
      <div className=" mt-2 z-20   ">
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
