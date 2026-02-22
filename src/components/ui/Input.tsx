import type { InputHTMLAttributes } from "react";
interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  title?: string;
}

const Input = ({ ...rest }: IProps) => {
  return (
    <input
      className="border rounded-md border-gray-300 focus:outline-none shadow-md focus:ring-1 focus:ring-indigo-600 focus:border-transparent p-2 text-md"
      {...rest}
    />
  );
};

export default Input;
