import type { FC } from "react";

interface Props {
  percent: number;
  circleColor: string;
  innerColor: string;
}

const ProgressChart: FC<Props> = ({ percent, circleColor, innerColor }) => {
  // 48 is radius
  const circumference = 48 * 2 * Math.PI;
  const strokeDashoffset = (percent / 100) * circumference;
  const offset = circumference - strokeDashoffset;

  return (
    <div className="flex justify-center mt-3 relative">
      <div
        className="text-base absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ zIndex: 9 }}
      >
        {percent}%
      </div>
      <svg
        width="104"
        height="104"
        viewBox="0 0 104 104"
        className="transform -rotate-90"
      >
        <circle
          r="48"
          cx="52"
          cy="52"
          strokeWidth="8"
          fill={innerColor}
          stroke={innerColor}
          strokeLinecap="round"
          className="transition-colors ease-linear"
        ></circle>
        <circle
          r="48"
          cx="52"
          cy="52"
          strokeWidth="8"
          strokeDasharray={circumference + " " + circumference}
          strokeDashoffset={offset}
          fill="transparent"
          stroke={circleColor}
          strokeLinecap="round"
          className="transition-all duration-300 ease-in-out"
        ></circle>
      </svg>
    </div>
  );
};

export default ProgressChart;
