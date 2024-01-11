import { cn } from "@src/utils/commonUtils";
import type { FC } from "react";

interface Props {
  percent: number;
  progressBar?: string;
  innerProgressbar?: string;
}

const ProgressBarItem: FC<Props> = ({
  percent = 0,
  progressBar,
  innerProgressbar,
}) => {
  const percentWidth = `${percent}%`;
  return (
    <div
      className={cn("progress-bar w-full h-[0.5rem] relative rounded z-0")}
      style={{ backgroundColor: progressBar }}
    >
      <span
        className={cn(
          "progress-inner absolute h-[0.5rem] rounded top-0 left-0 z-8"
        )}
        style={{ width: percentWidth, backgroundColor: innerProgressbar }}
      ></span>
    </div>
  );
};

export default ProgressBarItem;
