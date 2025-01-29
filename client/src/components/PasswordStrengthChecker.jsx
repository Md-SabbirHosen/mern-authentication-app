import { RxCross2 } from "react-icons/rx";
const PASSWORD_CONSTRAINS = [
  { id: Math.random(), value: "At least 6 characters" },
  { id: Math.random(), value: "Contains uppercase letter" },
  { id: Math.random(), value: "Contains lowercase letter" },
  { id: Math.random(), value: "Contains a number" },
  { id: Math.random(), value: "Contains speacial character" },
];

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

export default PasswordStrengthChecker;
