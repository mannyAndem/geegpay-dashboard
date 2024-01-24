import DateView from "../ui/DateView";
import NotificationIcon from "../ui/NotificationIcon";
import SearchInput from "../ui/SearchInput";
import UserInfo from "../ui/UserInfo";

const Header = () => {
  return (
    <div className="p-5 flex items-center gap-6 justify-between bg-veryLightGray">
      <div className="w-[60%] flex items-center justify-between">
        <h1 className="text-xl text-dark">Dashboard</h1>
        <div className="w-2/3">
          <SearchInput />
        </div>
      </div>
      <div className="flex items-center gap-5">
        <DateView />
        <NotificationIcon />
        <UserInfo />
      </div>
    </div>
  );
};

export default Header;
