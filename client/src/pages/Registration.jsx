import Divider from "@/components/Divider";
import FormField from "@/components/FormField";
import SocialButtonsContainer from "@/components/SocialButtonsContainer";
import { useEffect, useRef } from "react";
import { RxCross2 } from "react-icons/rx";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { clearMessage, signUp } from "@/reducers/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const PASSWORD_CONSTRAINS = [
  { id: Math.random(), value: "At least 6 characters" },
  { id: Math.random(), value: "Contains uppercase letter" },
  { id: Math.random(), value: "Contains lowercase letter" },
  { id: Math.random(), value: "Contains a number" },
  { id: Math.random(), value: "Contains speacial character" },
];

const Registration = () => {
  const { message, isLoading } = useSelector((state) => state.auth);
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);
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

  const submitHandler = (event) => {
    event.preventDefault();
    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;

    dispatch(signUp({ email, password }));

    emailInputRef.current.value = "";
    passwordInputRef.current.value = "";
  };

  const PasswordStrengthChecker = () => {
    return (
      <>
        <div className="grid gap-2 grid-cols-4 ">
          <p className="col-span-2 text-sm justify-self-start">
            Password Strength
          </p>
          <p className="col-span-2 text-sm justify-self-end">Very Weak</p>
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="h-[3px] w-full bg-[#626262]"></div>
          ))}
          <div className="col-span-4 ">
            {PASSWORD_CONSTRAINS.map((item) => {
              return (
                <p
                  className="text-start text-sm flex gap-1 items-center"
                  key={item.id}
                >
                  <RxCross2 className="text-[#626262]" />
                  {item.value}
                </p>
              );
            })}
          </div>
        </div>
      </>
    );
  };
  return (
    <Card>
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
            ref={emailInputRef}
          />
          <FormField
            id="password"
            type="password"
            placeholder="Password"
            icons="password"
            ref={passwordInputRef}
          />
          <PasswordStrengthChecker />
          <Button className="w-full bg-[#1F41BB] text-xl font-medium z-50 ">
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
