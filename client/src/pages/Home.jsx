import { Outlet } from "react-router-dom";
import VideoBackground from "@/components/VideoBackground";

const Home = () => {
  return (
    <div className="h-screen w-screen overflow-hidden">
      <VideoBackground />
      <Outlet />
    </div>
  );
};

export default Home;
