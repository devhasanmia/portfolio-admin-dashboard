import { UseFormRegisterReturn } from "react-hook-form";

interface PInputProps {
  title: string;
  type: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  required: boolean;
  value?: string;
  className?: string;
  label: string;
  placeholder?: string;
  error?: any;
  register?: UseFormRegisterReturn<any>;
}

const PInput = ({
  title,
  type,
  onChange,
  required,
  value,
  className,
  label,
  placeholder,
  error,
  register,
}: PInputProps) => {
  return (
    <div className="mb-4">
      <label className="block font-medium mb-1" htmlFor={title}>
        {label}
      </label>
      <input
        type={type}
        id={title}
        value={value}
        {...register}
        onChange={onChange}
        className={`w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
        placeholder={placeholder}
        required={required}
      />
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
  );
};

export default PInput;
