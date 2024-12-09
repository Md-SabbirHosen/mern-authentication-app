import FormField from "@/components/FormField";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ResetPassword = () => {
  return (
    <Card>
      <CardHeader className="space-y-1 text-center">
        <CardTitle className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#4776E6] via-[#8E54E9] to-[#4776E6]">
          Reset Password
        </CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4 text-center">
        <FormField
          id="password"
          type="password"
          placeholder="New Password"
          icons="password"
        />
        <FormField
          id="password"
          type="password"
          placeholder="Confirm New Password"
          icons="password"
        />

        <Button className="w-full bg-[#1F41BB] text-xl font-medium">
          Send New Password
        </Button>
      </CardContent>
    </Card>
  );
};

export default ResetPassword;
