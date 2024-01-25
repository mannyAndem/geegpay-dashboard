import logo from "../../assets/brand/logo.png";
import SidebarIcon from "../ui/SidebarIcon";
import dashboardIcon from "../../assets/icons/category.svg";
import trendUpIcon from "../../assets/icons/trend-up.svg";
import userIcon from "../../assets/icons/profile-2user.svg";
import boxIcon from "../../assets/icons/box.svg";
import discountIcon from "../../assets/icons/discount-shape.svg";
import infoCircleIcon from "../../assets/icons/info-circle.svg";
import ThemeToggle from "../feature/ThemeToggle";
import arrowRight from "../../assets/icons/arrow-right.svg";
import settingsIcon from "../../assets/icons/setting-2.svg";
import logoutIcon from "../../assets/icons/logout.png";

const LINKS = [
  {
    to: "/",
    icon: dashboardIcon,
  },
  {
    to: "trends",
    icon: trendUpIcon,
  },
  {
    to: "users",
    icon: userIcon,
  },
  {
    to: "offers",
    icon: boxIcon,
  },
  {
    to: "discounts",
    icon: discountIcon,
  },
  {
    to: "info",
    icon: infoCircleIcon,
  },
];

const Sidebar = () => {
  return (
    <div className="py-5 flex flex-col justify-between gap-24 bg-veryLightGray border-r border-[#EBECF2]">
      <div>
        <div className="my-5 flex items-center justify-center">
          <img src={logo} />
        </div>
        <nav className="flex flex-col gap-4 ">
          {LINKS.map(({ icon, to }) => (
            <SidebarIcon icon={icon} to={to} />
          ))}
        </nav>
        <div className="mt-4">
          <ThemeToggle />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <SidebarIcon icon={arrowRight} />
        <SidebarIcon icon={settingsIcon} />
        <SidebarIcon icon={logoutIcon} />
      </div>
    </div>
  );
};

export default Sidebar;
