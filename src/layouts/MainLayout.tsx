import Footer from "@src/components/Footer";
import Header from "@src/components/Header";
import SideBar from "@src/components/SideBar";
import { type FC, type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const MainLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <SideBar />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
