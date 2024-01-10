import BorderRounded from "@src/components/BorderRounded";
import Header from "@src/components/Header";
import SideBar from "@src/components/SideBar";
import { type FC, type ReactNode } from "react";
import Avatar from "@src/assets/icons/Photo.png";
import ProgressBar from "@src/components/ProgressBar";
import UserInfoCard from "@src/components/UserInfoCard";

interface Props {
  children: ReactNode;
}

const MainLayout: FC<Props> = ({ children }) => {
  return (
    <div className="flex bg-gray-200 h-full">
      <SideBar />
      <div className="inline w-full pl-5 pt-5">
        <Header />
        <main>{children}</main>
        <BorderRounded className="bg-white-100 max-w-[28rem] p-4">
          <UserInfoCard
            userAvatar={Avatar}
            userName="Ava Gregoraci"
            userLocation="Bulgaria"
          />
          <ProgressBar
            percent={65.376}
            progressClassName="bg-green-200"
            innerClassName="bg-green-600"
            socialName="Instagram"
          />
          <ProgressBar
            percent={60.376}
            progressClassName="bg-green-200"
            innerClassName="bg-green-600"
            socialName="Facebook"
          />
        </BorderRounded>
      </div>
    </div>
  );
};

export default MainLayout;
