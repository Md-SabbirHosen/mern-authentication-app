import { RxCross2 } from "react-icons/rx";
import { FaCheck } from "react-icons/fa6";

const PasswordCriteria = ({ password }) => {
  const PASSWORD_CONSTRAINS = [
    {
      id: Math.random(),
      label: "At least 6 characters",
      met: password.length >= 6,
    },
    {
      id: Math.random(),
      label: "Contains uppercase letter",
      met: /[A-Z]/.test(password),
    },
    {
      id: Math.random(),
      label: "Contains lowercase letter",
      met: /[a-z]/.test(password),
    },
    { id: Math.random(), label: "Contains a number", met: /\d/.test(password) },
    {
      id: Math.random(),
      label: "Contains speacial character",
      met: /[^A-Za-z0-9]/.test(password),
    },
  ];

  return (
    <>
      {PASSWORD_CONSTRAINS.map((item) => {
        return (
          <p
            className={`text-start text-sm font-medium flex gap-1 items-center transition ${
              !item.met ? "text-[#c31432]" : "text-[#11998e]"
            }`}
            key={item.id}
          >
            {item.met ? <FaCheck /> : <RxCross2 />}
            {item.label}
          </p>
        );
      })}
    </>
  );
};

const PasswordStrengthChecker = ({ password }) => {
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
          <PasswordCriteria password={password} />
        </div>
      </div>
    </>
  );
};

export default PasswordStrengthChecker;
