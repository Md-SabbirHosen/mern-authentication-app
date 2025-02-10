import { Input } from "./ui/input";
import React from "react";
const FormField = (props) => {
  const inputChangeHandler = (event) => {
    if (props.type === "email") props.onEmailChangeHandler(event.target.value);
    else props.onPasswordChangelHandler(event.target.value);
  };

  return (
    <div className="grid gap-2">
      <Input
        className="text-base  p-5 px-8 placeholder:text-[#626262] placeholder:font-medium placeholder:text-base border  border-[#8E54E9] bg-transparent focus:border-[#4776E6] focus:ring-2 focus:ring-[#4776E6] focus:ring-offset-0 focus:ring-offset-[#F1F4FF] outline-none"
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        icons={props.icons}
        onChange={inputChangeHandler}
      />
    </div>
  );
};

export default FormField;
