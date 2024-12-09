import Divider from "@/components/Divider";
import FormField from "@/components/FormField";
import SocialButtonsContainer from "@/components/SocialButtonsContainer";
import { RxCross2 } from "react-icons/rx";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const PASSWORD_CONSTRAINS = [
  { id: Math.random(), value: "At least 6 characters" },
  { id: Math.random(), value: "Contains uppercase letter" },
  { id: Math.random(), value: "Contains lowercase letter" },
  { id: Math.random(), value: "Contains a number" },
  { id: Math.random(), value: "Contains speacial character" },
];

const Registration = () => {
  const PasswordStrengthChecker = () => {
    return (
      <>
        <div className="grid gap-2 grid-cols-4 ">
          <p className="col-span-2 text-sm justify-self-start">
            Password Strength
          </p>
          <p className="col-span-2 text-sm justify-self-end">Very Weak</p>
          <div className="h-[3px] w-full bg-[#626262]"></div>
          <div className="h-[3px] w-full bg-[#626262]"></div>
          <div className="h-[3px] w-full bg-[#626262]"></div>
          <div className="h-[3px] w-full bg-[#626262]"></div>
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
    <Card className="w-[350px]">
      <CardHeader className="space-y-1 text-center">
        <CardTitle className="text-2xl font-bold text-[#1F41BB]">
          Create Account
        </CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4 text-center">
        <FormField
          id="email"
          type="email"
          placeholder="Email Address"
          icons="email"
        />
        <FormField
          id="password"
          type="password"
          placeholder="Password"
          icons="password"
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
    </Card>
  );
};

export default Registration;
