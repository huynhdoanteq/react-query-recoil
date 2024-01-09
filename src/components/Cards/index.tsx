import { cn } from "@src/utils/commonUtils";
import type { FC, ReactNode } from "react";

interface Props {
  className?: string;
  children: ReactNode;
}

const Cards: FC<Props> = ({ className, children }) => {
  return <div className={cn("rounded", className)}>{children}</div>;
};

export default Cards;
