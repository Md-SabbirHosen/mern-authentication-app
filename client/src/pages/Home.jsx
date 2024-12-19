import homeImage from "@/assets/home-image.png";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Card className=" text-center ">
      <CardHeader className="px-8 flex justify-center items-center">
        <img src={homeImage} className="h-60 w-60" alt="homeImage" />
      </CardHeader>
      <CardContent>
        <CardTitle className="text-2xl font-bold  text-transparent bg-clip-text bg-gradient-to-r from-[#4776E6] via-[#8E54E9] to-[#4776E6]">
          Discover Your Dream Job here
        </CardTitle>
      </CardContent>
      <CardFooter className="justify-between gap-2.5 mb-6">
        <div className="w-full">
          <Link to="/login">
            <Button className=" w-full text-xl ">Login</Button>
          </Link>
        </div>

        <div className="w-full">
          <Link to="/register">
            <Button className="text-xl text-white w-full ">Register</Button>
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};

export default Home;
