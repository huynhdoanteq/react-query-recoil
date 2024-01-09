import SearchBar from "../SearchBar/index ";
import Users from "../Users";

const Header = () => {
  return (
    <div className="w-full flex items-center">
      <div className="w-4/5">
        <SearchBar />
      </div>
      <div className="w-1/3">
        <Users />
      </div>
    </div>
  );
};

export default Header;
