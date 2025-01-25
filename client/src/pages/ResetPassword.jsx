import FormField from "@/components/FormField";
import Loading from "@/components/Loading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { resetPassword } from "@/reducers/auth/asyncThunk";
import { clearMessage } from "@/reducers/auth/authSlice";
import { useEffect, useRef } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const ResetPassword = () => {
  const { message, isLoading } = useSelector((state) => state.auth);
  const passwordInputRef = useRef(null);
  const confirmPasswordInputRef = useRef(null);
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (message && !isLoading) {
      const toastType =
        message.type === "success" ? toast.success : toast.error;
      toastType(message.text);

      if (message.type === "success") {
        navigate("/login");
      }

      dispatch(clearMessage());
    }
  }, [message, isLoading]);

  const validatePassword = (newPassword, confirmNewPassword) => {
    if (newPassword !== confirmNewPassword) {
      toast.error("Passwords do not match!");
      return false;
    }
    if (newPassword.length < 6) {
      toast.error("Password must be at least 6 characters!");
      return false;
    }
    return true;
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const token = params.id;
    const newPassword = passwordInputRef.current.value;
    const confirmNewPassword = confirmPasswordInputRef.current.value;

    if (!validatePassword(newPassword, confirmNewPassword)) return;

    dispatch(resetPassword({ newPassword, token }));

    passwordInputRef.current.value = "";
    confirmPasswordInputRef.current.value = "";
  };
  return (
    <Card>
      <Loading isLoading={isLoading} />
      <CardHeader className="space-y-1 text-center">
        <CardTitle className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#4776E6] via-[#8E54E9] to-[#4776E6]">
          Reset Password
        </CardTitle>
      </CardHeader>
      <form onSubmit={submitHandler}>
        <CardContent className="grid gap-4 text-center">
          <FormField
            id="password"
            type="password"
            placeholder="New Password"
            icons="password"
            ref={passwordInputRef}
          />
          <FormField
            id="password"
            type="password"
            placeholder="Confirm New Password"
            icons="password"
            ref={confirmPasswordInputRef}
          />

          <Button className="w-full bg-[#1F41BB] text-xl font-medium">
            Send New Password
          </Button>
        </CardContent>
      </form>
    </Card>
  );
};

export default ResetPassword;
