import type { FC } from "react";
import Avatars from "../Avatars";
import { ListAvatar } from "@src/utils/initialData";
import Image from "../Image";
import Add from "@src/assets/icons/Plus.svg";

interface Props {}
const Users: FC<Props> = () => {
  const activeClass =
    "before:content-[''] before:absolute before:w-[0.55rem] before:h-[0.55rem] before:bg-green-600 before:rounded-full before:bottom-[1px] before:right-[9px]";

  return (
    <div className="flex place-content-end pr-4">
      {ListAvatar.map((item, index) => (
        <div key={index} className={`pr-2 relative  ${activeClass}`}>
          <Avatars image={item.image} />
        </div>
      ))}
      <div className="bg-blue-600 place-items-center grid rounded-full w-[2.5rem] h-[2.5rem]">
        <Image src={Add} alt="add user" />
      </div>
    </div>
  );
};

export default Users;
