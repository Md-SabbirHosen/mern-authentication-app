import welcomeImage from "@/assets/welcome-image.png";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { clearMessage, logOut } from "@/reducers/auth/authSlice";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

const Welcome = () => {
  const { message, isLoading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (message && !isLoading) {
      if (Object.keys(message).length === 0) return;
      const toastType =
        message.type === "success" ? toast.success : toast.error;
      toastType(message.text);
      if (message.type === "success") {
        navigate("/");
      }
      dispatch(clearMessage());
    }
  }, [message, isLoading, navigate]);

  const logoutHandler = () => {
    dispatch(logOut());
  };

  return (
    <Card className=" text-center ">
      <CardHeader className=" flex justify-center items-center">
        <img src={welcomeImage} className="h-60 w-72" alt="Welcome" />
      </CardHeader>
      <CardContent>
        <CardTitle className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#4776E6] via-[#8E54E9] to-[#4776E6]">
          Welcome Back!
        </CardTitle>
        <p className="text-lg mt-4">
          Explore amazing opportunities tailored for you.
        </p>
      </CardContent>
      <CardFooter className="justify-center gap-2.5 mb-6">
        <Button className="text-xl text-white w-full" onClick={logoutHandler}>
          Logout
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Welcome;
