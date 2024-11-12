import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import welcomeImage from "@/assets/welcome image.png";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <Card className="w-[320px] text-center">
      <CardHeader>
        <img src={welcomeImage} className="h-64" alt="welcomeImage" />
      </CardHeader>
      <CardContent>
        <CardTitle className="text-3xl font-bold text-[#1F41BB]">
          Discover Your Dream Job here
        </CardTitle>
        <p className="text-xs mt-4 ">
          Explore all the existing job roles based on your interest and study
          major
        </p>
      </CardContent>
      <CardFooter className="justify-between gap-2.5 mb-6">
        <Button className="bg-[#1F41BB] w-full text-xl">
          <Link to="/login">Login</Link>
        </Button>
        <Button className="text-xl text-black w-full bg-transparent">
          <Link to="/register">Register</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Home;
