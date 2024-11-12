import VideoBackground from "@/components/VideoBackground";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="relative h-screen w-screen overflow-hidden grid place-items-center">
      <VideoBackground />
      <div className="mt-2 z-20">
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
