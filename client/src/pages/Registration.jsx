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
          Create Account
        </CardTitle>
        <p className="text-xs font-semibold">
          Create an account so you can explore all the existing jobs
        </p>
      </CardHeader>
      <CardContent className="grid gap-4 text-center">
        <FormField id="email" type="email" placeholder="Email" />
        <FormField id="password" type="password" placeholder="Password" />
        <FormField
          id="password"
          type="password"
          placeholder="Confirm Password"
        />

        <Button className="w-full bg-[#1F41BB] text-xl font-medium">
          Sign up
        </Button>
        <div className="text-center ">
          <Link to="/login" className="text-sm font-semibold">
            Already have an account
          </Link>
        </div>
        <Divider />
        <SocialButtonsContainer />
      </CardContent>
    </Card>
  );
};

export default Login;
