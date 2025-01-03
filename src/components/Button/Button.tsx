"use client";

import { useRouter } from "next/navigation";

type ButtonNavProps = {
  label: string;
  variant?: "primary" | "secondary";
  disabled?: boolean;
  destination?: string;
  external?: boolean;
};

const Button: React.FC<ButtonNavProps> = ({
  label,
  destination = "/",
  variant = "primary",
  disabled = false,
  external = false,
}) => {
  const router = useRouter();

  const handleClick = () => {
    if (!disabled) {
      if (destination && external) {
        window.open(destination, "_blank", "noopener,noreferrer");
      } else if (destination) {
        router.push(destination);
      }
    }
  };

  const baseStyle =
    "px-4 py-2 rounded font-medium text-white transition duration-300 focus:outline-none focus:ring-offset-2 focus:ring-2";
  const variants = {
    primary: `bg-blue-500 hover:bg-blue-600 focus:ring-blue-500`,
    secondary: `bg-gray-500 hover:bg-gray-600 focus:ring-gray-500`,
    tertiary: `bg-green-500 hover:bg-green-600 focus:ring-green-500`,
    quarternary: `bg-red-500 hover:bg-red-600 focus:ring-red-500`,
  };

  return (
    <button
      className={`${baseStyle} ${variants[variant]} ${
        disabled ? "bg-gray-300 cursor-not-allowed" : ""
      }`}
      onClick={handleClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
