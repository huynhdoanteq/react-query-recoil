import Search from "@src/assets/icons/Search.svg";
import Icon from "../Icon";
import Input from "../Input";

const SearchBar = () => {
  return (
    <div className="flex bg-gray-200">
      <Icon src={Search} alt="search icon" className="w-[25px] h-[25px]" />
      <Input
        type="input"
        placeHolder="Search"
        value="hi"
        className="bg-gray-200"
      />
    </div>
  );
};

export default SearchBar;
