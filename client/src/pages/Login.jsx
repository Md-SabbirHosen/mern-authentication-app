import Divider from "@/components/Divider";
import FormField from "@/components/FormField";
import SocialButtonsContainer from "@/components/SocialButtonsContainer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { clearMessage, logIn } from "@/reducers/auth/authSlice";
import { useEffect, useRef } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const { message, isLoading } = useSelector((state) => state.auth);
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (message && !isLoading) {
      if (Object.keys(message).length === 0) return;
      const toastType =
        message.type === "success" ? toast.success : toast.error;
      toastType(message.text);
      if (message.type === "success") {
        navigate("/welcome");
      }
      dispatch(clearMessage());
    }
  }, [message, isLoading, navigate]);

  const submitHandler = (event) => {
    event.preventDefault();
    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;
    dispatch(logIn({ email, password }));
  };

  return (
    <Card>
      <CardHeader className="space-y-1 text-center">
        <CardTitle className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#4776E6] via-[#8E54E9] to-[#4776E6]">
          Login Here
        </CardTitle>
      </CardHeader>
      <form onSubmit={submitHandler}>
        <CardContent className="grid gap-4 text-center">
          <FormField
            id="email"
            type="email"
            placeholder="Email"
            icons="email"
            ref={emailInputRef}
          />
          <FormField
            id="password"
            type="password"
            placeholder="Password"
            icons="password"
            ref={passwordInputRef}
          />

          <div className="text-right  ">
            <Link
              to="/forgot-password"
              className="text-sm text-transparent bg-clip-text bg-gradient-to-r from-[#4776E6] via-[#8E54E9] to-[#4776E6] font-semibold"
            >
              Forgot your password?
            </Link>
          </div>
          <Button className="w-full  text-xl font-medium  ">Sign in</Button>

          <div className="text-center   ">
            <Link to="/register" className="text-sm font-semibold  ">
              Create new account
            </Link>
          </div>
          <Divider />
          <SocialButtonsContainer />
        </CardContent>
      </form>
    </Card>
  );
};

export default Login;
