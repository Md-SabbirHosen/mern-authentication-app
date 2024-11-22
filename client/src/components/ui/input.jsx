import * as React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { RxLockClosed } from "react-icons/rx";

import { cn } from "@/lib/utils";

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  const InputPlaceholderIcon = ({ icons }) => {
    const classes =
      "absolute top-1/2 left-2  transform -translate-y-1/2 text-[#626262] text-lg";
    return icons === "email" ? (
      <MdOutlineEmail className={classes} />
    ) : (
      <RxLockClosed className={classes} />
    );
  };
  return (
    <div className="relative ">
      <InputPlaceholderIcon icons={props.icons} />
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    </div>
  );
});
Input.displayName = "Input";

export { Input };
