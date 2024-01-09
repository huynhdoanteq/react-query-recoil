import Icon from "../Icon";
import { ListIcon } from "@src/utils/initialData";

const SideBar = () => {
  return (
    <div className="sidebar rounded-r-[20px] bg-white-100 h-full">
      <ul className="list-none mt-4 px-2">
        {ListIcon.map((item: any) => (
          <li className="p-4 grid place-items-center first:border-b first:border-gray-300">
            <Icon
              src={item.icon}
              alt={item.alt}
              className="w-[2rem] h-[2rem]"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
