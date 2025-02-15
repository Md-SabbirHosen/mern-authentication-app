import { useState } from "react";
import { Input } from "./ui/input";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";

const FormField = (props) => {
  const [showPassword, setShowPassword] = useState(false);

  const inputChangeHandler = (event) => {
    if (props.type === "email") props.onEmailChangeHandler(event.target.value);
    else props.onPasswordChangelHandler(event.target.value);
  };
  const passwordShowHandler = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="relative ">
      <Input
        className="text-base  p-5 px-8 placeholder:text-[#626262] placeholder:font-medium placeholder:text-base border  border-[#8E54E9] bg-transparent focus:border-[#4776E6] focus:ring-2 focus:ring-[#4776E6] focus:ring-offset-0 focus:ring-offset-[#F1F4FF] outline-none"
        id={props.id}
        type={
          props.type === "password"
            ? showPassword
              ? "text"
              : "password"
            : props.type
        }
        placeholder={props.placeholder}
        icons={props.icons}
        onChange={inputChangeHandler}
      />
      {props.type === "password" && (
        <button
          type="button"
          onClick={passwordShowHandler}
          className="absolute right-4 top-1/2 -translate-y-1/2 transition"
        >
          {showPassword ? <FaEye /> : <FaEyeSlash />}
        </button>
      )}
    </div>
  );
};

export default FormField;
