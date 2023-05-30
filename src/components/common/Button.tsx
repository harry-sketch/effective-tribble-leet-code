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
    sm: "px-2 rounded-lg text-sm",
    md: "px-3 rounded-lg text-sm",
    lg: "px-4 rounded-xl text-base",
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
        "border-none outline-none  font-medium transition-all duration-300 ease-linear h-8 flex items-center justify-center"
      )}
    >
      {text}
    </button>
  );
};
export default Button;
