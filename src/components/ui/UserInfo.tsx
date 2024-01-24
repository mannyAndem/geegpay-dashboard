import profileImg from "../../assets/images/profileImg.png";
import arrowDown from "../../assets/icons/arrow-down.svg";

const UserInfo = () => {
  return (
    <div className="p-2 border border-gray rounded-[28px] flex items-center gap-2">
      <div>
        <img src={profileImg} />
      </div>
      <div className="flex flex-col text-center">
        <span>Justin Bergson</span>
        <span className="text-sm">justin@gmail.com</span>
      </div>
      <img src={arrowDown} />
    </div>
  );
};

export default UserInfo;
