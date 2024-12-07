import React from "react";

const Divider = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 flex items-center">
        <span className="w-full border-t" />
      </div>
      <div className="relative flex justify-center text-xs uppercase">
        <span className="bg-background px-2 text-xs font-semibold text-[#1F41BB]">
          Or continue with
        </span>
      </div>
    </div>
  );
};

export default Divider;
