import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";

const Verification = () => {
  return (
    <Card className="w-[350px]">
      <CardHeader className="space-y-1 text-center">
        <CardTitle className="text-2xl font-bold text-[#1F41BB]">
          Verify Your Email
        </CardTitle>
        <p className="text-sm">Enter the 6-digit code sent to your email.</p>
      </CardHeader>
      <CardContent className="flex flex-col justify-center items-center gap-6">
        <InputOTP maxLength={6}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
          </InputOTPGroup>
          <InputOTPSeparator className="mx-2" />
          <InputOTPGroup>
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
        <Button className="w-full bg-[#1F41BB] text-xl font-medium">
          Verify Email
        </Button>
      </CardContent>
    </Card>
  );
};

export default Verification;
