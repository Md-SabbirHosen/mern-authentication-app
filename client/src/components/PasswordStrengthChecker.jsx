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
            className={`text-start text-sm font-medium flex gap-1 items-center transition `}
            key={item.id}
          >
            {item.met ? (
              <FaCheck className="text-green-500" />
            ) : (
              <RxCross2 className="text-gray-700" />
            )}
            <span className={item.met ? "text-green-500" : "text-gray-700"}>
              {item.label}
            </span>
          </p>
        );
      })}
    </>
  );
};

const PasswordStrengthChecker = ({ password, onPasswordIsValidHandler }) => {
  const getStrength = (password) => {
    let strength = 0;
    if (password.length >= 6) strength += 25;
    if (password.match(/[A-Z]/) && password.match(/[a-z]/)) strength += 25;
    if (password.match(/\d/)) strength += 25;
    if (password.match(/[^A-Za-z\d]/)) strength += 25;
    return strength;
  };

  const strength = getStrength(password);

  onPasswordIsValidHandler(strength);

  const getColor = (strength) => {
    if (strength === 0) return "bg-red-500";
    if (strength === 25) return "bg-red-400";
    if (strength === 50) return "bg-yellow-500";
    if (strength === 75) return "bg-yellow-400";
    if (strength === 100) return "bg-green-500";
  };

  const getStrengthText = (strength) => {
    if (strength === 0) return "Very Weak";
    if (strength === 25) return "Weak";
    if (strength === 50) return "Fair";
    if (strength === 75) return "Good";
    if (strength === 100) return "Strong";
  };

  return (
    <>
      <div className="grid gap-2 grid-cols-4 ">
        <p className="col-span-2 text-sm font-medium justify-self-start">
          Password Strength
        </p>
        <p className="col-span-2 text-sm font-medium justify-self-end">
          {getStrengthText(strength)}
        </p>
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className={`h-[3px] w-full transition ${
              index * 25 < strength ? getColor(strength) : "bg-gray-600"
            }`}
          />
        ))}
        <div className="col-span-4 ">
          <PasswordCriteria password={password} />
        </div>
      </div>
    </>
  );
};

export default PasswordStrengthChecker;
