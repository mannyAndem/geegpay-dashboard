import NotificationIcon from "../ui/NotificationIcon";
import menuIcon from "../../assets/icons/icons8-menu.svg";
import menuIconDark from "../../assets/icons/menu-dark.svg";
import closeIconDark from "../../assets/icons/close-icon-dark.svg";
import closeIcon from "../../assets/icons/211652_close_icon.svg";
import UserInfo from "../ui/UserInfo";
import MobileSidebar from "./MobileSidebar";
import { useState } from "react";
import { useThemeContext } from "../../contexts/ThemeContext";

const MobileHeader = () => {
  const [sideBarExpanded, setSideBarExpanded] = useState(false);

  const { theme } = useThemeContext();

  const toggleSideBarExpanded = () => {
    setSideBarExpanded((prev) => !prev);
  };
  return (
    <div className="p-5 flex items-center gap-6 justify-between bg-smokeGray border-b border-[#EBECF2] dark:bg-darkGreen dark:bg-opacity-70 dark:border-paleGreen">
      {theme === "light sticky top-5" ? (
        <button className="z-50" onClick={toggleSideBarExpanded}>
          {sideBarExpanded ? <img src={closeIcon} /> : <img src={menuIcon} />}
        </button>
      ) : (
        <button className="z-50 sticky top-5" onClick={toggleSideBarExpanded}>
          {sideBarExpanded ? (
            <img src={closeIconDark} />
          ) : (
            <img src={menuIconDark} />
          )}
        </button>
      )}
      <MobileSidebar expanded={sideBarExpanded} />
      <div className="flex items-center gap-5">
        <NotificationIcon />
        <UserInfo />
      </div>
    </div>
  );
};

export default MobileHeader;
