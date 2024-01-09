import Search from "@src/assets/icons/Search.svg";
import Image from "../Image";
import Input from "../Input";

const SearchBar = () => {
  return (
    <div className="bg-gray-200 w-full flex h-[30px] items-center">
      <Image src={Search} alt="search icon" className="w-[1.5rem] h-[1.5rem]" />
      <Input
        type="input"
        placeHolder="Search"
        className="bg-gray-200 pl-2 text-sm"
      />
    </div>
  );
};

export default SearchBar;
