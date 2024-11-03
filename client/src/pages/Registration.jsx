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

const Registration = () => {
  return (
    <Card className="w-[320px]">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Sign Up To Your Account</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <FormField
          id="email"
          label="email"
          type="email"
          placeholder="example@gmail.com"
        />
        <FormField
          id="password"
          label="password"
          type="password"
          placeholder=""
        />
        <Button className="w-full">Sign Up</Button>
        <Divider />
        <SocialButtonsContainer />
      </CardContent>
    </Card>
  );
};

export default Registration;
