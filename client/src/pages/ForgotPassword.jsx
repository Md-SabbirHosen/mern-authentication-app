import FormField from "@/components/FormField";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <Card className="w-[350px]">
      <CardHeader className="space-y-1 text-center">
        <CardTitle className="text-2xl font-bold text-[#1F41BB]">
          Forgot Password
        </CardTitle>
        <p className="text-sm font-medium">
          Enter your email address and we'll send you a link to reset your
          password
        </p>
      </CardHeader>
      <CardContent className="grid gap-4 text-center">
        <FormField
          id="email"
          type="email"
          placeholder="Email Address"
          icons="email"
        />

        <Button className="w-full bg-[#1F41BB] text-xl font-medium">
          Send Reset Link
        </Button>
      </CardContent>
    </Card>
  );
};

export default ForgotPassword;
