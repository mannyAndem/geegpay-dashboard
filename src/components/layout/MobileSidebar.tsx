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

interface MobileSidebarProps {
  expanded: boolean;
}

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

const MobileSidebar = ({ expanded }: MobileSidebarProps) => {
  return (
    <div
      className={`${
        expanded ? "scale-x-100" : "scale-x-0"
      } origin-left transition-all duration-300 ease-out pt-16 fixed top-0 left-0 min-h-screen w-[40vw] flex flex-col lg:justify-between gap-4 lg:gap-8 bg-veryLightGray border-r border-[#EBECF2] dark:bg-darkGreen dark:border-paleGreen z-30`}
    >
      <div>
        <div className="my-5 flex items-center justify-center">
          <img src={logo} />
        </div>
        <nav className="flex flex-col gap-2 lg:gap-4 ">
          {LINKS.map(({ icon, to }) => (
            <SidebarIcon icon={icon} to={to} />
          ))}
        </nav>
        <div className="mt-4">
          <ThemeToggle />
        </div>
      </div>
      <div className="flex flex-col gap-2 lg:gap-4">
        <SidebarIcon icon={arrowRight} />
        <SidebarIcon icon={settingsIcon} />
        <SidebarIcon icon={logoutIcon} />
      </div>
    </div>
  );
};

export default MobileSidebar;
