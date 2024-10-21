import { Background, Vector } from "@/assets";
const Login = () => {
  return (
    <div className="h-screen flex overflow-hidden">
      <div className="relative ">
        <img
          src={Background}
          className="h-full w-full  object-cover"
          alt="Background"
        />
        <img
          src={Vector}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          alt=""
        />
      </div>
      <div className="flex-1 bg-white"></div>
    </div>
  );
};

export default Login;
