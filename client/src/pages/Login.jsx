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

const Login = () => {
  return (
    <Card className="w-[320px]">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Sign In To Your Account</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <FormField
          id="email"
          label="Email :"
          type="email"
          placeholder="example@gmail.com"
        />
        <FormField
          id="password"
          label="Password :"
          type="password"
          placeholder=""
        />
        <Button className="w-full">Sign In</Button>

        <Divider />
        <SocialButtonsContainer />
      </CardContent>
    </Card>
  );
};

export default Login;
