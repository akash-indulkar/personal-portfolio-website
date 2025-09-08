type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline" | "destructive" | "ghost";
  size?: "sm" | "md" | "lg";
};

const Button: React.FC<ButtonProps> = ({
  variant = "default",
  size = "md",
  className = "",
  children,
  ...props
}) => {
  const base =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed";

  const variants: Record<string, string> = {
    default: "bg-blue-500 text-white hover:cursor-pointer",
    outline: "hover:text-blue-500 border border-gray-300 bg-white text-gray-800 hover:bg-blue-100 hover:cursor-pointer",
    destructive: "bg-red-600 text-white hover:bg-red-700 hover:cursor-pointer",
    ghost: `px-4 py-2 rounded-lg font-medium border border-gray-300 md:border-none md:bg-transparent bg-white text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-all duration-200 hover:cursor-pointer`
  };

  const sizes: Record<string, string> = {
    sm: "px-2 py-1 text-xs",
    md: "px-3 py-1.5 text-sm",
    lg: "px-4 py-2 text-base"
  };

  const styles = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  return (
    <button className={styles} {...props}>
      {children}
    </button>
  );
};
export { Button }

