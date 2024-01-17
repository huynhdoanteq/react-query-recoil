import Header from "@src/components/Header";
// import Icon from "@src/components/Icon";
import ProgressChartTest from "@src/components/LayoutTest/ProgressChart";
import SideBar from "@src/components/SideBar";
import type { FC, ReactNode } from "react";
// import Fire from "@src/assets/icons/Fire.png";
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
        {/* <ProgressBarTest /> */}
        <ProgressChartTest />
        {/* <Icon image={Fire} color="#E2FBD7" className="w-[90px] h-[90px]" /> */}
      </div>
    </div>
  );
};

export default MainLayout;
