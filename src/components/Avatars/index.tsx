import type { FC } from "react";
import Image from "../Image";

interface Props {
  image: string;
}

const Avatars: FC<Props> = ({ image }) => {
  return (
    <div className="rounded-full">
      <Image src={image} alt="avatar" className="w-[2.5rem] h-[2.5rem]" />
    </div>
  );
};

export default Avatars;
