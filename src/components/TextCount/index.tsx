import type { FC } from "react";

interface Props {
  socialName: string;
  percent: number;
  colorProgress: string;
}
const TextCount: FC<Props> = ({ socialName, percent, colorProgress }) => {
  return (
    <div className="flex justify-between pb-1 text-sm">
      <span>{socialName}</span>
      <span className="text-green-600" style={{ color: colorProgress }}>
        {percent}
      </span>
    </div>
  );
};

export default TextCount;
