import bgGradient from "@/assets/background-gradient.png";
import FloatingShape from "@/components/FloatingShape";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="relative h-screen w-screen overflow-hidden  bg-[#1a2435]  ">
      <div>
        <img
          src={bgGradient}
          className="absolute w-4/5 top-0 left-0  opacity-20"
          alt="bgGradients"
        />
      </div>
      <FloatingShape
        color="bg-green-500"
        size="w-64 h-64"
        top="-5%"
        left="10%"
        delay={0}
      />
      <FloatingShape
        color="bg-emerald-500"
        size="w-48 h-48"
        top="70%"
        left="80%"
        delay={5}
      />
      <FloatingShape
        color="bg-lime-500"
        size="w-32 h-32"
        top="40%"
        left="-10%"
        delay={2}
      />
      <div className=" absolute top-5 right-1/4 ">
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
