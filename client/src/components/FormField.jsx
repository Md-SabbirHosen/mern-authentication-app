import { Input } from "./ui/input";

const FormField = ({ id, type, placeholder }) => {
  return (
    <div className="grid gap-2">
      <Input
        className="text-base bg-[#F1F4FF] p-5 placeholder:text-[#626262] placeholder:font-medium placeholder:text-base border border-[#F1F4FF] focus:border-[#1F41BB] focus:ring-2 focus:ring-[#1F41BB] focus:ring-offset-0 focus:ring-offset-[#F1F4FF] outline-none"
        id={id}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default FormField;
