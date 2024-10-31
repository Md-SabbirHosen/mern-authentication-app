import { Outlet } from "react-router-dom";
import VideoBackground from "@/components/VideoBackground";

const Home = () => {
  return (
    <div className="relative h-screen w-screen overflow-hidden grid place-items-center">
      <h1 className="absolute top-3 mx-auto p-2 z-20 text-3xl font-bold text-white after:absolute  after:-z-20  after:content-['']  after:block after:w-full  after:inset-0 after:bg-gradient-to-r after:from-violet-500 after:to-fuchsia-500 after:-skew-x-12">
        Welcome To This MERN Auth App!
      </h1>
      <VideoBackground />
      <div className="absolute top-1/2 z-20">
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
