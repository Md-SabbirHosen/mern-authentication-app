import FormField from "@/components/FormField";
import Loading from "@/components/Loading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { forgotPassword } from "@/reducers/auth/asyncThunk";
import { clearMessage } from "@/reducers/auth/authSlice";
import { useEffect, useRef } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

const ForgotPassword = () => {
  const { message, isLoading } = useSelector((state) => state.auth);
  const emailInputRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (message && !isLoading) {
      const toastType =
        message.type === "success" ? toast.success : toast.error;
      toastType(message.text);
      dispatch(clearMessage());
    }
  }, [message, isLoading]);

  const submitHandler = (event) => {
    event.preventDefault();
    const email = emailInputRef.current.value;

    dispatch(forgotPassword(email));

    emailInputRef.current.value = "";
  };

  return (
    <Card>
      <Loading isLoading={isLoading} />
      <CardHeader className="space-y-1 text-center">
        <CardTitle className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#4776E6] via-[#8E54E9] to-[#4776E6]">
          Forgot Password
        </CardTitle>
        <p className="text-sm font-medium">
          Enter your email address and we'll send you a link to reset your
          password
        </p>
      </CardHeader>
      <form onSubmit={submitHandler}>
        <CardContent className="grid gap-4 text-center">
          <FormField
            id="email"
            type="email"
            placeholder="Email Address"
            icons="email"
            ref={emailInputRef}
          />
          <Button className="w-full bg-[#1F41BB] text-xl font-medium">
            Send Reset Link
          </Button>
        </CardContent>
      </form>
    </Card>
  );
};

export default ForgotPassword;
