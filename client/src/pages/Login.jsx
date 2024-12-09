import Divider from "@/components/Divider";
import FormField from "@/components/FormField";
import SocialButtonsContainer from "@/components/SocialButtonsContainer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Card>
      <CardHeader className="space-y-1 text-center">
        <CardTitle className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#4776E6] via-[#8E54E9] to-[#4776E6]">
          Login Here
        </CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4 text-center">
        <FormField id="email" type="email" placeholder="Email" icons="email" />
        <FormField
          id="password"
          type="password"
          placeholder="Password"
          icons="password"
        />

        <div className="text-right  ">
          <Link
            to="/forgot-password"
            className="text-sm text-transparent bg-clip-text bg-gradient-to-r from-[#4776E6] via-[#8E54E9] to-[#4776E6] font-semibold"
          >
            Forgot your password?
          </Link>
        </div>
        <Button className="w-full bg-[#1F41BB] text-xl font-medium  ">
          Sign in
        </Button>
        <div className="text-center   ">
          <Link to="/register" className="text-sm font-semibold  ">
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
