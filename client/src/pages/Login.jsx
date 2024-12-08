import Divider from "@/components/Divider";
import FormField from "@/components/FormField";
import SocialButtonsContainer from "@/components/SocialButtonsContainer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Card className="w-[350px]">
      <CardHeader className="space-y-1 text-center">
        <CardTitle className="text-2xl font-bold text-[#1F41BB]">
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

        <div className="text-right">
          <Link
            to="/forgot-password"
            className="text-sm text-[#1F41BB] font-semibold"
          >
            Forgot your password?
          </Link>
        </div>
        <Button className="w-full bg-[#1F41BB] text-xl font-medium">
          Sign in
        </Button>
        <div className="text-center ">
          <Link to="/register" className="text-sm font-semibold">
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
