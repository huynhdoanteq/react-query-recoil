import { cn } from "@src/utils/commonUtils";
import type { FC, ReactNode } from "react";

interface Props {
  className?: string;
  children: ReactNode;
}

const BorderRounded: FC<Props> = ({ className, children }) => {
  return <div className={cn("rounded-lg", className)}>{children}</div>;
};

export default BorderRounded;
