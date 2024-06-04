import React from "react";

interface ButtonProps extends React.ComponentProps<"button"> {
  primary?: boolean;
  secondary?: boolean;
}

const Button = ({ children, primary, secondary, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={`${
        primary
          ? "bg-primary hover:shadow-primary"
          : secondary
          ? "bg-secondary hover:shadow-secondary"
          : "bg-secondary-blue hover:shadow-secondary-blue"
      }
      block border-none cursor-pointer self-center py-5 px-7 text-2xl font-semibold text-secondary
       rounded-2xl duration-300 hover:shadow-md
      `}
    >
      {children}
    </button>
  );
};

export default Button;
