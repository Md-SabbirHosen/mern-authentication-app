import Divider from "@/components/Divider";
import FormField from "@/components/FormField";
import Loading from "@/components/Loading";
import PasswordStrengthChecker from "@/components/PasswordStrengthChecker";
import SocialButtonsContainer from "@/components/SocialButtonsContainer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { signUp } from "@/reducers/auth/asyncThunk";
import { clearMessage } from "@/reducers/auth/authSlice";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Registration = () => {
  const { message, isLoading } = useSelector((state) => state.auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (message && !isLoading) {
      if (Object.keys(message).length === 0) return;
      const toastType =
        message.type === "success" ? toast.success : toast.error;
      toastType(message.text);
      if (message.type === "success") {
        navigate("/verify");
      }
      dispatch(clearMessage());
    }
  }, [message, isLoading, navigate]);

  const emailChangeHandler = (email) => {
    setEmail(email);
  };

  const passwordChangeHandler = (password) => {
    setPassword(password);
  };

  const passwordIsValidationHandler = (strength) => {
    if (strength === 100) setPasswordIsValid(true);
    else setPasswordIsValid(false);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    console.log(password);
    if (passwordIsValid) {
      dispatch(signUp({ email, password }));
    } else {
      toast.error(" Password must meet all criteria");
    }

    setEmail("");
    setPassword("");
  };

  return (
    <Card>
      <Loading isLoading={isLoading} />
      <CardHeader className="space-y-1 text-center">
        <CardTitle className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#4776E6] via-[#8E54E9] to-[#4776E6]">
          Create Account
        </CardTitle>
      </CardHeader>
      <form onSubmit={submitHandler}>
        <CardContent className="grid gap-4 text-center">
          <FormField
            id="email"
            type="email"
            placeholder="Email Address"
            icons="email"
            onEmailChangeHandler={emailChangeHandler}
          />
          <FormField
            id="password"
            type="password"
            placeholder="Password"
            icons="password"
            onPasswordChangelHandler={passwordChangeHandler}
          />

          <PasswordStrengthChecker
            password={password}
            onPasswordIsValidHandler={passwordIsValidationHandler}
          />

          <Button
            type="submit"
            className="w-full bg-[#1F41BB] text-xl font-medium z-50 "
          >
            Sign up
          </Button>

          <div className="text-center ">
            <Link to="/login" className="text-sm font-semibold z-50 ">
              Already have an account
            </Link>
          </div>
          <Divider />
          <SocialButtonsContainer />
        </CardContent>
      </form>
    </Card>
  );
};

export default Registration;
