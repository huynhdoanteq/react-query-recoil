import type { FC } from "react";

interface Props {
  socialName: string;
  percent: number;
}
const TextCount: FC<Props> = ({ socialName, percent }) => {
  return (
    <div className="flex justify-between pb-1 text-sm">
      <span>{socialName}</span>
      <span className="text-green-600">{percent}</span>
    </div>
  );
};

export default TextCount;
