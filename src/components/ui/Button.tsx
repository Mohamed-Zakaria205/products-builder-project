import type { ButtonHTMLAttributes, ReactNode } from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  width?: "w-full" | "w-fit";
}

const Button = ({ children, className, width = "w-fit", ...rest }: IProps) => {
  return (
    <button
      className={`${className} ${width} p-2 rounded-md cursor-pointer font-medium transition-colors duration-300 hover:bg-opacity-90`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
