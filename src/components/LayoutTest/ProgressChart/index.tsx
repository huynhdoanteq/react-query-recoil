import BorderRounded from "@src/components/BorderRounded";
import ProgressChart from "@src/components/ProgressChart";
import { UserService } from "@src/services/userService";
import { socialAnalyticsState } from "@src/state/atom";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useRecoilState } from "recoil";

const ProgressChartTest = () => {
  const [socialAnalytics, setSocialAnalytics] =
    useRecoilState(socialAnalyticsState);

  const { data, isLoading } = useQuery({
    queryKey: ["socialAnalytics"],
    queryFn: UserService.getSocialAnalytics,
  });

  useEffect(() => {
    if (!isLoading) {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      data && setSocialAnalytics(data?.data);
    }
  }, [data, isLoading, setSocialAnalytics]);

  return (
    <div className="flex gap-8">
      {socialAnalytics &&
        socialAnalytics.map((item, index) => (
          <BorderRounded
            className="bg-white-100 max-w-[14.75rem] p-8 my-2"
            key={index}
          >
            <div className="text-center text-lg text-black-900">
              {item.socialName}
            </div>
            <ProgressChart
              percent={item.percent}
              innerColor={item.innerColor}
              circleColor={item.circleColor}
            />
          </BorderRounded>
        ))}
    </div>
  );
};

export default ProgressChartTest;
