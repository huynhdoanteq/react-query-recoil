import type { ElementType, FC, ReactNode } from "react";

export interface ButtonProps<T extends ElementType> {
  as?: T;
  variant?: "primary" | "secondary" | "tertiary" | "disabled";
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
  return <button className={className}>{children}</button>;
};

export default Button;
