import { cn } from "@src/utils/commonUtils";
import type { ElementType, FC, ReactNode } from "react";

export interface ButtonProps<T extends ElementType> {
  as?: T;
  variant?:
    | "filled"
    | "light"
    | "outline"
    | "transparent"
    | "white"
    | "subtle"
    | "default"
    | "gradient";
  rounded?: boolean;
  noShadow?: boolean;
  size?: "xs" | "sm" | "md" | "lg";
  prefix?: ReactNode;
  suffix?: ReactNode;
  children: ReactNode;
  disabled?: boolean;
}

interface ContentProps {
  className?: string;
  prefix?: ReactNode;
  suffix?: ReactNode;
  children: ReactNode;
}

const Button: FC<ContentProps> = ({ className, children }) => {
  return (
    <button className={cn("py-2 px-6 rounded-lg", className)}>
      {children}
    </button>
  );
};

export default Button;
