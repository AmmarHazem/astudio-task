import clsx from "clsx";
import { FC } from "react";

const Button: FC<ButtonProps> = ({ children, className, onClick }) => {
  return (
    <button className={clsx("bg-[#c0e3e5] cursor-pointer text-black px-4 py-2 rounded-md", className)} onClick={onClick}>
      {children}
    </button>
  );
};

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default Button;
