import UserInfo from "@src/components/UserInfo";
import { UserService } from "@src/services/userService";
import { userSocialAnalyticsState } from "@src/state/atom";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useRecoilState } from "recoil";

const ProgressBarTest = () => {
  const [userSocialAnalytics, setUserSocialAnalytics] = useRecoilState(
    userSocialAnalyticsState
  );

  const { data, isLoading } = useQuery({
    queryKey: ["userInfo"],
    queryFn: UserService.getUserSocialAnalytics,
  });

  useEffect(() => {
    if (!isLoading) {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      data && setUserSocialAnalytics(data?.data);
    }
  }, [data, isLoading, setUserSocialAnalytics]);

  return (
    <>
      {userSocialAnalytics &&
        userSocialAnalytics.map((item, index) => (
          <div key={index}>
            <UserInfo userInfo={item} />
          </div>
        ))}
    </>
  );
};

export default ProgressBarTest;
