import Header from "@src/components/Header";
import SideBar from "@src/components/SideBar";
import { type FC, type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const MainLayout: FC<Props> = ({ children }) => {
  return (
    <div className="flex bg-gray-200 h-full">
      <SideBar />
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
