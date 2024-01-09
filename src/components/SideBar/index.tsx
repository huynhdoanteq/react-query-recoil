import { Link } from "react-router-dom";
import Image from "../Image";
import { ListIcon } from "@src/utils/initialData";
import Setting from "@src/assets/icons/Icon8.svg";

const SideBar = () => {
  return (
    <div className="sidebar rounded-r-[20px] bg-white-100 h-full relative">
      <ul className="list-none mt-4 px-2">
        {ListIcon.map((item: any) => (
          <li className="p-4 grid place-items-center first:border-b first:border-gray-300">
            <Image
              src={item.icon}
              alt={item.alt}
              className="w-[2rem] h-[2rem]"
            />
            <Link to={item.link} />
          </li>
        ))}
        <li className="p-4 absolute bottom-4">
          <Image src={Setting} alt="setting" className="w-[2rem] h-[2rem]" />
          <Link to="/setting" />
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
