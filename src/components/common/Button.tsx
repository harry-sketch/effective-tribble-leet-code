import { cw } from "@/utils/helpers";

type ButtonProps = {
  size: "sm" | "md" | "lg";
  text: string;
  type: "button" | "submit" | "reset";
  className?: string;
  onClick: () => void;
};

const Button: React.FC<ButtonProps> = ({
  type,
  text,
  size,
  className,
  onClick,
}) => {
  const sizeMap = {
    sm: "px-2 py-1.5 rounded-lg",
    md: "px-3 py-1.5 rounded-lg",
    lg: "px-4 py-2 rounded-xl",
  };

  const handleClick = () => {
    if (onClick) return onClick();
  };

  return (
    <button
      onClick={handleClick}
      type={type}
      className={cw(
        className,
        sizeMap[size],
        "border-none outline-none text-slate-50 font-medium transition-all duration-300 ease-linear"
      )}
    >
      {text}
    </button>
  );
};
export default Button;
