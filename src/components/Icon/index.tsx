import type { FC } from "react";
import Image from "../Image";
import { cn } from "@src/utils/commonUtils";

interface Props {
  image: string;
  color: string;
  className?: string;
}

const Icon: FC<Props> = ({ image, color, className }) => {
  return (
    <div
      className={cn(className, "rounded-full")}
      style={{ backgroundColor: color }}
    >
      <Image src={image} alt="icon" className="p-5" />
    </div>
  );
};

export default Icon;
