import type { FC } from "react";
import Image from "../Image";
import Dots from "@src/assets/icons/Icon.svg";

interface Props {
  userAvatar: string;
  userName: string;
  userLocation: string;
  onClick?: () => void;
}

const UserInfoCard: FC<Props> = ({
  userAvatar,
  userName,
  userLocation,
  onClick,
}) => {
  return (
    <div className="flex justify-between pb-4">
      <div className="flex justify-start w-[90%] items-center">
        <div className="w-[20%] grid place-items-center">
          <Image
            src={userAvatar}
            alt="avt"
            className="rounded-full w-[4.375rem] h-[4.375rem]"
          />
        </div>
        <div className="ml-3 text-left">
          <h2>{userName}</h2>
          <h4 className="text-gray-300 text-left">{userLocation}</h4>
        </div>
      </div>
      <div
        className="place-item-center grid w-[10%]"
        onClick={() => onClick && onClick()}
      >
        <Image src={Dots} alt="three dots" className="translate-x-[15px]" />
      </div>
    </div>
  );
};

export default UserInfoCard;
