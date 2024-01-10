import { cn } from "@src/utils/commonUtils";
import type { FC } from "react";

interface Props {
  percent: number;
  progressClassName?: string;
  innerClassName?: string;
}

const ProgressBarItem: FC<Props> = ({
  percent = 10,
  progressClassName,
  innerClassName,
}) => {
  const percentWidth = `w-[${percent}%]`;
  return (
    <div
      className={cn(
        "progress-bar w-full h-[0.5rem] relative rounded z-0",
        progressClassName
      )}
    >
      <div
        className={cn(
          "progress-inner absolute h-[0.5rem] rounded top-0 left-0 z-8",
          innerClassName,
          percentWidth
        )}
      ></div>
    </div>
  );
};

export default ProgressBarItem;
