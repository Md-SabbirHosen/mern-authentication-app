import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { verifyEmail } from "@/reducers/auth/authSlice";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Verification = () => {
  const [otpValue, setOtpValue] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { message, isLoading } = useSelector((state) => state.auth);

  useEffect(() => {
    if (message && !isLoading) {
      if (Object.keys(message).length === 0) return;
      const toastType =
        message.type === "success" ? toast.success : toast.error;
      toastType(message.text);
      // if (message.type === "success") {
      //   navigate("/login");
      // }
    }
  }, [message, isLoading, navigate]);

  const verifyEmailHandler = () => {
    dispatch(verifyEmail(otpValue));
  };

  return (
    <Card>
      <CardHeader className="space-y-1 text-center">
        <CardTitle className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#4776E6] via-[#8E54E9] to-[#4776E6]">
          Verify Your Email
        </CardTitle>
        <p className="text-sm">Enter the 6-digit code sent to your email.</p>
      </CardHeader>
      <CardContent className="flex flex-col justify-center items-center gap-6">
        <InputOTP
          maxLength={6}
          value={otpValue}
          onChange={(value) => setOtpValue(value)}
        >
          <InputOTPGroup>
            {Array.from({ length: 3 }).map((_, index) => {
              return <InputOTPSlot key={index} index={index} />;
            })}
          </InputOTPGroup>
          <InputOTPSeparator className="mx-2" />
          <InputOTPGroup>
            {Array.from({ length: 3 }).map((_, index) => {
              const idx = index + 3;
              return <InputOTPSlot key={idx} index={idx} />;
            })}
          </InputOTPGroup>
        </InputOTP>
        <Button
          className="w-full  text-xl font-medium"
          onClick={verifyEmailHandler}
        >
          Verify Email
        </Button>
      </CardContent>
    </Card>
  );
};

export default Verification;
