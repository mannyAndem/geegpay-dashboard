import profileImg from "../../assets/images/profileImg.png";
import arrowDown from "../../assets/icons/arrow-down.svg";
import { useState } from "react";
import Popup from "./Popup";

const UserInfo = () => {
  const [userPopupVisible, setUserPopupVisible] = useState(false);

  const toggleUserPopup = () => {
    setUserPopupVisible((prev) => !prev);
  };
  return (
    <div
      onClick={toggleUserPopup}
      className="cursor-pointer relative p-2 border border-gray rounded-[28px] flex items-center gap-2 font-inter"
    >
      <div>
        <img src={profileImg} />
      </div>
      <div className="flex flex-col text-center">
        <span>Justin Bergson</span>
        <span className="text-sm">justin@gmail.com</span>
      </div>
      <img
        src={arrowDown}
        className={`${
          userPopupVisible ? "rotate-180" : ""
        } transition-all duration-300 ease-out`}
      />
      <div className="absolute top-[105%] left-0 right-0">
        <Popup visible={userPopupVisible}>
          <div className="flex flex-col gap-2">
            <span>Account Information</span>
            <span>Profile Settings</span>
            <span className="text-red">Logout</span>
          </div>
        </Popup>
      </div>
    </div>
  );
};

export default UserInfo;
