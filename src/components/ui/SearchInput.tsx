import searchIcon from "../../assets/icons/search-icon.png";

const SearchInput = ({}) => {
  return (
    <input
      style={{ backgroundImage: `url(${searchIcon})` }}
      className="w-full pl-12 py-3  bg-no-repeat border border-gray rounded-full  bg-[1rem_center]"
      placeholder="Search"
    />
  );
};

export default SearchInput;
