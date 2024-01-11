import type { FC } from "react";
import TextCount from "../TextCount";
import ProgressBarItem from "../ProgressBarItem";

interface Props {
  percent: number;
  progressBar?: string;
  innerProgressbar?: string;
  socialName: string;
}

const ProgressBar: FC<Props> = ({
  percent,
  progressBar,
  innerProgressbar,
  socialName,
}) => {
  return (
    <div className="pb-4">
      <TextCount
        socialName={socialName}
        percent={percent}
        colorProgress={innerProgressbar || ""}
      />
      <ProgressBarItem
        percent={percent}
        progressBar={progressBar}
        innerProgressbar={innerProgressbar}
      />
    </div>
  );
};

export default ProgressBar;
