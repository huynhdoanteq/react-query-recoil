import Header from "@src/components/Header";
import SideBar from "@src/components/SideBar";
import { useEffect, type FC, type ReactNode } from "react";
import { useQuery } from "@tanstack/react-query";
import { UserService } from "@src/services/userService";
import UserInfo from "@src/components/UserInfo";
import { useRecoilState } from "recoil";
import { userSocialAnalyticsState } from "@src/state/atom";

interface Props {
  children: ReactNode;
}

const MainLayout: FC<Props> = ({ children }) => {
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

  console.log(userSocialAnalytics, "userSocialAnalytics");

  return (
    <div className="flex bg-gray-200 h-full">
      <SideBar />
      <div className="inline w-full pl-5 pt-5">
        <Header />
        <main>{children}</main>
        {!isLoading &&
          userSocialAnalytics &&
          userSocialAnalytics.map((item: any, index) => (
            <div key={index}>
              <UserInfo userInfo={item} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default MainLayout;
