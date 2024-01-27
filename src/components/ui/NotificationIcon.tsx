import bellIcon from "../../assets/icons/bell-icon.svg";
import bellIconDark from "../../assets/icons/bell-icon-dark.svg";
import { useThemeContext } from "../../contexts/ThemeContext";

const NotificationIcon = () => {
  const { theme } = useThemeContext();
  return theme === "light" ? (
    <img src={bellIcon} alt="" />
  ) : (
    <img src={bellIconDark} alt="" />
  );
};

export default NotificationIcon;
