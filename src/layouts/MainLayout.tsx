import BorderRounded from "@src/components/BorderRounded";
import Header from "@src/components/Header";
import Image from "@src/components/Image";
import SideBar from "@src/components/SideBar";
import { type FC, type ReactNode } from "react";
import Avatar from "@src/assets/icons/Photo.png";
import Dots from "@src/assets/icons/Icon.svg";

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
        <BorderRounded className="bg-white-100 max-w-[28rem]">
          <div className="flex justify-between pb-4">
            <div className="flex p-4 justify-start w-[90%] items-center">
              <div className="w-[20%]">
                <Image
                  src={Avatar}
                  alt="avt"
                  className="rounded-full w-[4.375rem] h-[4.375rem]"
                />
              </div>
              <div className="ml-3">
                <h2>Ava Gregoraci</h2>
                <h4 className="text-gray-300 text-left">Bulgaria</h4>
              </div>
            </div>
            <div className="place-item-center grid w-[10%] pt-4">
              <Image src={Dots} alt="three dots" className="pr-4" />
            </div>
          </div>
        </BorderRounded>
        {/* <Button className="bg-white-100 text-blue-600 text-sm">See more</Button> */}
      </div>
    </div>
  );
};

export default MainLayout;
