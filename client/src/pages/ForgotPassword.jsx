import FormField from "@/components/FormField";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ForgotPassword = () => {
  return (
    <Card>
      <CardHeader className="space-y-1 text-center">
        <CardTitle className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#4776E6] via-[#8E54E9] to-[#4776E6]">
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
