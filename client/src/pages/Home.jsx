import welcomeImage from "@/assets/welcome image.png";
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
    <Card className="w-[350px] text-center">
      <CardHeader className="px-8">
        <img src={welcomeImage} className="h-60" alt="welcomeImage" />
      </CardHeader>
      <CardContent>
        <CardTitle className="text-2xl font-bold text-[#1F41BB]">
          Discover Your Dream Job here
        </CardTitle>
      </CardContent>
      <CardFooter className="justify-between gap-2.5 mb-6">
        <Button className="bg-[#1F41BB] w-full text-xl hover:bg-black hover:text-white">
          <Link to="/login">Login</Link>
        </Button>
        <Button className="text-xl text-black w-full bg-transparent hover:bg-black hover:text-white">
          <Link to="/register">Register</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Home;
