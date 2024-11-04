import Divider from "@/components/Divider";
import FormField from "@/components/FormField";
import SocialButtonsContainer from "@/components/SocialButtonsContainer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Card className="w-[320px]">
      <CardHeader className="space-y-1 text-center">
        <CardTitle className="text-3xl font-bold text-[#1F41BB]">
          Login Here
        </CardTitle>
        <p className="text-xl font-semibold">
          Welcome back you’ve been missed!
        </p>
      </CardHeader>
      <CardContent className="grid gap-4 text-center">
        <FormField id="email" type="email" placeholder="Email" />
        <FormField id="password" type="password" placeholder="Password" />

        <div className="text-right mt-4">
          <Link to="/signup" className="text-sm text-[#1F41BB] font-semibold">
            Forgot your password?
          </Link>
        </div>
        <Button className="w-full bg-[#1F41BB] text-xl font-medium">
          Sign In
        </Button>
        <div className="text-center ">
          <Link to="/signup" className="text-sm font-semibold">
            Create new account
          </Link>
        </div>
        <Divider />
        <SocialButtonsContainer />
      </CardContent>
    </Card>
  );
};

export default Login;
