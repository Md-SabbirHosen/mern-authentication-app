import { Input } from "./ui/input";
import React from "react";
const FormField = React.forwardRef(({ id, type, placeholder, icons }, ref) => {
  return (
    <div className="grid gap-2">
      <Input
        className="text-base  p-5 px-8 placeholder:text-[#626262] placeholder:font-medium placeholder:text-base border  border-[#8E54E9] bg-transparent focus:border-[#4776E6] focus:ring-2 focus:ring-[#4776E6] focus:ring-offset-0 focus:ring-offset-[#F1F4FF] outline-none"
        id={id}
        type={type}
        placeholder={placeholder}
        icons={icons}
        ref={ref}
      />
    </div>
  );
});

export default FormField;
