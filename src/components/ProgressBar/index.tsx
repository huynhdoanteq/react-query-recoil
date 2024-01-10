import type { FC } from "react";
import TextCount from "../TextCount";
import ProgressBarItem from "../ProgressBarItem";

interface Props {
  percent: number;
  progressClassName?: string;
  innerClassName?: string;
  socialName: string;
}

const ProgressBar: FC<Props> = ({
  percent,
  progressClassName,
  innerClassName,
  socialName,
}) => {
  return (
    <div className="pb-2">
      <TextCount socialName={socialName} percent={percent} />
      <ProgressBarItem
        percent={percent}
        progressClassName={progressClassName}
        innerClassName={innerClassName}
      />
    </div>
  );
};

export default ProgressBar;
