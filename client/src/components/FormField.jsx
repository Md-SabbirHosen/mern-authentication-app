import { Label } from "./ui/label";
import { Input } from "./ui/input";

const FormField = ({ id, label, type, placeholder }) => {
  return (
    <div className="grid gap-2">
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} type={type} placeholder={placeholder} />
    </div>
  );
};

export default FormField;
